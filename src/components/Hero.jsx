import Identicon from 'react-identicons'
import { setGlobalState } from '../store'
import Typewriter from "typewriter-effect";
import IMG from '../assets/NFT.jpg'
import  './Glow.css'
const Hero = () => {
  return (
    <div className="bg-[#24034b] gradient-bg-artworks">
    <div className="flex  flex-col md:flex-row w-4/5 justify-between items-center  mx-auto py-32 ">
        <div className="md:w-3/6 w-full">
            <div className="text-white text-6xl  font-bold">
                <h1>Collect and Create <br /> Pixelated Arts,<br />
                <span className="text-gradient">
                    
                    NFTs</span> Collections</h1>
                <small className="text-white text-base  ">
            <Typewriter 
 
                onInit={(typewriter) => {
                    typewriter

                        .typeString("From Pixels to Possesion")
                        .start();
                }}
            />
        </small>
            </div>
        <div className="flex mt-5">
            <button className="shadow-xl shadow-black text-white bg-[#1526bd] hover:bg-[#b45609] md:text-xs p-2 rounded-full" onClick={() => setGlobalState('modal', 'scale-100')}>Create NFT</button>

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
        <div className="shadow-xl  md:w-2/5 w-full mt-10 md:mt-0 rounded-md glow2 bg-gray-800">
            <img className= 'h-50 w-70 object-fill'src={IMG} alt="Hero" />
            <div className='flex justify-start items-center p-3'>
                <Identicon className='h-10 w-10 object-contain rounded-full mr-3 ' string={'kncdskkndcskncsaskncwue5'} size={50}/>
                <div>
                    <p className='text-white font-semibold'>0x35...086a</p>
                    <small className='text-red-700 font-semibold text-md'>@rickroll</small>
                </div>
            </div>
        </div>
    </div>
     </div>
  )
}

export default Hero