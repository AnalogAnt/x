import React from 'react';
import Vics1 from '../assets/Vics1.jpg';
import Vics2 from '../assets/Vics2.jpg';
import Vics3 from '../assets/Vics3.jpg';

const Vics = () => {
    return (
        <div className='h-screen p-5 w-full bg-gradient-to-b from-[#c71d6f] to-[#d09693]'>
            <h1 className='text-8xl mb-20 mt-0 ml-10 text-center text-white'>Kritsuu</h1>
            <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-start w-2/4 gap-3'>
                <div className='flex flex-row justify-evenly gap-3'>
                    <img src={Vics1} alt="Vics1" className='rounded-full border-4 h-fit w-96'/>
                    <img src={Vics2} alt="Vics2" className='rounded-full border-4 h-fit w-96'/>
                </div>
                <img src={Vics3} alt="Vics3" className='rounded-full border-4 h-fit w-96 self-center'/>
            </div>
            <div className='place-self-center  ml-52 justify-self-end'>
                <p className=' text-white text-5xl gap-2'>
                    Sigu Unda neeekuuu!!
                </p>
                <br />
                <p className='text-white text-5xl'>THE BECAUSE!!!!!</p>
                <br />
                <p className='text-white text-5xl'> Mr.Dwight K Shrute</p>
            </div>
            </div>
        </div>
    );
};

export default Vics;