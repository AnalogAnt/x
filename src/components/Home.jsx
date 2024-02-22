import React from 'react'
import heroImage from "../assets/heroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
            <div className='flex flex-col justify-center h-4'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I love to work on web applications using technologies like React, Node JS and Express JS.

                </p>
                <div>
                    <Link to="Portfolio" smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                        <span className='hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={heroImage} className='rounded-2xl  mx-auto w-2/3 md:w-full' alt="my profile" />
            </div>
        </div>
    </div>
  )
}

export default Home