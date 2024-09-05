import React from 'react';
import heroimg from "../assets/heroimg.jpg"
import FoodCard from '../components/FoodCard';
import MenuCard from '../components/MenuCard';


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
const menuCard = [
    {
        id: 1,
        name: "Cheese Burger",
        price: "80",
        imageUrl: "https://images.unsplash.com/photo-1562817981-221763b0c0e5?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A juicy burger with melted cheese and fresh toppings."
    },
    {
        id: 2,
        name: "Veggie Burger",
        price: "55",
        imageUrl: "https://images.unsplash.com/photo-1522036664039-3c5756c2b459?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious and healthy veggie burger packed with flavor."
    },
    {
        id: 3,
        name: "Chicken Burger",
        price: "70",
        imageUrl: "https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Grilled chicken fillet with lettuce and savory sauces."
    },
    {
        id: 4,
        name: "Fish Burger",
        price: "90",
        imageUrl: "https://plus.unsplash.com/premium_photo-1664392182760-b1e2da62b7f7?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A crispy fish fillet with tartar sauce and fresh lettuce."
    },
    {
        id: 5,
        name: "Double Cheese Burger",
        price: "100",
        imageUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Double the cheese, double the flavor in every bite."
    },
    {
        id: 6,
        name: "Spicy Beef Burger",
        price: "85",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "A spicy beef patty with jalapeños and a zesty sauce."
    }
];


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

            <section className='mx-auto mt-10'>
            <h2 className='text-center font-bold text-3xl'>Food Menu</h2>
            <div className='flex flex-wrap justify-around mt-10 gap-4 mb-10'>
            {
                menuCard.map((item)=>(
                 <MenuCard key={item.id} name={item.name} price={item.price} image={item.imageUrl} description={item.description}/>
                ))
            }
            </div>

        </section>
    </div>
  );
}

export default Home;
