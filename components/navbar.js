import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the mobile menu
  const openMenu = () => {
    setIsOpen(true);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='border-b'>
      {/* Navbar (Mobile) */}
      <div className=' border-b-2 '>
        <nav className="p-6 px-12 text-white border-b-2 lg:hidden">
          <div className="flex justify-between items-center">
            <Link href='/'>
            <div className="text-md md:text-1xl font-bold">get<span className='text-techpurple'>linked</span></div>
            </Link>
            {/* Hamburger button */}
            <button onClick={openMenu} className=" hover:text-techpurple ">
            <Image src='/vector.svg' alt='menu' width={20} height={20} className='w-5 md:w-8'/>            
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile absolute bg-[#150E28] top-0 right-0 w-full text-white">
  <div className="bg-white space-y-8 w-full top-0 right-0 transform translate-x-full transition-transform duration-300 ease-in-out p-4 relative">
    {/* Mobile menu items */}
    <button onClick={closeMenu} className=" top-4 right-4">
      <FontAwesomeIcon icon="fa-solid fa-x" className='text-right' />
    </button>
    <ul>
      <li>
        <Link className="text-lg" onClick={closeMenu} href="#timeline">
          Timeline
        </Link>
      </li>
      <li>
        <Link className="text-lg" onClick={closeMenu} href="#overview">
          Overview
        </Link>
      </li>
      <li>
        <Link className="text-lg" onClick={closeMenu} href="#faqs">
          FAQs
        </Link>
      </li>
      <li>
        <Link className="text-lg" onClick={closeMenu} href="/contact">
          Contact
        </Link>
      </li>
      {/* Add more menu items as needed */}
    </ul>
    {/* Register button */}
    <div className='mt-8'>
      <Link className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink to-techpurple text-white" onClick={closeMenu} href="/register">
                  Register
        </Link>       
    </div>
 
  </div>
</div>


        )}
      </div>
      {/* Rest of the Navbar content */}
              {/* Navbar (Desktop) */}
              <nav className="p-6 px-12 text-white hidden lg:block w-full">
          <div className="flex justify-between items-center w-full">
            <div className="text-2xl font-bold">get<span className='text-techpurple'>linked</span></div>
            <div className="flex justify-between items-center space-x-6">
              <div >
              <ul className="flex justify-between space-x-4"> 
                    <li>
                      <Link className="text-lg" onClick={closeMenu} href="#timeline">
                        Timeline
                      </Link>
                    </li>
                    <li>
                      <Link className="text-lg" onClick={closeMenu} href="#overview">
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link className="text-lg" onClick={closeMenu} href="#faqs">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link className="text-lg" onClick={closeMenu} href="/contact">
                        Contact
                      </Link>
                    </li>
                    {/* Add more menu items as needed */}
                  </ul>
              </div>
              <div className=''>
              <Link className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink to-techpurple text-white" onClick={closeMenu} href="/register">
                Register
              </Link>                   
              </div>
         
        </div>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
