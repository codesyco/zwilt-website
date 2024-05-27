import zwiltLogo from '../../assets/zwilt.png'
import vector2 from '../../assets/Vector (2).png'
import zwilthLogoVector from '../../assets/Vector.png'
const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#0C0C0C] to-[#202229] pt-5 px-5 flex flex-col parallelogram-clip-top gap-20 text-white'>
      <div className='bg-[#525AA0] parallelogram-clip h-64 flex flex-col items-center justify-center gap-6 relative'>
        <div className='text-xl'>
            Need A job done, and done well? Get started
        </div>
        <div className='absolute top-[60%] w-4/5 flex flex-col items-center gap-5'>
            <div className='w-16 h-16 flex place-items-center justify-center rounded-3xl bg-[#202229]'>
                <img src={vector2} alt="" className='w-4 h-6'/>
            </div>
            <div className='hidden w-4/5 flex flex-col gap-4'>
                <div className='rounded-xl overflow-hidden h-32 text-black'>
                    <input type="text" placeholder='Enter your message' className='w-full h-full p-5'/>
                </div>
                <div className='rounded-xl overflow-hidden text-black'>
                    <input type="text" placeholder='Enter your email'className='w-full p-5' />
                </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-8'>
            <div className='flex'>
                <img src={zwiltLogo} alt="" />
                <img src={zwilthLogoVector} alt="" />
            </div>
            <h4 className='opacity-80'>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</h4>
            <div className='flex flex-col gap-4'>
                <h4 className='opacity-55'>LINKS AND REDIRECTS</h4>
                <div className='flex gap-4'>
                    <button className='text-[#EDEFFF] bg-[#292B34] rounded-3xl px-10'>Hire now</button>
                    <button className='text-[#EDEFFF] bg-[#292B34] rounded-3xl px-10'>Apply now</button>
                </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'>Connecting the right people to the right businesses.</h2>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='opacity-80'>PLATFORM</p>
                        <ul>
                            <li className='animated-underline'>Find Work</li>
                            <li className='animated-underline'>Find Talent</li>
                            <li className='animated-underline'>Categories</li>
                            <li className='animated-underline'>About Us</li>
                        </ul>
                    </div>
                    <div>
                        <p className='opacity-80'>CATEGORIES</p>
                        <ul>
                            <li className='animated-underline'>Data Science</li>
                            <li className='animated-underline'>IT & Networking</li>
                            <li className='animated-underline'>Web & Mobile</li>
                        </ul>
                    </div>
                    <div>
                        <p className='opacity-80'>HELP</p>
                        <ul>
                            <li className='animated-underline'>FAQ&apos;s</li>
                            <li className='animated-underline'>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <p className='opacity-80'>GET IN TOUCH</p>
                        <ul>
                            <li className='animated-underline'>Instagram</li>
                            <li className='animated-underline'>Linkedin</li>
                            <li className='animated-underline'>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='border-t-[1.5px] border-slate-200 flex flex-col gap-2 justify-around'>
        <div>
            All rights reserved by Zwilt
        </div>
        <div className='flex gap-4'>
            <div>
                Privacy Policy
            </div>
            <div>
                Terms and Conditions
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
