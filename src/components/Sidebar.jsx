import React from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css"
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
         
         <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
         <Navbar/>
         <Search/>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <NavLink to="/user1" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600" aria-hidden="true" 
                        src='/berlin.jpeg'
                        />
                        <span className="ms-3">Berlin</span>
                     </NavLink>
                  </li>
                  <li>
                  <NavLink to="/user1" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600" aria-hidden="true" 
                        src='/tokyo.jpeg'
                        />
                        <span className="ms-3">Tokyo</span>
                     </NavLink>
                  </li>
                  <li>
                  <NavLink to="/user1" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600" aria-hidden="true" 
                        src='/denver.jpeg'
                        />
                        <span className="ms-3">Denver</span>
                     </NavLink>
                  </li>
                  <li>
                  <NavLink to="/user1" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600" aria-hidden="true" 
                        src='/rio.jpeg'
                        />
                        <span className="ms-3">Rio</span>
                     </NavLink>
                  </li>
                  <li>
                  <NavLink to="/user1" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <img className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600" aria-hidden="true" 
                        src='/palermo.jpeg'
                        />
                        <span className="ms-3">Palermo</span>
                     </NavLink>
                  </li>
               </ul>
            </div>
         </aside>
      </div>

    </>
  )
}

export default Sidebar
