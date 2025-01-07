import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { withPrefix } from 'gatsby'
import { useAudio } from '../context/AudioContext'

const AudioCard = ({ 
  title, 
  description, 
  audioFiles, 
  imageUrl, 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const [progress, setProgress] = useState({})
  const [isLoading, setIsLoading] = useState({})
  const modalRef = useRef()
  const progressIntervals = useRef({})
  const audioRefs = useRef({})
  const [contactInfo, setContactInfo] = useState({ 
    email: '', 
    phone: '', 
    agency: '',
    website: '',
    spotlight: ''
  });
  const { globalVolume, updateGlobalVolume } = useAudio();

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

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Stop any playing audio when modal closes
    if (currentlyPlaying) {
      const audio = document.getElementById(currentlyPlaying);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(progressIntervals.current[currentlyPlaying]);
      }
      setCurrentlyPlaying(null);
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
        await audio.load();
        audio.volume = globalVolume;
      }

      if (currentlyPlaying && currentlyPlaying !== audioId) {
        const currentAudio = document.getElementById(currentlyPlaying);
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          clearInterval(progressIntervals.current[currentlyPlaying]);
        }
      }

      audio.volume = globalVolume;
      await audio.play();
      setIsLoading(prev => ({ ...prev, [audioId]: false }));
      setCurrentlyPlaying(audioId);
      
      progressIntervals.current[audioId] = setInterval(() => {
        setProgress(prev => ({
          ...prev,
          [audioId]: (audio.currentTime / audio.duration) * 100
        }));
      }, 100);

    } catch (error) {
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
        handleModalClose();
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

  // Add effect to dynamically load contact info
  useEffect(() => {
    const loadContactInfo = async () => {
      try {
        const clientFolder = title;
        const response = await fetch(withPrefix(`/clients/${clientFolder}/info.json`));
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contactData = await response.json();
        
        setContactInfo({
          email: contactData.email || '',
          phone: contactData.tel || '',
          agency: contactData.agency || '',
          website: contactData.website || '',
          spotlight: contactData.spotlight || ''
        });
      } catch (error) {
        setContactInfo({ email: '', phone: '', agency: '', website: '', spotlight: '' });
      }
    };

    if (title) {
      loadContactInfo();
    }
  }, [title]);

  // Update volume handler to use global context
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    updateGlobalVolume(newVolume);
  };

  // Set initial volume for new audio elements
  useEffect(() => {
    audioFiles.forEach((_, index) => {
      const audio = document.getElementById(`audio-${index}`);
      if (audio) {
        audio.volume = globalVolume;
      }
    });
  }, [audioFiles, globalVolume]);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
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

      {isModalOpen && createPortal(
        <div className="fixed inset-0 bg-black/80 z-[9999] overflow-y-auto pt-[10vh]">
          <div className="min-h-full flex items-start justify-center p-4 pb-[10vh]">
            <div 
              ref={modalRef}
              className="bg-white w-full max-w-xl rounded-lg overflow-hidden relative"
            >
              <div className="relative w-full h-[30vh] bg-gray-100">
                <img
                  src={imageUrl}
                  alt={`${title} headshot`}
                  className="w-full h-full object-cover object-center"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="bg-[#f5f5ff] px-6 py-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                <div className="space-y-3">
                  {contactInfo.agency && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#827fb9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-[#827fb9]">{contactInfo.agency}</span>
                    </div>
                  )}
                  {contactInfo.email && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#827fb9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-[#827fb9] hover:opacity-75 transition-opacity break-all"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  )}
                  {contactInfo.phone && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#827fb9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-[#827fb9] hover:opacity-75 transition-opacity"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  )}
                  {contactInfo.website && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#827fb9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a 
                        href={contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#827fb9] hover:opacity-75 transition-opacity break-all"
                      >
                        {contactInfo.website}
                      </a>
                    </div>
                  )}
                  {contactInfo.spotlight && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#827fb9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <a 
                        href={contactInfo.spotlight}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#827fb9] hover:opacity-75 transition-opacity break-all"
                      >
                        Spotlight Profile
                      </a>
                    </div>
                  )}
                  {!contactInfo.email && !contactInfo.phone && !contactInfo.website && !contactInfo.spotlight && (
                    <p className="text-gray-500">No contact information available</p>
                  )}
                </div>
              </div>

              <div className="px-6 pt-3 pb-6 space-y-3">
                {/* Volume Control */}
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                  <svg 
                    className="w-5 h-5 text-[#827fb9]" 
                    fill="none" 
                    stroke="currentColor" Report
                    viewBox="0 0 24 24"
                  >
                    {globalVolume === 0 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    ) : globalVolume < 0.5 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m3.536-10.608a9 9 0 010 14.144M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    )}
                  </svg>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={globalVolume}
                    onChange={handleVolumeChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#827fb9]"
                  />
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {Math.round(globalVolume * 100)}%
                  </span>
                </div>

                {/* Audio Buttons */}
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
                      <p className="text-base font-medium text-gray-900">
                        {audio.label.split('-').pop().trim()}
                      </p>
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
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default AudioCard 