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
            <li>One hour in a professional recording studio with Chris producing and an engineer.</li>
            <li>Recording of four reels: audiobook, documentary, commercials, and one other to be chosen after discussion (could be singing, gaming, or corporate)</li>
          </ul>
          <p className="mb-6">
            The recordings will be edited and music beds added where appropriate. You will choose the music 
            with our guidance and supply it for the recording session.
          </p>
        </div>
      </section>

                    
      <div className="max-w-7xl mx-auto px-4 lg:px-6 md:px-3 mb-32 mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">How does a voice reel get you work?</h3>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg md:rounded-xl"
                  src="https://www.youtube.com/embed/6jQ-R2rHnBs"
                  title="How does a voice reel get you work?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">How a radio/audio producer uses Spotlight</h3>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg md:rounded-xl"
                  src="https://www.youtube.com/embed/pciajrOhgnU"
                  title="How a radio/audio producer uses Spotlight"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

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
                <li>200 hours of Book at Bedtime and Book of the week</li>
                <li>A stint on The Archers</li>
                <li>150 hours of radio drama with hundreds of actors including Sir Derek Jacobi, David Tennant, Eartha Kitt, Samantha Morton</li>
                <li>50 hours of audiobooks with readers including John Le Carre, the cast of Red Dwarf and multiple Dr Whos.</li>
                <li>Nelson Mandela's Autobiography with John Kani in South Africa</li>
                <li>The Bible (80 hours) read by Sir David Suchet</li>
              </ul>
            </div>
          </div>
          <p className="font-medium mb-4">Chris has taught at various drama schools:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Radio at ALRA, MMU and E15</li>
            <li>Introduction to Acting at Mountview (where he taught Eddie Marsan)</li>
            <li>Voice reels at Royal Central and E15</li>
          </ul>
          <Link 
            to="https://www.watershedtheatre.com/chris-wallis/" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink to-purple text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md"
            target="_blank"
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
          <p className="mt-4">
            Whilst we prefer to record in Manchester we occasionally use CK Studios in Ealing with the hugely experienced Chris Kent as engineer. Chris is in the video doing T&Cs. 
          </p>
          <Link 
            to="https://www.christopherkent.co.uk/voiceovers" 
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-pink to-purple text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md"
            target="_blank"
          >
            View Chris's extraordinary work here
          </Link>
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
