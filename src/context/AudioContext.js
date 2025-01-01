import React, { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [globalVolume, setGlobalVolume] = useState(() => {
    const savedVolume = localStorage.getItem('audioVolume');
    return savedVolume ? parseFloat(savedVolume) : 1;
  });

  const updateGlobalVolume = (newVolume) => {
    setGlobalVolume(newVolume);
    localStorage.setItem('audioVolume', newVolume);
    // Update all audio elements on the page
    document.querySelectorAll('audio').forEach(audio => {
      audio.volume = newVolume;
    });
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