import React from 'react'

const ServicesSection = ({data}) => {
    const { title, top_title, services_list } = data;
  return (
    <section className="grid content-center	 bg-ui-gray-extra_light min-h-screen px-4 sm:px-8  md:px-12 mx:px-20">
        <div>
            <h6 className="text-lg md:text-xl text-ui-gray-normal font-medium	 text-center	">{top_title}</h6>
            <h2 className='text-3xl md:text-5xl	font-semibold text-ui-black text-center	'>{title}</h2>
            <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {
                    services_list.map(service => (
                        <div className="bg-white rounded p-4 ecommerce-service__item">
                            <img src={service.img_url} />
                            <h3 className="text-2xl font-medium	">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ServicesSection