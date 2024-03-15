import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import menu1 from '../assets/menu1.webp'
import menu2 from '../assets/menu2.webp'
import menu3 from '../assets/menu3.webp'
import vertical1 from '../assets/vertical1.jpg'
import item1 from '../assets/item1.jpg'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.jpg'




export const Menu = () => {


  useEffect(() => {

    AOS.init({
      offset: 200,
      duration: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <section className='w-full bg-slate-950 h-fit px-20 py-28 flex flex-col lg:flex-row justify-center items-center gap-16 '>
        <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl' style={{ backgroundImage: `url(${menu1})` }}>
          <h1 className='text-white font-bold text-3xl'>FRESH FOOD</h1>
        </div>
        <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl' style={{ backgroundImage: `url(${menu2})` }}>
          <h1 className='text-white font-bold text-3xl'>FRESH FOOD</h1>
        </div>
        <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl' style={{ backgroundImage: `url(${menu3})` }}>
          <h1 className='text-white font-bold text-3xl'>FRESH FOOD</h1>
        </div>
      </section>
      <section id='about' className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:py-24 py-20 px-10 bg-slate-950 w-full h-fit'>
        <div id='left' className='lg:w-[50%] w-full justify-end items-center lg:items-start gap-11'>
          <h1 data-aos="zoom-in" className='text-white text-6xl text-center font-bold'>About <span className='text-green-500 italic'>Us</span></h1>
          <h1 className='text-white text-2xl text-center font-semibold'>GRAB THIS TASTY FOOD</h1>
          <p data-aos="zoom-in" className='text-white text-xl font-semibold p-5 text-center lg:text-start'>There's something irresistibly delightful about refreshment. From decadent hot burger to luscious burger cakes, 
           every bite is a moment of pure bliss.</p>
          <p data-aos="zoom-in" className='text-white text-xl font-semibold p-5 text-center lg:text-start'>We have curated a delactable collection of hot burgers and captions that will not only satisfy your craving but also add a sprinkle of charm and sweetness to what you order from us!</p>
          <button data-aos="zoom-in-up" data-aos-delay="400" className='bg-orange-500 px-8 py-4 rounded-full hover:bg-green-500 hover:text-black font-bold  m-6'>ORDER NOW</button>
        </div>
        <div id='about-image' data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center lg:w-[50%] w-full'>
          <img src={vertical1} alt="about image" width={500} height={500} className='rounded-xl' />

        </div>
      </section>
    </>


  )
}
export default Menu