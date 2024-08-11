import React from 'react';
import MFImage from '../assets/MF.jpg'

const MF = () => {
    return (
        <div className='w-full h-screen p-3 bg-gradient-to-b from-[#d09693] to-[#c71d6f] text-white'>
            <h1 className='text-8xl mb-20 mt-0 ml-10 text-center'>Malleshwariii Fanss &#60;3</h1>
             <div className='flex flex-row align-middle justify-evenly'>
                <div className='w-auto h-auto '>
                    <img src={MFImage} className='h-96 w-auto border-4 rounded-md' alt="MF" />
                </div>
                <div className='w-2/4'>
                    <p>
                    I believe in the power of collaboration and enjoy working closely with clients and colleagues to understand their unique needs and deliver tailored solutions. My goal is not just to meet expectations but to exceed them, ensuring that each project I work on leaves a lasting impact. Beyond coding, I'm deeply passionate about staying at the forefront of industry trends and continuously expanding my skill set. Whether it's attending tech conferences, participating in online courses, or contributing to open-source projects, I'm always eager to learn and grow. If you're looking for a dedicated Full Stack Developer who can bring your ideas to life with precision and creativity, I'd love to connect and discuss how we can collaborate on your next project!
                    </p>
                </div>
             </div>
        </div>
    );
};

export default MF;