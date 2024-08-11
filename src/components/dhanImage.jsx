import React from 'react';
import collage from '../assets/collage.png'

const DhanImage = () => {
    return (
        <div className='w-full h-screen p-3 bg-gradient-to-b from-[#c71d6f] to-[#d09693] text-white'>
            <h1 className='text-8xl mb-20 mt-0 ml-10 text-center'>Krocsyyy &#60;3</h1>
             <div className='flex flex-row align-middle justify-evenly'>
                <div className='w-auto h-auto ml-6 '>
                    <img src={collage} className='h-96 w-auto rounded-md' alt="MF" />
                </div>
                <div className='w-2/4 text-4xl mt-44'>
                    <p>
                    All I want is to fly with you
                    <br/>
                    All I want is to fall with you
                    <br/>
                    So just give me all of you
                    <br/>
                    It feels impossible (it's not impossible)
                    <br/>
                    Is it impossible?
                    <br/>
                    Say that it's possible
                    <br />
                    <div className='ml-96'>
                    <span className='text-right'>~Dhanvii</span>
                    </div>
                    </p>
                </div>
             </div>
        </div>
    );
};

export default DhanImage;