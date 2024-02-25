import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Hello! I'm Vikas Bagalkot, a Full Stack Developer based in India. With a passion for crafting seamless web experiences, I specialize in leveraging cutting-edge technologies like React, Node.js, and SQL to build robust and innovative web applications. From conceptualization to deployment, I thrive on turning ideas into tangible solutions. Whether it's creating intuitive user interfaces, architecting scalable backend systems, or optimizing database performance, I bring a blend of creativity and technical expertise to every project.</p>
            <br />
            <p className='hidden md:flex text-xl'>I believe in the power of collaboration and enjoy working closely with clients and colleagues to understand their unique needs and deliver tailored solutions. My goal is not just to meet expectations but to exceed them, ensuring that each project I work on leaves a lasting impact. Beyond coding, I'm deeply passionate about staying at the forefront of industry trends and continuously expanding my skill set. Whether it's attending tech conferences, participating in online courses, or contributing to open-source projects, I'm always eager to learn and grow. If you're looking for a dedicated Full Stack Developer who can bring your ideas to life with precision and creativity, I'd love to connect and discuss how we can collaborate on your next project!</p>

        </div>
    </div>
  )
}

export default About