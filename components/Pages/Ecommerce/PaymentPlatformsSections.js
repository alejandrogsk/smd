import React from 'react'

const PaymentPlatformsSections = ({data}) => {
    const { top_title, title, platforms } = data;

  return (
    <section className="bg-ui-orange-main">
        <h6 className="text-lg md:text-xl text-ui-gray-normal font-medium	 text-center	">{top_title}</h6>
       <h2 className='text-3xl md:text-5xl	font-semibold text-ui-black text-center	'>{title}</h2>

        <div>
            {
                platforms.map(platform => (
                    <img src={platform.img_url} alt={platform.name} />
                ))
            }
        </div>

    </section>
  )
}

export default PaymentPlatformsSections