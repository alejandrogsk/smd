import React from 'react'




const ServicesSection = ({services}) => {


  const { before_title, title, services_list } = services;


  return (
    <section className='py-20 md:py-36 services-section'>
      <div className='mx-4 sm:mx-8  md:mx-12 mx:mx-20'>
        
      <h6 className='capitalize text-white text-lg md:text-xl l font-medium	 text-start	'>{before_title}</h6>
      <h2 className='text-white text-3xl md:text-4xl lg:text-5xl	font-semibold text-start	'>{title}</h2>


        <div className='services-section__grid my-16'>
          {
            services_list.map((item, i) => (
              <div key={i} className='services-section__grid-item cursor-pointer'>
                <div className='services-section__grid-item--img'>
                 <img src={item.img_url} />
                 <span className='hoverable'></span>
                </div>
                <h3 className='text-white my-4 font-semibold text-2xl md:text-3xl lg:text-4xl'>{item.title}</h3>

                <a className='text-white text-lg md:text-xl capitalize underline hover:text-ui-orange-main'>{item.link}</a>
              </div>
            ))
          }
        </div>
      </div>
        
    </section>
  )
}

export default ServicesSection