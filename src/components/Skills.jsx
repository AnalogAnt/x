import React from 'react'
import cant from '../assets/cant_sleep.pdf'
import pep from '../assets/pep_talk.pdf'
import someOne from "../assets/someone_to_talk_to.pdf";
import period from "../assets/period.pdf";
import fight from "../assets/fight.pdf";
import sick from "../assets/sick.pdf";
import badDay from "../assets/bad_day.pdf";
import happy from "../assets/happy.pdf";

const Skills = () => {
  const skills = [
    {
        id:1,
        src:cant,
        title:'If you cant sleep',
        style:"shadow-red-900"
    },
    {
        id:2,
        src:pep,
        title:'If you need a pep talk',
        style:"shadow-red-900"
    },
    {
        id:3,
        src:someOne,
        title:'If you need someone to talk to',
        style:"shadow-red-900"
    },
    {
        id:4,
        src:period,
        title:'If you are having a bad period',
        style:"shadow-red-900"
    },
    {
        id:5,
        src:fight,
        title:'If we fight',
        style:"shadow-red-900"
    },
    {
        id:6,
        src:badDay,
        title:'If you had a bad day',
        style:"shadow-red-900"
    },
    {
        id:7,
        src:sick,
        title:'If you are feeling sick',
        style:"shadow-red-900"
    },
    {
        id:8,
        src:happy,
        title:'If you are happy',
        style:"shadow-red-900"
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
                <p className='text-4xl font-bold p-2 inline'>Hiii krocsyyy, Its me Dhanvi. These are 8 letters which you will open when the time is right.</p>
        
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {skills.map(({id,src,title,style}) =>(
                    <div key={id} onClick={() => onButtonClick(src)} className={`shadow-md border-2 border-white bg-gradient-to-b from-[#d09693] to-[#c71d6f] w-80 h-40 flex flex-col justify-center hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
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