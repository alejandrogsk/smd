import React from 'react'
const PlatformsSections = ({data}) => {
    const { img_url, images, content } = data;
  return (
    <section className="bg-ui-black min-h-screen px-4 py-20 sm:px-8 md:px-12 mx:px-20 grid justify-items-center gap-12 grid-cols-1 md:grid-cols-2">

        <img className="ecommerce-patforms__img"src={img_url} alt="agencia especialista en desarrollo de ecommerce" />

        <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 mb-12">
            {
                images.map((image, i) => (
                    <img key={i} src={image} />
                ))
            }
            </div>
            {
                content.map((paragraph, i) => (
                    <p key={i} className="pt-2 text-xl text-white">{paragraph}</p>
                ))
            }
        </div>
    </section>
  )
}

export default PlatformsSections