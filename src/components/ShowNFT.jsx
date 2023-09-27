import Identicon from 'react-identicons'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import imgHero from '../assets/NFT1.jpg'
const ShowNFT = () => {
    const [modal] = useGlobalState('showModal')

    const handleSubmit =  () => {

        closeModal()

    }

    const closeModal = () => {
        setGlobalState('showModal', 'scale-0')

    }

    
    
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${modal}`}>

        <div className="bg-[#151c25] shadow-xl shadow-[#1526bd]
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <div className="flex flex-col">
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold  ">Buy NFT</p>
                    <button type = "button" 
                    onClick={closeModal}
                    
                    className="border-0 bg-transparent focus:outline-none" >
                        <FaTimes />

                    </button>

                </div>
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-40 w-40'>
                        <img className='h-full w-full object-cover cursor-pointer' src= {imgHero} alt="NFT" />
                    </div>
                </div>

                <div className='flex flex-col justify-start rounded-xl mt-5'> 
                <h4 className='text-white font-semibold'>The Great Ape Odyssey</h4>
                <p className='text-gray-400 text-xs my-1'>

                Embark on The Great Ape Odyssey, a digital journey into the heart of the jungle. This NFT captures the essence of our closest relatives, the apes, in their natural habitat. Witness their intricate social bonds, raw power, and untamed beauty in this captivating artwork.
                </p>
                <div className='flex justify-between items-center mt-3 text-white'>
                  <div className='flex justify-start items-center'>
                    <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string={'ncshusgcsuycjynnn'} size={50}/>
                  
                  <div className='flex flex-col justify-center  items-start'>
                  <small className='text-white font-bold'>@Owner</small>
                  <small className='text-red-500 font-semibold'>0x25...036d</small>
                  </div>
                  </div>
                  <div className='flex flex-col text-white '>
                    <small className='text-xs'>Current Price</small>
                    <p className='text-sm font-semibold'>56 ETH</p>
                  </div>
                </div>
                </div>
                

          <div className='flex justify-between  items-center space-x-2'>
          <button className="flex flex-row justify-center items-center
              w-full text-white text-md bg-[#1526bd]
              hover:bg-[#b45609] py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparent hover:text-[#b45609]
              hover:border hover:border-[#b45609]
              focus:outline-none focus:ring mt-5 ">Purchase
              </button>


          </div>


          

            </div>
            </div>
        </div>
  )
}

export default ShowNFT