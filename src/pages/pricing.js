import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Fade from "react-reveal/Fade"

const PricingPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink to-purple">
            Complete Voice Reel Package
          </h1>
          <div className="mb-8">
            <span className="text-6xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
              £400
            </span>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We will help you source and record the material for four reels, guided by our expertise and your unique voice.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Fade duration={1200}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-pink to-purple p-6">
                <h2 className="text-2xl font-bold text-white">What's Included</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  This package includes guidance and recording for four distinct voice reels:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2">Commercial Reel</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2">Audiobook Reel</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2">Documentary Reel</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2">Specialty Reel (e.g., accents or singing)</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    This price includes professional guidance but requires you to conduct your own research for materials and source your own music, guided by us.
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    For an additional £25, we can host your headshot and reels on our website. While we don't act as agents, we're happy to pass on any contact requests.
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <Link
                    to="/book-now"
                    className="inline-flex justify-center min-w-[200px] py-3 px-12 border-2 border-purple rounded-md shadow-sm text-base font-medium text-white bg-purple hover:text-purple hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-4">
            If you know what you want to record and just need production services, we can provide custom pricing.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Would you like to know more? Get in touch to discuss your specific requirements and pricing.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex justify-center min-w-[200px] py-3 px-12 border-2 border-purple rounded-md text-base font-medium text-white bg-purple hover:text-purple hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PricingPage

export const Head = () => (
  <Seo 
    title="Voice Reel Pricing - Northern Voice Reels Manchester"
    description="Professional voice reel production package for £350. Includes commercial, documentary, audiobook, and specialty reels. Expert guidance from former BBC producer Chris Wallis."
  />
) 