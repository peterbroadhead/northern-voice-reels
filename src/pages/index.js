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
          <CardList sortBy="lastName" />
        </div>
      </Layout>
    </div>
  </AudioProvider>
)

export default IndexPage
