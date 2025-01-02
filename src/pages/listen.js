import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CardList from "../components/CardList"
import Fade from "react-reveal/Fade"

const ListenPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink to-purple">
            Voice Reel Showcase
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our collection of professional voice reels, featuring commercial, documentary, 
            and audiobook performances. Each voice tells a unique story – find the perfect tone 
            for your next project.
          </p>
        </div>
        <Fade duration={1200}>
          <CardList />
        </Fade>
      </div>
    </Layout>
  )
}

export default ListenPage

export const Head = () => <Seo title="Voice Reel Showcase - Voice Library" /> 