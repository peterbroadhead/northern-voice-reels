import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CardList from "../components/CardList"
import Fade from "react-reveal/Fade"

const ListenPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Fade duration={1200}>
          <CardList />
        </Fade>
      </div>
    </Layout>
  )
}

export default ListenPage

export const Head = () => (
  <Seo 
    title="Listen to Our Voice Reels - Northern Voice Reels Manchester"
    description="Listen to our professional voice reel samples. Featuring commercial, documentary, and audiobook performances produced by former BBC Senior Producer Chris Wallis."
  />
) 