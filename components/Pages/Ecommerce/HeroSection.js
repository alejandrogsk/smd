import React from 'react'

const HeroSection = ({data}) => {
  const { title, subtitle, content } = data;
  return (
    <section className="mx-4 sm:mx-8 md:mx-12 mx:mx-20 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">

      <h1 className="text-4xl	 md:text-5xl lg:text-6xl font-bold">{title}<span className="text-ui-orange-main">.</span></h1>
      <h2 className="text-2xl lg:text-3xl row-start-2	row-end-3 font-medium">{subtitle}</h2>

      <div className="md:row-start-2	 md:row-end-3">
              {
                content.map(paragraph => (
                  <p className="pt-2 text-xl">
                    {paragraph}
                  </p>
                ))
              }
      </div>
    
    </section>
  )
}

export default HeroSection