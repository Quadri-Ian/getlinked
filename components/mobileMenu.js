// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to open the mobile menu
//   const openMenu = () => {
//     setIsOpen(true);
//   };

//   // Function to close the mobile menu
//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openMenu} className="lg:hidden">
//         {/* Add your menu button icon here */}
//         <FontAwesomeIcon icon="fa-solid fa-bars" />
//       </button>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
//           <div className="bg-white h-full w-64 fixed top-0 right-0 transform translate-x-full transition-transform duration-300 ease-in-out p-4">
//             {/* Add your menu items here */}
//             <ul>
//               <li>
//                 <Link href="/contact">
//                   <a className="text-lg" onClick={closeMenu}>
//                     Contact
//                   </a>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about">
//                   <a className="text-lg" onClick={closeMenu}>
//                     About
//                   </a>
//                 </Link>
//               </li>
//               {/* Add more menu items as needed */}
//             </ul>
//             <button
//               onClick={closeMenu}
//               className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink  to-techpurple text-white"
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileMenu;
