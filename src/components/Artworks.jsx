import React from 'react';

const imgHero = 'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?w=1380&t=st=1693909372~exp=1693909972~hmac=3bc0688d7a8c6545a2e54fed4467eaa371735924c61f644c3cd6c54ca7be1ba3';

const Artworks = () => {
  return (
    <div className="bg-[#24034b] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Artworks</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(4)
            .fill()
            .map((_, i) => (
              <Card key={i} nft={i + 1} />
            ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ nft }) => (
  <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
    <img className='h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3' src={imgHero} alt="NFT Image" />
    <h4 className='text-white font-semibold'>NFT #{nft}</h4>
    <p className='text-gray-400 text-sm my-1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio magna, tempus hendrerit turpis
      tempor et. Nullam nec velit et massa vulputate tempus. Quisque vestibulum auctor odio at vehicula. Nullam laoreet
      arcu ac velit convallis rhoncus. Curabitur eget dolor turpis. Sed ex libero, porttitor eu consequat nec,
      pellentesque a sem. Etiam accumsan vestibulum dui, sed fringilla ante tristique finibus. Morbi ante arcu,
      tincidunt a purus non, accumsan iaculis enim. Maecenas felis ante, ultricies vitae urna sit amet, tristique
      sollicitudin metus.
    </p>
    <div className='flex justify-between items-center mt-3 text-white'>
      <div className='flex flex-col'>
        <small className='text-xs'>Current Price</small>
        <p className='text-sm font-semibold'>0.56 ETH</p>
        </div>
        <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] rounded-full px-1.5 py-1'>View More</button>
      </div>
    </div>

);

export default Artworks
