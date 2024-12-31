import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const AudioCard = ({ 
  title, 
  description, 
  audioFiles, 
  imageUrl, 
  contactInfo = {
    email: "contact@example.com",
    phone: "+1 (555) 000-0000"
  }
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const [progress, setProgress] = useState({})
  const modalRef = useRef()
  const progressIntervals = useRef({})

  // Debugging - log the imageUrl prop
  console.log('ImageUrl:', imageUrl);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handlePlay = (audioId) => {
    if (currentlyPlaying) {
      const currentAudio = document.getElementById(currentlyPlaying)
      clearInterval(progressIntervals.current[currentlyPlaying])
      currentAudio.pause()
      currentAudio.currentTime = 0
    }

    const audio = document.getElementById(audioId)
    audio.play()
    setCurrentlyPlaying(audioId)
    
    // Set up progress tracking
    setProgress(prev => ({ ...prev, [audioId]: 0 }))
    progressIntervals.current[audioId] = setInterval(() => {
      const progress = (audio.currentTime / audio.duration) * 100
      setProgress(prev => ({ ...prev, [audioId]: progress }))
      
      if (progress >= 100) {
        clearInterval(progressIntervals.current[audioId])
        setCurrentlyPlaying(null)
        setProgress(prev => ({ ...prev, [audioId]: 0 }))
      }
    }, 100)

    // Add ended event listener
    audio.addEventListener('ended', () => {
      clearInterval(progressIntervals.current[audioId])
      setCurrentlyPlaying(null)
      setProgress(prev => ({ ...prev, [audioId]: 0 }))
    })
  }

  const handlePause = (audioId) => {
    const audio = document.getElementById(audioId)
    audio.pause()
    clearInterval(progressIntervals.current[audioId])
    setCurrentlyPlaying(null)
    setProgress(prev => ({ ...prev, [audioId]: 0 }))
  }

  // Updated stopAllAudio to handle audio ended event
  const stopAllAudio = () => {
    audioFiles.forEach((_, index) => {
      const audio = document.getElementById(`audio-${index}`);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    setCurrentlyPlaying(null);
  }

  // Add effect to handle audio completion
  useEffect(() => {
    audioFiles.forEach((_, index) => {
      const audio = document.getElementById(`audio-${index}`);
      if (audio) {
        audio.addEventListener('ended', () => setCurrentlyPlaying(null));
      }
    });
  }, [audioFiles]);

  // Clean up effect when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      stopAllAudio();
    }
  }, [isModalOpen]);

  // Add escape key handler
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleModalClose();
      }
    };

    // Add event listener when modal is open
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    // Cleanup listener when modal closes or component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]); // Re-run effect when modal state changes

  const handleModalClose = () => {
    stopAllAudio();
    setIsModalOpen(false);
  }

  // Clean up intervals on unmount or modal close
  useEffect(() => {
    return () => {
      Object.values(progressIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="h-48 w-full rounded-t-lg overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={`${title} headshot`}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-800">{description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-[9999]">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={handleModalClose}
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
              {/* Modal Content */}
              <div 
                ref={modalRef}
                className="relative w-full max-w-lg bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={handleModalClose}
                  className="absolute right-4 top-4 z-20 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image */}
                <div className="h-48 sm:h-64 w-full">
                  <img
                    src={imageUrl}
                    alt={`${title} headshot`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="px-4 pt-5 pb-4 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{title}</h3>
                  
                  {/* Audio files */}
                  <div className="space-y-4">
                    {audioFiles.map((audio, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <span className="font-medium text-gray-900">{audio.label}</span>
                          <audio id={`audio-${index}`} src={audio.url} />
                          {currentlyPlaying === `audio-${index}` ? (
                            <button
                              onClick={() => handlePause(`audio-${index}`)}
                              className="relative flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md overflow-hidden"
                            >
                              <div 
                                className="absolute left-0 top-0 bottom-0 transition-all duration-100 ease-linear"
                                style={{ 
                                  width: `${progress[`audio-${index}`] || 0}%`,
                                  backgroundColor: '#827fb9',
                                  opacity: 0.85
                                }}
                              />
                              <div className="relative z-10 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                </svg>
                                <span>Pause</span>
                              </div>
                            </button>
                          ) : (
                            <button
                              onClick={() => handlePlay(`audio-${index}`)}
                              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                              <span>Play</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact section */}
                <div className="bg-gray-50 px-4 py-5 sm:px-6 border-t border-gray-200 rounded-b-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" style={{ color: '#827fb9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="transition-colors break-all hover:opacity-75"
                        style={{ color: '#827fb9' }}
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" style={{ color: '#827fb9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a 
                        href={`tel:${contactInfo.phone}`} 
                        className="transition-colors hover:opacity-75"
                        style={{ color: '#827fb9' }}
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default AudioCard 