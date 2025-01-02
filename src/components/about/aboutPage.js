import React from "react"
import Fade from "react-reveal/Fade"

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Fade duration={1200}>
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Based in Manchester, Chris started NVR because actors kept asking him where they could get a reel made. 
              He did some market research and came to the conclusion he could probably do it better and cheaper than 
              many of the other studios. That's because, unlike many voice reel suppliers, we are a producer-driven 
              rather than an engineer-driven company.
            </p>

            <p className="mb-6">
              Chris was a Senior Radio Drama Producer at BBC Manchester until he left and started Watershed which 
              makes drama and readings for the R4 and R3. He has 25 years experience making BBC Radio Book at 
              Bedtime and Book of the Week, and drama, and he even did a stint on The Archers. His most recent 
              project was Death Of A Salesman by Arthur Miller, with David Suchet and Zoe Wanamaker for R3. He 
              has produced more than 100 hours of audiobooks, with readers like John Le Carre, most of the Drs Who, 
              and John Kani, who read Nelson Mandela's Autobiography, which Chris recorded in South Africa.
            </p>

            <p className="mb-6">
              Chris has also taught at various drama schools, including Radio at ALRA, MMU and E15; Introduction 
              to Acting at Mountview- one of his students was Eddie Marsan, so he must have got that right – and 
              this year he taught Sight Reading and Voice Reels at Royal Central.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink to-purple">
                Our Team
              </h2>
              <p className="mb-4">
                Our engineer is Luke Staniland, a very experienced music and speech engineer.
              </p>
              <p>
                Together we will help you create reels to maximise your casting potential.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default AboutPage
