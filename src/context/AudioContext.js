import React, { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [globalVolume, setGlobalVolume] = useState(1);

  // Initialize volume from localStorage on client-side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedVolume = localStorage.getItem('audioVolume');
      if (savedVolume) {
        setGlobalVolume(parseFloat(savedVolume));
      }
    }
  }, []);

  const updateGlobalVolume = (newVolume) => {
    setGlobalVolume(newVolume);
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioVolume', newVolume);
      // Update all audio elements on the page
      document.querySelectorAll('audio').forEach(audio => {
        audio.volume = newVolume;
      });
    }
  };

  return (
    <AudioContext.Provider value={{ globalVolume, updateGlobalVolume }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
} 