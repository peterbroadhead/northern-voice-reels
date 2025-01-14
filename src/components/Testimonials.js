import React from 'react'

const testimonials = [
  {
    quote: "Chris is fantastic to work with. Professional, encouraging and helped me produce a great voice reel.",
    author: "Sarah Johnson",
    role: "Voice Actor"
  },
  {
    quote: "The best investment I've made in my voice acting career. Incredible studio and expertise.",
    author: "Michael Roberts",
    role: "Audiobook Narrator"
  },
  {
    quote: "Outstanding quality and guidance throughout the whole process. Highly recommend!",
    author: "Emma Thompson",
    role: "Commercial Voice Artist"
  }
]

const Testimonials = () => {
  return (
    <div className="py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105"
            >
              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 h-8 w-8 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-gray-600 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials 