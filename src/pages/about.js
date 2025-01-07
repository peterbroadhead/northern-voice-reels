import React from "react"
import AboutPage from "../components/about/aboutPage"
import Seo from "../components/seo"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About NVR - Professional Voice Reel Production in Manchester"
        description="Northern Voice Reels offers bespoke voice reel production with former BBC Senior Producer Chris Wallis. Specializing in audiobook, documentary, commercial and custom reels with personalized script selection and professional studio recording in Manchester."
        keywords="voice reel production, Manchester voice reels, BBC producer, Chris Wallis, audiobook recording, voice acting, voice over production"
      />
      <AboutPage />
    </Layout>
  )
}

export default About