import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import Seo from "../components/seo"
import CardList from '../components/CardList' 
import { AudioProvider } from '../context/AudioContext'

const IndexPage = () => (
  <AudioProvider>
    <div className="h-auto w-screen">
      <Layout>
        <Seo
          title="Holo - Gatsby Theme"
          description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS."
        ></Seo>
        <Header></Header>
        <CardList></CardList>
        <FeatureSection></FeatureSection>
        <Testimonial></Testimonial>
      </Layout>
    </div>
  </AudioProvider>
)

export default IndexPage
