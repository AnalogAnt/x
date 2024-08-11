import React from 'react'
import kousik from '../assets/kousikk.jpg'

const KosAbout2 = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-[#d09693] to-[#c71d6f] text-white' >
        <div>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <p className='hidden md:flex text-2xl mt-36'>Anywayyyyyys Krittttttti... whops nvm, Vidushiiiiiiii Happyyyyy
Birthdayyyyyyyyyyyyyyyyyy!!!!!!!!!  May all of us have more walks, may
all of us sit on more meets, to new places and to more wildd wilddd
crazzyyy adventuresss.
<br/>
Always your friend,
<br/>
Kousik (kernel kousik - kk)
<br />
P. S. - this pathr is a yearly publication madam, you can't unsubscribe.
<br />
I think I mentioned once that I enjoy reading poetry so here is one of
my all time favourites - I think you ll recognize it ;)

</p>
<div className='flex flex-row justify-evenly items-center'>
            <p className='mt-5 text-2xl'>
            Dilon mein tum apni
Betaabiyan leke chal rahe ho
Toh zinda ho tum
<br/>
Nazar mein khwabon ki
Bijliyan leke chal rahe ho
Toh zinda ho tum
<br/>
Hawa ke jhokon ke jaise
Aazad rehno sikho
<br/>
Tum ek dariya ke jaise
Lehron mein behna sikho
<br />
Har ek lamhe se tum milo
Khole apni bhaayein
<br />
Har ek pal ek naya samha
Dekhen yeh nigahaein
<br />
Jo apni aankhon mein
Hairaniyan leke chal rahe ho
Toh zinda ho tum
<br />
Dilon mein tum apni
Betaabiyan leke chal rahe ho
Toh zinda ho tum.
            </p>
            <img src={kousik} alt="kousikk guda" className='w-80 h-80 rounded-full border-4' />
            </div>
        </div>
        <div>
           
        </div>
        </div>
    </div>
  )
}

export default KosAbout2