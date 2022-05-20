import React from 'react'

const Footer = () => {
  return (
    <footer className='py-4 md:py-8 mx-4 sm:mx-8  md:mx-12 mx:mx-20 grid grid-cols-1 md:grid-cols-2 content-between	relative z-20'>
      <ul className="flex flex-row flex-wrap mb-4 md:mb-0	mx-auto md:mx-0">
                    <a className="mr-4 cursor-pointer hover:text-ui-orange-main ease-in-out duration-300">
                        Home
                    </a>
                    <a className="mr-4 cursor-pointer hover:text-ui-orange-main ease-in-out duration-300">
                        UX/UI
                    </a>
                    <a className="mr-4 cursor-pointer hover:text-ui-orange-main ease-in-out duration-300">
                        Ecommerce
                    </a>
                    <a className="mr-4 cursor-pointer hover:text-ui-orange-main ease-in-out duration-300">
                        Websites
                    </a>
                    <a className="mr-4 cursor-pointer hover:text-ui-orange-main ease-in-out duration-300">
                        Marketing
                    </a>
                </ul>

      <span className='text-center md:text-right'>Copyright smooth design 2022</span>
    </footer>
  )
}

export default Footer