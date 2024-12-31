import React from 'react'
import Fade from 'react-reveal/Fade'
import AudioCard from './AudioCard'
import Clients from '../../static/clients'

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
    const clientContext = require.context('../../static/Clients', true);
    
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

  return clientData;
};

const CardList = () => {
  const cards = importClientData();

  if (!cards || cards.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <Fade bottom distance="50px" duration={800} delay={200}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Fade
              key={index}
              bottom
              delay={200 + (index * 100)}
              distance="30px"
              duration={800}
            >
              <div className="h-full">
                <AudioCard {...card} />
              </div>
            </Fade>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default CardList 