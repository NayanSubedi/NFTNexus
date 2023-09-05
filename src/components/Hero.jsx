
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
        <div className="md:w-3/6 w-full">
            <div className="text-white text-5xl font-bold">
                <h1>Collect and Create <br /> Pixelated Arts,<br />
                <span className="text-gradient">NFTs</span> Collections</h1>
                <p className="text-gray-400 font-semibold text-lg ">From Pixels to Possession.</p>
            </div>
        <div className="flex mt-5">
            <button className="shadow-xl shadow-black text-white bg-[#1526bd] hover:bg-[#b45609] md:text-xs p-2 rounded-full">Create NFT</button>
        </div>
        </div>
    </div>
  )
}

export default Hero