import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BookNowPage = () => {
  return (
    <Layout>
      <Seo 
        title="Book Your Voice Reel Session - Northern Voice Reels"
        description="Book your professional voice reel session in Manchester. Complete package £350 includes commercial, documentary, audiobook and specialty reels. Expert guidance from former BBC Senior Producer Chris Wallis."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-pink to-purple">
            Book Your Session
          </h1>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <form className="space-y-6" name="booking" method="POST" netlify>
                <input type="hidden" name="form-name" value="booking" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple focus:ring-purple sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple focus:ring-purple sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple focus:ring-purple sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple focus:ring-purple sm:text-sm"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="recording">Voice Recording</option>
                    <option value="coaching">Voice Coaching</option>
                    <option value="consultation">Initial Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple focus:ring-purple sm:text-sm"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple hover:bg-transparent hover:text-black hover:border-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple transition-all duration-300"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BookNowPage 