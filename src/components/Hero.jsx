import Identicon from 'react-identicons'
const imgHero = 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=740&t=st=1693900093~exp=1693900693~hmac=fd332086f131b492a0c3b927a96fdbe276fc51a057cdce7ea15561693da1a313'
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

        <div className="w-3/4 flex justify-between items-center mt-5">
            <div className="text-white ">
            <p className="font-bold">50K</p>
            <small className="text-gray-300">Users</small>
            </div>
            <div className="text-white ">
            <p className="font-bold">75K</p>
            <small className="text-gray-300">Arts</small>
            </div>
            <div className="text-white ">
            <p className="font-bold">33K</p>
            <small className="text-gray-300">Artist</small>
            </div>
        </div>
        
        </div>
        <div className="shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
            <img className= 'h-50 w-full object-fill'src={imgHero} alt="Hero" />
            <div className='flex justify-start items-center p-3'>
                <Identicon className='h-10 w-10 object-contain rounded-full mr-3 ' string={'0x35...102n'} size={50}/>
                <div>
                    <p className='text-white font-semibold'>0x35...102n</p>
                    <small className='text-red-700 font-semibold text-md'>@ppap</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero