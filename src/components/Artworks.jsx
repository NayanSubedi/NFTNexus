import { setGlobalState } from "../store";
import NFT1 from '../assets/NFT1.jpg'
import NFT2 from '../assets/NFT2.jpg'
import NFT3 from '../assets/NFT3.jpg'
import NFT4 from '../assets/NFT4.jpg'
import './Glow.css'
const Artworks = () => {
  const artworksData = [
    {
      img: NFT1,
      title: 'The Great Ape Odyssey',
      description: 'Embark on The Great Ape Odyssey, a digital journey into the heart of the jungle. This NFT captures the essence of our closest relatives, the apes, in their natural habitat. Witness their intricate social bonds, raw power, and untamed beauty in this captivating artwork.',
      price: '56 ETH',
    },
    {
      img: NFT2,
      title: 'Ape Alchemy: Metamorphosis of Wisdom',
      description: 'Unlock the secrets of Ape Alchemy, where ancient wisdom meets the digital realm. This NFT collection explores the profound symbolism of apes as symbols of intuition and ancestral knowledge. Dive into the mystical world of Ape Alchemy and awaken your inner sage.',
      price: '75 ETH',
    },
    {
      img: NFT3,
      title: 'Ethereal Dreamscape',
      description: 'Step into a mesmerizing digital dreamscape where imagination knows no bounds. This one-of-a-kind NFT artwork invites you to explore the ethereal realm of artistry, where colors dance and shapes intertwine in a symphony of creativity. Own a piece of this surreal universe today.',
      price: '42 ETH',
    },
    {
      img: NFT4,
      title: 'Urban Echoes: Graffiti Fusion',
      description: 'Experience the raw energy and creative rebellion of the streets with Urban Echoes. This NFT collection captures the essence of urban life through graffiti fusion, blending street art with digital innovation. Each piece is a snapshot of the vibrant, ever-evolving cityscape..',
      price: '60 ETH',
    },
  ];

  return (
    <div className="bg-[#24034b]">
      <div className="w-4/5 mx-auto py-28 ">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Artworks</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-4 py-2.5">
          {artworksData.map((artwork, index) => (
            <Card key={index} artwork={artwork} />
          ))}
        </div>
        <div className="text-center my-5">
          <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] text-white font-bold rounded-full px-1.5 py-1'>View More</button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ artwork }) => (
  <div className='w-full shadow-xl glow2 shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
    <img className='h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3' src={artwork.img} alt="NFT Image" />
    <h4 className='text-white font-semibold'>{artwork.title}</h4>
    <p className='text-gray-400 text-sm my-1'>{artwork.description}</p>
    <div className='flex justify-between items-center mt-3 text-white'>
      <div className='flex flex-col'>
        <small className='text-xs'>Current Price</small>
        <p className='text-sm font-semibold'>{artwork.price}</p>
      </div>
      <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] rounded-full px-1.5 py-1 first-letter' onClick={() => setGlobalState('showModal', 'scale-100')}>Buy Now</button>
    </div>
  </div>
);

export default Artworks;
