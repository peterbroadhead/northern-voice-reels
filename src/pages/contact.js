import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Fade from "react-reveal/Fade"

import image from "../images/holographic-background.webp"

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact - Voice Library"
        description="Professional voiceover services and voice reel production in Manchester"
      />

      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <Fade duration={1200}>
          <div className="bg-dp opacity-70 p-10 rounded-xl w-3/4 m-5 w-auto">
            <h1 className="text-3xl text-white">CONTACT US</h1>
            <h2 className="text-black text-gradient bg-gradient-to-r from-pink to-purple text-4xl font-bold mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              Voice Library
            </h2>
            <p className="text-lg mt-2 opacity-70 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Professional voiceover services and bespoke voice reel production.
            </p>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-ful mt-10">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Phone
                      </p>
                      <p className="text-neutral-500 mb-2">
                        <a href="tel:07973818298">07973 818 298</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Email
                      </p>
                      <p className="text-neutral-500 mb-2">
                        <a href="mailto:nvr@watershed.uk.com">
                          nvr@watershed.uk.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Location
                      </p>
                      <p className="text-neutral-500 mb-2">Deansgate, Manchester</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.088,2.542c0.063-0.146,0.103-0.306,0.103-0.476c0-0.657-0.534-1.19-1.19-1.19c-0.657,0-1.19,0.533-1.19,1.19c0,0.17,0.038,0.33,0.102,0.476c-4.085,0.535-7.243,4.021-7.243,8.252c0,4.601,3.73,8.332,8.332,8.332c4.601,0,8.331-3.73,8.331-8.332C18.331,6.562,15.173,3.076,11.088,2.542z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Services
                      </p>
                      <p className="text-neutral-500 mb-2">
                        Voice Reels • Audiobooks • Commercials • Documentary
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom cascade>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src={image}
              alt="HeroImage"
            />
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default Contact

export const Head = () => <Seo title="Contact - Voice Library" />
