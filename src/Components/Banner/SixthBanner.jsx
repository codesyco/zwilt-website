import vector from "../../assets/Vector (12).png"
const SixthBanner = () => {
  return (
    <div>
      <div className="flex flex-col text-center bg-[#F3F3F3] gap-5 py-40 max-[500px]:mb-[-15%] parallelogram-clip-semi-sections-end md:pb-[15rem] lg:pb-[20rem]">
        <div className="font-bold text-2xl md:text-3xl ">Frequently asked questions</div>
        <div className="grid grid-cols-4 grid-rows-7 ">
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-1 flex items-center justify-center">General</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-3 flex items-center justify-center">I want to work part-time, is that possible</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-4 flex items-center justify-center ">How long are the average projects?</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-4 flex items-center justify-center bg-[#E8E8E8] relative">How does the payment works? <img src={vector} alt="" className="w-[15px] absolute right-10"/></div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-4 flex items-center justify-center ">How much can I earn?</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-1 flex items-center justify-center bg-[#E8E8E8]">General</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-1 flex items-center justify-center ">Joining Process</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-2 flex items-center justify-center ">I want to work part-time, is that possible</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-4 flex items-center justify-center">How long are the average projects?</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-4 flex items-center justify-center">How long are the average projects?</div>
            <div className="border border-[#D6D6D6]-1 p-4 row-span-1 col-span-4 flex items-center justify-center">How much can I earn?</div>
        </div>
      </div>
    </div>
  )
}

export default SixthBanner
