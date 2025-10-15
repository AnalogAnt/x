import React from 'react';
import abiImage from '../assets/abi.jpeg';

const ABI = () => {
    return (
        <div className='w-full min-h-screen p-3 bg-gradient-to-b from-[#791ea7] to-[#6a44c1] text-white'>
            <h1 className='font-league-spartan font-bold text-8xl mb-20 mt-0 ml-10 text-center'>Anything but IOT &#60;3</h1>
             <div className='flex flex-row align-middle justify-evenly'>
                <div className='w-auto h-auto '>
                    <div className='h-96 w-96 border-4 rounded-full overflow-hidden'>
                        <img src={abiImage} alt="ABI" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-2/4'>
                    <p className='font-league-spartan text-4xl'>
                    From hoping we'd pass in IoT, to getting frustrated reading those pdfs before the internal, to talking about everything under the sun except IoT, we've come very very far.
                    </p><br />
                    <p className='font-league-spartan text-4xl'>
                    We have become this quirky, geeky, nerdy, super funny, amazingggg family, that never let's you feel like you're going through life alone. A family that says yes no matter what the plan is, and ends up having a great story to tell. Thank you so muchhhh for being the person that you are, laughing at all our jokes, kicking us out of meets, being the most loyal Ferrari fan and above all, being our bubble of joy in all that we do!
                    </p>
                </div>
             </div>
        </div>
    );
};

export default ABI;
