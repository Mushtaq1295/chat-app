import React from "react";
import './App.css';
import { Link,NavLink } from "react-router-dom";
import Register from "./pages/Register.jsx"
import Sidebar from "./components/Sidebar.jsx";
import Chat from "./components/Chat.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
    <Register/>
    {/* <Home/> */}
      
      {/* <div
        className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed"
        style={{ backgroundImage: "url('/header.png')", objectFit: "contain",height:"100vh" }}

      >
      
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Mushtaq's 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                 <p></p>chat Application
              </span>
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              This is a chat Application which includes some special content
            </p>

           
    

<div className="flex justify-between gap-8">
 
  <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex-1">
    <div className="mb-4">
      <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
        Already a Customer?
      </label>
    </div>

    <NavLink
      to="/login" // Path for the Login page
      className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
    >
      Login
    </NavLink>
  </form>

 
  <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex-1">
    <div className="mb-4">
      <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
        Sign up to join with us
      </label>
    </div>

    <NavLink
      to="/Register" // Path for the Sign Up page
      className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
    >
      Sign Up
    </NavLink>
  </form>
</div>
</div>
          
          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src="/macbook.svg"
              alt="Macbook"
            />
          </div>

          <div className="mx-auto md:pt-16">
            <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
              Download our app:
            </p>
            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
              <img
                src="/App Store.svg"
                alt="App Store"
                className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
              />
              <img
                src="/Play Store.svg"
                alt="Play Store"
                className="h-12 transform hover:scale-125 duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>

    
      </div> */}
    </>
  );
}

export default App;
