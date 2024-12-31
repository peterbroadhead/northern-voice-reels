import React from 'react'
import Fade from 'react-reveal/Fade'
import AudioCard from './AudioCard'

const CardList = () => {
  const cards = [
    {
      title: "Katie Marie-Carter",
      description: "Professional voice actor specializing in commercials and narration",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      audioFiles: [
        { label: "Advertisement", url: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav" },
        { label: "Audiobook", url: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" },
        { label: "Documentary", url: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav" }
      ],
      contactInfo: {
        email: "enquiries@spotlight.com",
        phone: "020-7437 7631"
      }
    },
    {
      title: "Katie Turner",
      description: "Versatile voice talent for commercials and narrative work",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      audioFiles: [
        { label: "Advertisement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { label: "Audiobook", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { label: "Documentary", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
      ],
      contactInfo: {
        email: "info@brynmoor.co.uk",
        phone: "020 8144 0129"
      }
    },
    {
      title: "Rachael McGuiness",
      description: "Liverpool-based voice artist specializing in animation and narration",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      audioFiles: [
        { label: "Advertisement", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { label: "Animation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
        { label: "Documentary", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
      ],
      contactInfo: {
        email: "alex@alexpriestleytalent.com",
        phone: "0161 505 0671"
      }
    },
    {
      title: "Mark Newsome",
      description: "Experienced voice talent for commercials and documentaries",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      audioFiles: [
        { label: "Advertisement", url: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3" },
        { label: "Audiobook", url: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3" },
        { label: "Documentary 1", url: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3" }
      ],
      contactInfo: {
        email: "nvreels@gmail.com",
        phone: "07973818298"
      }
    },
    {
      title: "Jordan Reece",
      description: "Professional voice artist for commercials and audiobooks",
      imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
      audioFiles: [
        { label: "Advertisement", url: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3" },
        { label: "Audiobook", url: "https://samplelib.com/lib/preview/mp3/sample-15s.mp3" },
        { label: "Documentary", url: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3" }
      ],
      contactInfo: {
        email: "manchester@narrowroad.co.uk",
        phone: "0161-833 1605"
      }
    },
    {
      title: "Charlie Young",
      description: "Versatile voice talent for continuity and documentary work",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      audioFiles: [
        { label: "Advertisement", url: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg" },
        { label: "Continuity", url: "https://actions.google.com/sounds/v1/alarms/mechanical_clock_ring.ogg" },
        { label: "Documentary", url: "https://actions.google.com/sounds/v1/cartoon/slide_whistle_to_drum.ogg" }
      ],
      contactInfo: {
        email: "georgina@limemanagement.co.uk",
        phone: "0161-236 0827"
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <Fade 
        bottom 
        distance="50px"
        duration={800} 
        delay={200}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Fade
              key={index}
              bottom
              delay={200 + (index * 100)}
              distance="30px"
              duration={800}
            >
              <AudioCard {...card} />
            </Fade>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default CardList 