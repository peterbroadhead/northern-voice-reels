import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Fade from "react-reveal/Fade"

const BookNowPage = () => {
  return (
    <Layout>
      <Seo 
        title="Book Your Voice Reel Session - Northern Voice Reels"
        description="Book your professional voice reel session in Manchester. Complete package £350 includes commercial, documentary, audiobook and specialty reels. Expert guidance from former BBC Senior Producer Chris Wallis."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Fade duration={1200}>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink to-purple">
                Book Your Voice Reel Session
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to create your professional voice reel? Get in touch with us to book your session. 
                Our £375 package includes four distinct reels - commercial, documentary, audiobook, and a specialty reel of your choice.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-6 text-black">Contact Us</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Email us at{' '}
                  <a 
                    href="mailto:nvr@watershed.uk.com" 
                    className="text-black hover:text-purple transition-colors duration-300"
                  >
                    nvr@watershed.uk.com
                  </a>
                  {' '}including your phone number. Our reply emails may go to your junk folder, so we'll text you back instead.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Alternatively, text or WhatsApp{' '}
                  <a 
                    href="tel:+447973818298" 
                    className="text-black hover:text-purple transition-colors duration-300"
                  >
                    +44 7973 818 298
                  </a>
                  {' '}and begin your message with 'NVR'.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  )
}

export default BookNowPage 