import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/Home/header"
import Seo from "../components/seo"
import CardList from '../components/CardList' 
import { AudioProvider } from '../context/AudioContext'

const IndexPage = () => (
  <AudioProvider>
    <div className="h-auto w-screen">
      <Layout>
        <Seo
          title="Northern Voice Reels - Professional Voice Reel Production Manchester"
          description="Create your professional voice reel with NVR in Manchester. Led by former BBC Senior Producer Chris Wallis, we offer commercial, documentary, and audiobook voice reels. £350 for a complete package."
        ></Seo>
        <Header></Header>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 md:px-3">
          <CardList />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-6 md:px-3 mb-32 mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Voice Reel Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">How does a voice reel get you work?</h3>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg md:rounded-xl"
                  src="https://www.youtube.com/embed/6jQ-R2rHnBs"
                  title="How does a voice reel get you work?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">How a radio/audio producer uses Spotlight</h3>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg md:rounded-xl"
                  src="https://www.youtube.com/embed/pciajrOhgnU"
                  title="How a radio/audio producer uses Spotlight"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  </AudioProvider>
)

export default IndexPage
