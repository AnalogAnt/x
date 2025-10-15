import React from 'react';
import MFImage from '../assets/MF.jpg'

const MF = () => {
    return (
        <div className='w-full h-screen p-3 bg-gradient-to-b from-[#6a44c1] to-[#4227a4] text-white'>
            <h1 className='font-league-spartan font-bold text-8xl mb-20 mt-0 ml-10 text-center'>Malleshwariii Fanss &#60;3</h1>
             <div className='flex flex-row align-middle justify-evenly'>
                <div className='w-auto h-auto '>
                    <img src={MFImage} className='h-96 w-96 border-4 rounded-full' alt="MF" />
                </div>
                <div className='w-2/4'>
                    <p className='font-league-spartan text-4xl'>
                    Thank you for being Krocssyyy, Kritsuuu and Vidushii in all of our lives. You mean so much to each one of us personally and to MF. We want you to continue laughing on more of our jokes which if got out, we could be jailed. Let us continue hating black people and Muslims. Let us fight and conclude that Rockstar is the best movie ever made. To more F1 evenings, late night meets and escapes from college.
                    </p>
                </div>
             </div>
        </div>
    );
};

export default MF;
