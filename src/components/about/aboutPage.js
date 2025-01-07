import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink to-purple">
        About Northern Voice Reels
      </h1>
      
      <section className="mb-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
          Our Bespoke Service
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            We offer a bespoke service. Unlike many other voice reel providers who work from stock scripts, 
            we will help you find material that suits your particular voice. You will have to do some 
            research finding material, but we will help you choose the most appropriate content.
          </p>
          <p className="font-medium mb-4">The fee covers:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Four hours of tuition on Zoom with Chris Wallis</li>
            <li>One hour in a professional studio on Deansgate, Manchester</li>
            <li>Recording of four reels: audiobook, documentary, commercials, and one other to be chosen after discussion (could be singing, gaming, or corporate)</li>
          </ul>
          <p className="mb-6">
            The recordings will be edited and music beds added where appropriate. You will choose the music 
            with our guidance and supply it for the recording session.
          </p>
        </div>
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
          Why Choose Us?
        </h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Based in Manchester, Chris started NVR because actors kept asking him where they could get a 
            reel made. After market research, he concluded he could probably do it better and cheaper 
            than many other studios. That's because, unlike many voice reel suppliers, we are a 
            producer-driven rather than an engineer-driven company.
          </p>
        </div>
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
          About Chris Wallis
        </h2>
        <div className="prose prose-lg max-w-none">
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img
                src="/clients/Chris Wallis/images/chriswallis.jpg"
                alt="Chris Wallis"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <p className="mb-6">
                Chris was a Senior Radio Drama Producer at BBC Manchester until he left and started Watershed, 
                which made drama and readings for Radio 4 and Radio 3. With 25 years of experience, his 
                impressive portfolio includes:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Production of BBC Radio Book at Bedtime and Book of the Week</li>
                <li>A stint on The Archers</li>
                <li>Direction of "Death Of A Salesman" with David Suchet and Zoe Wanamaker for Radio 3</li>
                <li>Production of over 100 hours of audiobooks with renowned readers including John Le Carre and multiple Doctors Who</li>
                <li>Recording of Nelson Mandela's Autobiography with John Kani in South Africa</li>
                <li>Production of The Bible (80 hours) read by David Suchet</li>
              </ul>
            </div>
          </div>
          <p className="font-medium mb-4">Chris has taught at various prestigious institutions including:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Radio at ALRA, MMU and E15</li>
            <li>Introduction to Acting at Mountview (where he taught Eddie Marsan)</li>
            <li>Voice reels at Royal Central and E15</li>
          </ul>
          <Link 
            to="/audio" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink to-purple text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md"
          >
            View Chris's full portfolio
          </Link>
        </div>
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
          Our Team
        </h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Working alongside Chris is Luke Staniland, a very experienced music and speech engineer. 
            Together we help create reels to maximise your casting potential.
          </p>
        </div>
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
          Watch one of our consultants Chris Kent perform T&C's like a pro!
        </h2>
        <div className="prose prose-lg max-w-none">
          <video 
            controls
            className="w-full rounded-lg shadow-md"
          >
            <source src="/videos/Chris Kent T&Cs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
