import React from 'react'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import cant from '../assets/cant_sleep.pdf'
import pep from '../assets/pep_talk.pdf'

const Skills = () => {
  const skills = [
    {
        id:1,
        src:cant,
        title:'If you cant sleep',
        style:"shadow-orange-500"
    },
    {
        id:2,
        src:pep,
        title:'If you need a pep talk',
        style:"shadow-blue-500"
    },
    {
        id:3,
        src:javascript,
        title:'JavaScript',
        style:"shadow-yellow-500"
    },
    {
        id:4,
        src:reactImage,
        title:'React',
        style:"shadow-blue-600"
    },
    {
        id:5,
        src:node,
        title:'NodeJs',
        style:"shadow-green-600"
    },
    {
        id:6,
        src:python,
        title:'Python',
        style:"shadow-yellow-600"
    },
    {
        id:7,
        src:tailwind,
        title:'Tailwind',
        style:"shadow-blue-400"
    },

    {
        id:8,
        src:github,
        title:'GitHub',
        style:"shadow-gray-400"
    },
  ]

  const onButtonClick = (pdfFile) => {
    const pdfUrl = pdfFile;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div name="Skills" className='bg-gradient-to-b from-[#d09693] to-[#c71d6f] w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='mt-20'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are the technologies I can work with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {skills.map(({id,src,title,style}) =>(
                    <div key={id} onClick={() => onButtonClick(src)} className={`shadow-md flex flex-col justify-center hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4 text-4xl text-center'>{title}</p>
                </div>
                ))

                }
                
            </div>
        </div>
    </div>
  )
}

export default Skills