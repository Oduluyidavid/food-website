import React, { useCallback, useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import phone from '../assets/icons/phone.svg'
import mail from '../assets/icons/mail.svg'
import map from '../assets/icons/map.svg'




const Contact = () => {


  useEffect(() => {

    AOS.init({
      offset: 200,
      duration: "ease-in-sine",
      delay: 100,
    });
  }, []);


  return (
    <section id='Contact' className='bg-slate-950 w-full px-20 py-20 fle flex-col lg:flex-row justify-around items-center gap-16'>
      <div data-aos="slide-right" data-aos-delay="500" className='flex flex-col justify-center items-center gap-4'>
        <div id='icon-box' className='bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer'>
          <img src={phone} alt="phone icons" width={40} height={40} />
        </div>

      </div>
    </section>
  )
}
export default Contact