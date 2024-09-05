import React from 'react';
import heroimg from "../assets/heroimg.jpg"

function Home() {
  
  return (
    <div id="home" > 
    <section className='relative ' >
       <img src={heroimg} alt="hero-image"  className='h-[50vh] w-full object-cover'/>
      <div className='absolute top-[50%] right-[50%] translate-x-[50%] traslate-y-[50%]'>
        <div className='flex gap-2'>
          <input type="text" placeholder='Search your food' className='px-4 py-2 w-[35vw] focus:outline-none border border-gray-400 rounded-lg' />
          <button className='py-2 px-6 text-white font-semibold bg-gradient-to-tl to-pink-500 from-pink-600 rounded-md'>Search</button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
