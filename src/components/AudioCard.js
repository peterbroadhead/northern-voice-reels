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
  const [isLoading, setIsLoading] = useState({})
  const modalRef = useRef()
  const progressIntervals = useRef({})
  const audioRefs = useRef({})

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

  // Handle URL updates
  const handleModalOpen = () => {
    const urlTitle = title.toLowerCase().replace(/\s+/g, '-');
    window.history.pushState({ modal: true }, '', `/${urlTitle}`);
    setIsModalOpen(true);
  };

  const clearUrlAndCloseModal = (e) => {
    // Only check for modal content if it's a click event
    if (e?.type === 'click' && modalRef.current && modalRef.current.contains(e.target)) {
      // Allow close button to work
      if (!e.target.closest('button[aria-label="Close"]')) {
        return;
      }
    }
    
    window.history.pushState(null, '', '/');
    setIsModalOpen(false);
    if (currentlyPlaying) {
      const audio = document.getElementById(currentlyPlaying);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setCurrentlyPlaying(null);
      }
    }
  };

  // Watch modal state and update URL accordingly
  useEffect(() => {
    if (!isModalOpen) {
      window.history.pushState(null, '', '/');
    }
  }, [isModalOpen]);

  const handlePlay = async (audioId) => {
    try {
      setIsLoading(prev => ({ ...prev, [audioId]: true }));
      const audio = document.getElementById(audioId);
      
      if (!audioRefs.current[audioId]) {
        audioRefs.current[audioId] = audio;
        // Pre-load the audio file
        await audio.load();
      }

      if (currentlyPlaying && currentlyPlaying !== audioId) {
        const currentAudio = document.getElementById(currentlyPlaying);
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          clearInterval(progressIntervals.current[currentlyPlaying]);
        }
      }

      await audio.play();
      setCurrentlyPlaying(audioId);
      
      progressIntervals.current[audioId] = setInterval(() => {
        setProgress(prev => ({
          ...prev,
          [audioId]: (audio.currentTime / audio.duration) * 100
        }));
      }, 100);

    } catch (error) {
      console.error('Audio playback error:', error);
    } finally {
      setIsLoading(prev => ({ ...prev, [audioId]: false }));
    }
  };

  const handlePause = (audioId) => {
    const audio = document.getElementById(audioId);
    if (audio) {
      audio.pause();
      clearInterval(progressIntervals.current[audioId]);
      setCurrentlyPlaying(null);
    }
  };

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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        clearUrlAndCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

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
        onClick={handleModalOpen}
        className="h-full cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
      >
        <div className="h-[80%] w-full rounded-t-lg overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={imageUrl}
            alt={`${title} headshot`}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="h-[20%] p-4 flex items-center justify-center">
          <h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-[9999]">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={() => {
              window.history.pushState(null, '', '/');
              setIsModalOpen(false);
              if (currentlyPlaying) {
                const audio = document.getElementById(currentlyPlaying);
                if (audio) {
                  audio.pause();
                  audio.currentTime = 0;
                  setCurrentlyPlaying(null);
                }
              }
            }}
          />
          
          {/* Modal */}
          <div className="relative z-10">
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-screen items-center justify-center p-4">
                <div 
                  ref={modalRef}
                  className="relative w-full max-w-lg bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={clearUrlAndCloseModal}
                    className="absolute right-4 top-4 z-20 text-gray-400 hover:text-gray-500"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="h-48 sm:h-64 w-full">
                    <img
                      src={imageUrl}
                      alt={`${title} headshot`}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>

                  <div className="px-4 pt-5 pb-4 sm:p-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{title}</h3>
                    
                    {/* Audio files section */}
                    <div className="mt-6 space-y-3">
                      {audioFiles.map((audio, index) => (
                        <button 
                          key={index} 
                          onClick={() => currentlyPlaying === `audio-${index}` 
                            ? handlePause(`audio-${index}`)
                            : handlePlay(`audio-${index}`)
                          }
                          className="w-full text-left bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors relative overflow-hidden"
                          disabled={isLoading[`audio-${index}`]}
                        >
                          {currentlyPlaying === `audio-${index}` && (
                            <div 
                              className="absolute left-0 top-0 bottom-0 transition-all duration-100 ease-linear"
                              style={{ 
                                width: `${progress[`audio-${index}`] || 0}%`,
                                background: `linear-gradient(90deg, rgba(26,22,37,0.1) 0%, rgba(130,127,185,0.15) ${progress[`audio-${index}`]}%)`,
                              }}
                            />
                          )}
                          <div className="flex items-center justify-between relative z-10">
                            <p className="text-base font-medium text-gray-900">{audio.label}</p>
                            {/* Audio player controls */}
                            <audio id={`audio-${index}`} src={audio.url} />
                            <div className={`flex items-center justify-center gap-2 px-4 py-2.5 text-white rounded-md ml-4 transition-colors
                              ${currentlyPlaying === `audio-${index}` ? 'bg-[#827fb9]' : 'bg-[#1a1625] hover:bg-[#827fb9]'}`}>
                              {isLoading[`audio-${index}`] ? (
                                <>
                                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  <span>Loading...</span>
                                </>
                              ) : currentlyPlaying === `audio-${index}` ? (
                                <>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                  </svg>
                                  <span>Pause</span>
                                </>
                              ) : (
                                <>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                  </svg>
                                  <span>Play</span>
                                </>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Contact section */}
                    <div className="bg-gray-50 px-4 py-5 sm:px-6 border-t border-gray-200 rounded-b-lg mt-6">
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
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default AudioCard 