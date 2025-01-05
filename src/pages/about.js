import React from "react"
import AboutPage from "../components/about/aboutPage"
import Seo from "../components/seo"
import Layout from "../components/layout"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About NVR - Professional Voice Reel Production in Manchester"
        description="Northern Voice Reels offers bespoke voice reel production in Manchester. Led by former BBC Senior Radio Drama Producer Chris Wallis, we create professional voice reels to maximize your casting potential."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
    </Layout>
  )
}

export default About