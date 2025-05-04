import React from 'react'

const testimonials = [
  {
    quote: "Chris was really encouraging to work with. His attention to detail meant the whole process felt seamless. Really happy with my reel!",
    author: "Genevieve Saberwahl",
  },
  {
    quote: "Feeling like there were so many cowboys out there …Chris knows his stuff and charges very reasonable rates",
    author: "Sameera Reyani",
  },
  {
    quote: "I was delighted with the whole process of creating my voice reel with Chris! From the session preparation to the day in the studio it was fun and efficient! I'm really happy with the results and the professionalism attained! Thank you Chris!",
    author: "Francesca Lia Treymaine ",
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
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105 flex flex-col h-full"
            >
              <div className="relative flex-grow">
                <p className="relative text-gray-600 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials 