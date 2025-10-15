import React from 'react';
import ananya1 from '../assets/ananya-2025-1.jpeg';
import ananya2 from '../assets/ananya-2025-2.jpeg';
import ananya3 from '../assets/ananya-2025-3.jpeg';

const Ananya2025 = () => {
    return (
        <div className='min-h-screen p-5 w-full bg-gradient-to-b from-[#4227a4] to-[#0a0f2c]'>
            <h1 className='font-league-spartan font-bold text-8xl mb-20 mt-0 ml-10 text-center text-white'>Kritiii</h1>
            <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-start w-2/4 gap-3'>
                <div className='flex flex-row justify-evenly gap-3'>
                    <div className='rounded-full border-4 h-96 w-96 overflow-hidden'>
                        <img src={ananya1} alt="Ananya 1" className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-full border-4 h-96 w-96 overflow-hidden'>
                        <img src={ananya2} alt="Ananya 2" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='rounded-full border-4 h-96 w-96 overflow-hidden self-center'>
                    <img src={ananya3} alt="Ananya 3" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='place-self-center ml-10 justify-self-end w-2/4'>
                <p className='font-league-spartan text-white text-2xl'>
                    <span className='text-3xl font-bold text-pink-300'>Happyyyyyy Birthdayyyyyyy Kritiiiiiii!!!</span>
                    <br /><br />
                    Pehle toh, You bring soooo much joy to all of us with your anywhoossss and your meet kick outssss, you're a cute bunch of energy and joy that flows into all of us around you.
                    <br /><br />
                    Now to the deep stuff, I'm really really glad that we got close in the past year. I can't imagine how different things would be today if we all didn't take IoT in that sem, dudeee sach mein? Or if I didn't come to PS Cheese? Or knowledge city? I would have missed out on sooooomuch madness. And You're the binding force behind it all. Thankkk youuuu, for getting me into this family.
                    <br /><br />
                    We've made suchhhhhh amazing memories this year, with your birthday, the concert where we danced our hearts out, met coco, bitcheddd about corporate uncles, gave solid opinions on god and fate and always had another girl's back.
                    <br /><br />
                    Oh that brings me to this, You're such a girls girl yaaar, I can't think of anyone more savage at being a feminist.
                    <br /><br />
                    To manyyyyyy more meets, races, ice "screams", cornering dhan out, believing their dumb pink shirt date stories, teaching them to be chivalrous, trolling them over their song choices, dancing really hard at the arcade, shutting our eyes and hugging each other tight when a ghost is banging the door, and amidst all of it laughing the hardest.
                    <br /><br />
                    <span className='text-pink-300 font-bold'>To manyyyyy more. 🥂</span>
                </p>
            </div>
            </div>
        </div>
    );
}

export default Ananya2025
