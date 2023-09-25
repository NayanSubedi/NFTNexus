import { setGlobalState } from "../store";

import IMG from '../assets/NFT.jpg'



const Artworks = () => {
  return (

    
    <div className=" bg-[#24034b]">
      <div className="w-4/5 py-24 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Artworks</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Card key={i} nft={i + 1} />
            ))}
        </div>
        <div className="text-center my-5">
        <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] rounded-full px-1.5 py-1'>View More</button>
        </div>
      </div>
   </div>
  );
};

const Card = ({ nft }) => (
  <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
    <img className='h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3' src={IMG} alt="NFT Image" />
    <h4 className='text-white font-semibold'>NFT #{nft}</h4>
    <p className='text-gray-400 text-sm my-1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio magna, tempus hendrerit turpis
      tempor et. Nullam nec velit et massa vulputate tempus. Quisque vestibulum auctor odio at vehicula. Nullam laoreet
     
    </p>
    <div className='flex justify-between items-center mt-3 text-white'>
      <div className='flex flex-col'>
        <small className='text-xs'>Current Price</small>
        <p className='text-sm font-semibold'>0.56 ETH</p>
        </div>
        <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] rounded-full px-1.5 py-1 first-letter ' onClick={() => setGlobalState('showModal', 'scale-100')}>View More</button>
      </div>
    </div>

);

export default Artworks
