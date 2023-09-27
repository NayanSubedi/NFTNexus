import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import Praharsha from '../assets/Snapchat-891827809.jpg'
const UpdateNFT = () => {
    const [modal] = useGlobalState('modal')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)


    const handleSubmit =  (e) => {
        e.preventDefault()

        if(!price) return


        console.log('Minted...')

        closeModal()

    }

    const closeModal = () => {
        setGlobalState('modal', 'scale-0')
        resetForm()

    }

    const resetForm = () => {
        setPrice('')
    }

    
    
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${modal}`}>

        <div className="bg-[#151c25] shadow-xl shadow-[#1526bd]
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold  ">Add NFT</p>
                    <button type = "button" 
                    onClick={closeModal}
                    
                    className="border-0 bg-transparent focus:outline-none" >
                        <FaTimes />

                    </button>

                </div>
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        <img className='h-full w-full object-cover cursor-pointer' src= {Praharsha} alt="NFT" />
                    </div>
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5 '>
                    <label className='block'>
                        <span className='sr-only'>Choose Profile Photo</span>
                        <input type='file' accept='image/png, image/jpg, image/jpeg, image/gif, image/webp' className=' block w-full text-sm text-slate-500 file:mr-4
                        file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                        hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0' 
                        required/>
                    </label>
                </div>
                <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>
          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="number"
              name="price"
              placeholder="Price (ETH)"
              min = {0.01}
              step={0.01}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
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
          

            </form>
            </div>/
        </div>
  )
}

export default UpdateNFT