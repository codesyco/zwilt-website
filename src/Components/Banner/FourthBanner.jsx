import vector from '../../assets/Vector (7).png'
import banner from '../../assets/Group 1094.svg'
import banner2 from '../../assets/Group 626351.png'
import banner3 from '../../assets/Group 626358.png'
const FourthBanner = () => {
  return (
    <div>
      <div className='flex flex-col gap-5 p-5 items-center justify-center'>
        <div className='text-3xl font-bold text-black'>Start your journey today.</div>
        <div className='h-fit lg:w-[95%]'>
            <div className='h-[150px] bg-[#EDEFFF] parallelogram-clip-semi-sections flex place-items-center p-5 md:h-[300px] gap-2'>
                <div className='text-transparent bg-clip-text bg-gradient-to-b from-[#A387D1] to-[#D1C4E275] text-7xl md:text-9xl font-semibold place-self-start md:place-self-center lg:place-self-start lg:pt-10'>1</div>
                <div className='flex flex-col gap-2 lg:max-w-[350px] lg:gap-10'>
                    <div className='flex flex-col gap-2 lg:gap-5'>
                        <div className='text-xs font-bold md:text-2xl lg:text-4xl'>Find your next star performer.</div>
                        <div className='text-[8px] opacity-70 md:text-lg'>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</div>
                    </div>
                    <div className='flex place-items-center gap-2'>
                        <div className='bg-black w-[20px] h-[20px] rounded-xl flex items-center justify-center md:w-[35px] md:h-[35px] md:rounded-2xl'><img src={vector} alt="" className='w-[10px] md:w-[15px]' /></div>
                        <div>Join Now</div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                  <img src={banner} alt="" className='h-[700px] w-[600px] max-[450px]:w-[500px] md:h-fit lg:w-[400px]' />
                </div>
            </div>
            <div className='h-[150px] bg-[#FFF7E1] parallelogram-clip-semi-sections flex place-items-center p-5 md:h-[300px] gap-2 '>
                <div className='text-transparent bg-clip-text bg-gradient-to-b from-[#FFBE2EC2] to-[#FFBE2E00] text-7xl font-semibold place-self-start md:place-self-center md:text-9xl lg:place-self-start lg:pt-10'>2</div>
                <div className='flex flex-col gap-2 lg:max-w-[350px] lg:gap-10'>
                    <div className='flex flex-col gap-2 lg:gap-5'>
                        <div className='text-xs font-bold md:text-2xl lg:text-4xl'>Evaluate to your heart’s content.</div>
                        <div className='text-[8px] opacity-70 md:text-lg'>Assess the candidate through work history, transparent tests and video interviews.</div>
                    </div>
                    <div className='flex place-items-center gap-2'>
                        <div className='bg-black w-[20px] h-[20px] rounded-xl flex items-center justify-center md:w-[35px] md:h-[35px] md:rounded-2xl'><img src={vector} alt="" className='w-[10px] md:w-[15px]' /></div>
                        <div>Join Now</div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                  <img src={banner2} alt="" className='h-[150px] object-cover max-[450px]:w-[500px] max-[450px]:h-[140px] object-center w-[600px] md:h-fit lg:w-[400px]' />
                </div>
            </div>
            <div className='h-[150px] bg-[#F3F3F3] parallelogram-clip-semi-sections flex place-items-center p-5 md:h-[300px] gap-2'>
                <div className='text-transparent bg-clip-text bg-gradient-to-b from-[#000000CC] to-[#00000029] text-7xl font-semibold place-self-start md:place-self-center md:text-9xl lg:place-self-start lg:pt-10'>3</div>
                <div className='flex flex-col gap-2 lg:pr-32 lg:gap-10'>
                    <div className='flex flex-col gap-2 lg:gap-5'>
                        <div className='text-xs font-bold md:text-2xl lg:text-4xl'>Start building your team.</div>
                        <div className='text-[8px] opacity-70 md:text-lg lg:w-[50ch]'>Onboard your candidate right away and start creating the next big thing.</div>
                    </div>
                    <div className='flex place-items-center gap-2'>
                        <div className='bg-black w-[20px] h-[20px] rounded-xl flex items-center justify-center md:w-[35px] md:h-[35px] md:rounded-2xl'><img src={vector} alt="" className='w-[10px] md:w-[15px]' /></div>
                        <div>Join Now</div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                  <img src={banner3} alt="" className='h-[150px] w-[600px] max-[450px]:w-[500px] object-cover md:h-fit lg:w-[430px]' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FourthBanner
