import React from 'react'
import Fade from 'react-reveal/Fade'
import AudioCard from './AudioCard'

// Function to clean up audio names
const cleanAudioLabel = (name) => {
  return name
    .replace(/ Final.*$/, '')          // Remove "Final" and anything after
    .replace(/ v\d+$/, '')            // Remove version numbers
    .replace(/ \d{4}\.\d{2}\.\d{2}$/, '') // Remove dates like 2024.01.09
    .replace(/ 20\d{2}$/, '')         // Remove years like 2024
    .replace(/ 20\d{2}/, ' ')         // Remove years when they're in the middle
    .replace(/ Reel/i, '')            // Remove "Reel" (case insensitive)
    .replace(/_/g, ' ')               // Replace underscores with spaces
    .trim();                          // Remove extra whitespace
};

// Function to import all client data
const importClientData = () => {
  const clientData = [];
  
  try {
    // Get all client directories
    const clientContext = require.context('../../static/clients', true);
    
    // Get unique client names
    const clientDirs = new Set(
      clientContext.keys()
        .map(path => path.split('/')[1])
        .filter(Boolean)
    );

    Array.from(clientDirs).forEach(clientName => {
      try {
        // Get headshot from images directory
        const imageFiles = clientContext.keys()
          .filter(key => key.includes(`${clientName}/images/`));
        const headshot = imageFiles[0];
        
        // Get audio files
        const audioFiles = [];
        const seenLabels = new Set(); // Track unique labels
        const audioKeys = clientContext.keys()
          .filter(key => key.includes(`${clientName}/audio/`));
        
        // Process audio files
        audioKeys.forEach(audioPath => {
          const audioName = audioPath.split('/').pop().split('.')[0];
          // Remove client name and clean the label
          const cleanedLabel = cleanAudioLabel(audioName)
            .replace(new RegExp(`^${clientName}\\s*`, 'i'), '') // Remove client name from start
            .replace(new RegExp(`\\s*${clientName}\\s*`, 'i'), ' '); // Remove client name if it appears elsewhere
          
          // Only add if we haven't seen this label before
          if (!seenLabels.has(cleanedLabel)) {
            seenLabels.add(cleanedLabel);
            audioFiles.push({
              label: cleanedLabel,
              url: clientContext(audioPath).default
            });
          }
        });

        if (headshot && audioFiles.length > 0) {
          const clientCard = {
            title: clientName.replace(/_/g, ' '),
            description: "Professional voice actor",
            imageUrl: clientContext(headshot).default,
            audioFiles: audioFiles.sort((a, b) => a.label.localeCompare(b.label)),
            contactInfo: {
              email: "enquiries@spotlight.com",
              phone: "020-7437 7631"
            }
          };
          clientData.push(clientCard);
        }
      } catch (error) {
        console.error(`Error processing client ${clientName}:`, error);
      }
    });

  } catch (error) {
    console.error('Error importing client data:', error);
  }

  // Sort clientData by last name before returning
  return clientData.sort((a, b) => 
    getLastName(a.title).localeCompare(getLastName(b.title))
  );
};

// Add this new function after cleanAudioLabel
const getLastName = (fullName) => {
  const names = fullName.trim().split(' ');
  return names[names.length - 1];
};

const CardList = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink to-purple">
          Listen to Our Voice Reels
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">          
          Explore the reels we have made with our clients. Each sample demonstrates the quality and versatility we can bring to your project, whether it's for commercial, documentary, audiobook, gaming, animation, or corporate reels.
        </p>
      </div>

      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {importClientData().map((card, index) => (
            <div key={index} className="w-full h-full">
              <AudioCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList 