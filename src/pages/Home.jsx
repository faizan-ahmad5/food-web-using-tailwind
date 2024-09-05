import React from 'react';
import heroimg from "../assets/heroimg.jpg"
import FoodCard from '../components/FoodCard';


function Home() {

    const foodCard =[
        {
            id :1,
            imgUrl : "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name : "Pizza"
        },
        {
            id :2,
            imgUrl : "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name : "Burger"
        },
        {
            id :3,
            imgUrl : "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name : "Momos"
        }
    ]
   
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

    <section className='w-[100vw] flex flex-col justify-center items-center p-5'>
     <h2 className='text-3xl font-bold text-gray-700 mb-8'> Explore Foods </h2>
         <div className='w-full flex-wrap flex items-center gap-10 justify-center'>
            { foodCard.map((item)=>(
               <FoodCard key={item.id} name={item.name} image={item.imgUrl}/> ))
             }
            </div>
        </section>

    </div>
  );
}

export default Home;
