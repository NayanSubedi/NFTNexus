import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Creators = () => {
  const artists = [

    {
      id: 1,
      name: "@BAYC",
      bgImage: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=740&t=st=1695343014~exp=1695343614~hmac=b2c6944c9b61da8e20efe4f6ce766b05f9901dc1ae57cdd7073ad3928f743157",
      image: "https://ik.imagekit.io/bayc/assets/bayc-footer.png",
    },
    {
      id: 2,
      name: "@NFTPUNK",
      bgImage: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611057.jpg?w=740&t=st=1695343069~exp=1695343669~hmac=47bbda6d561759450277083446a9fcb40a1c26c7fb0ced5200de3283c9e23714",
      image: "https://coincierge.de/wp-content/uploads/2022/04/CryptoPunks-NFT-logo.png",
    },
    {
      id: 3,
      name: "@PEPE",
      bgImage: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?w=740&t=st=1695343143~exp=1695343743~hmac=1dd1309ae7e1d510b4852582a96fdcd3f8506ee999c70a235581018728690fd9",
      image: "https://pbs.twimg.com/profile_images/1477061966317461504/WUzVJE-U_400x400.jpg",
    },
    {
      id: 4,
      name: "@Sludgelife",
      bgImage: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149612188.jpg?w=740&t=st=1695343190~exp=1695343790~hmac=1e323bcb610e32c829d3c72bbc4c48b3a5616407c40f611c4d4e38d00964bc8f",
      image: "https://pbs.twimg.com/profile_images/1296154719598059520/gwe7QXjM_400x400.jpg",
    },
    {
      id: 5,
      name: "@PEPE",
      bgImage: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?w=740&t=st=1695343143~exp=1695343743~hmac=1dd1309ae7e1d510b4852582a96fdcd3f8506ee999c70a235581018728690fd9",
      image: "https://pbs.twimg.com/profile_images/1477061966317461504/WUzVJE-U_400x400.jpg",
    },
    {
      id: 6,
      name: "@Sludgelife",
      bgImage: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149612188.jpg?w=740&t=st=1695343190~exp=1695343790~hmac=1e323bcb610e32c829d3c72bbc4c48b3a5616407c40f611c4d4e38d00964bc8f",
      image: "https://pbs.twimg.com/profile_images/1296154719598059520/gwe7QXjM_400x400.jpg",
    },
  ];

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1700, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-4/5 py-10 mx-auto'>
      <h4 className="text-white text-3xl font-bold uppercase text-gradient">Top Artist</h4>
      <Slider {...settings}>
        {artists.map((artist) => (
          <div key={artist.id} className="w-full px-2"> 
            <div className="w-full shadow-sm shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
              <div className="w-full relative">
                <img
                  src={artist.bgImage}
                  alt={artist.name}
                  className="w-full rounded-2xl h-[225px]"
                />
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="absolute -bottom-[40px] left-0 right-0 mx-auto h-[104px] w-[104px] bg-[#272D37] rounded-full"
                />
              </div>
              <div className="w-full text-center mt-10 text-white uppercase ">
                <h3 className='font-bold'>{artist.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center my-5">
        <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] rounded-full px-1.5 py-1'>View More</button>
      </div>
    </div>
  );
};

export default Creators;
