import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Fade from "react-reveal/Fade"

const ServicesPage = () => {
  return (
    <Layout>
      <Seo 
        title="Bespoke Voice Reel Services - Northern Voice Reels"
        description="Professional bespoke voice reel production in Manchester. Personal tuition from former BBC Senior Producer Chris Wallis, followed by professional studio recording on Deansgate."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Fade duration={1200}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink to-purple">
              Our Bespoke Service
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlike many other voice reel providers who work from stock scripts, we offer a 
              personalised service tailored to your unique voice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Personal Tuition
                </h2>
                <p className="text-gray-600">
                  Your package includes four hours of one-to-one tuition on Zoom with Chris Wallis. 
                  We'll help you find and choose material that best suits your particular voice, 
                  ensuring your reel showcases your unique talents.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Professional Recording
                </h2>
                <p className="text-gray-600">
                  Following your tuition, you'll have up to 90 minutes in a recording studio, including editing. Here, we'll record four distinct reels: audiobook, 
                  documentary, commercials, and a fourth speciality reel of your choice.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-black text-center">
                Post-Production
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Your recordings will be professionally edited and enhanced with appropriate music beds. 
                You'll be involved in the music selection process, with our guidance to ensure the 
                perfect accompaniment for your voice.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-black mb-4">
              Complete Package: £400
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Includes personal tuition, studio recording time, professional editing, and music beds.
            </p>
            <Link 
              to="/book-now"
              className="inline-block bg-transparent py-3 px-6 text-black rounded-lg border border-purple hover:text-white hover:bg-purple transition-all duration-300"
            >
              Book Your Session
            </Link>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default ServicesPage 