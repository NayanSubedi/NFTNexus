import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
const imgHero = 'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?w=1380&t=st=1693909372~exp=1693909972~hmac=3bc0688d7a8c6545a2e54fed4467eaa371735924c61f644c3cd6c54ca7be1ba3'
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
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        <img className='h-full w-full object-cover cursor-pointer' src= {imgHero} alt="NFT" />
                    </div>
                </div>
               
          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-20"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button className="flex flex-row justify-center items-center
              w-full text-white text-md bg-[#1526bd]
              hover:bg-[#b45609] py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparent hover:text-[#b45609]
              hover:border hover:border-[#b45609]
              focus:outline-none focus:ring mt-5">Mint Now</button>
          

            </div>
            </div>/
        </div>
  )
}

export default ShowNFT