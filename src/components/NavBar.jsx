import React from 'react';
import logo from "../assets/logo.png";

function NavBar() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Foods', href: '#foods' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className='flex justify-between px-5 p-2'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="Website logo" className='w-[80px]' />
      </div>
      <ul className='flex gap-x-5 justify-center items-center'>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className='text-gray-600 hover:text-pink-500 font-semibold hover:cursor-pointer' > {item.name} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
