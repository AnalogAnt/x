import React from 'react'
import heroImage from "../assets/heroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="Home" className='h-screen  w-full bg-gradient-to-b from-[#c71d6f] to-[#d09693]'>
        <div className='max-w-screen-lg  px-4 mx-auto flex flex-col items-center h-full md:flex-row'>
            <div className='flex flex-col justify-center ml-auto'>
                <h4 className=' font-signature pt-10  pb-2 sm:text-9xl font-bold text-white '>
                    Happy Birthday!!
                </h4>
                
            </div>
            <div className='flex  flex-col justify-end  items-end rounded-full'>
                <img src={heroImage} className='rounded-full border-4 w-100 ' alt="my profile" />
            </div>
        </div>
    </div>
  )
}

export default Home