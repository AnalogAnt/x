import React from 'react';
import wordBox from '../assets/portfolio/wordBox.png'

import wiki from '../assets/portfolio/wiki.png'

import todos from '../assets/portfolio/todos.png'


const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src:wordBox,
            dLink:"https://word-box.vercel.app/",
            cLink:"https://github.com/AnalogAnt/WordBox"
        },
        {
            id:2,
            src:wiki,
            dLink:"https://vikaswiksearch.ccbp.tech/",
        },
        {
            id:3,
            src:todos,
            dLink:"https://vikastodolist.ccbp.tech/",
        }
    ]


  return (
    <div name="Portfolio" className='bg-gradient-to-b from-[#c71d6f] to-[#d09693] w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id,src,cLink,dLink}) =>(
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <a href={dLink} rel="noreferrer" target='_blank' className='w-1/2 px=6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                        <a href={cLink} rel="noreferrer" target='_blank' className='w-1/2 px=6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div>
                </div>
            
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio