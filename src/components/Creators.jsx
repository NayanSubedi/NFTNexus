import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Glow.css'



const Creators = () => {
  const artists = [

    {
      id: 1,
      name: "@BAYC",
      bgImage: "https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif",
      image: "https://ik.imagekit.io/bayc/assets/bayc-footer.png",
    },
    {
      id: 2,
      name: "@NFTPUNK",
      bgImage: "https://nftcalendar.io/storage/uploads/2022/03/17/hidden_031720220544446232cacc52f86.gif",
      image: "https://coincierge.de/wp-content/uploads/2022/04/CryptoPunks-NFT-logo.png",
    },
    {
      id: 3,
      name: "@PEPE",
      bgImage: "https://media.giphy.com/media/utJKJmadD3dZFJ01XR/giphy.gif",
      image: "https://pbs.twimg.com/profile_images/1477061966317461504/WUzVJE-U_400x400.jpg",
    },
    {
      id: 4,
      name: "@Sludgelife",
      bgImage: "https://steamuserimages-a.akamaihd.net/ugc/1797524205630547582/16D2B95919D3FEF40908F3BEF5BBFE0347B8060B/",
      image: "https://pbs.twimg.com/profile_images/1296154719598059520/gwe7QXjM_400x400.jpg",
    },
    {
      id: 5,
      name: "@GIGAMONKEY",
      bgImage: "https://media.giphy.com/media/EruZaPOld5NDhql2nX/giphy.gif",
      image: "https://pbs.twimg.com/profile_images/1626216945698881541/kF6xM_Cb_400x400.jpg",
    },
    {
      id: 6,
      name: "@KUNTLIFE",
      bgImage: "https://i.pinimg.com/originals/52/91/4b/52914b8ac2f16a11c42786c3d89a84f5.gif",
      image: "https://pbs.twimg.com/profile_images/1488798419858739210/xmQWeaC3_400x400.jpg",
    },
    {
      id: 7,
      name: "@FROMURANUS",
      bgImage: "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/alienrejects_pfp_1662870553748.gif",
      image: "https://pbs.twimg.com/profile_images/1488001159499497473/06gVKzN9_400x400.jpg",
    },
    {
      id: 8,
      name: "@RICKONROLL",
      bgImage: "https://66.media.tumblr.com/tumblr_m971zpBbAF1rbgzizo1_640.gifv",
      image: "https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2021/11/26160245/38B4C752-F5D4-40E9-B956-9DF25FBDDEDE.png",
    },
    {
      id: 9,
      name: "@SNOPPYDOGGIE",
      bgImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1643908114673/GoYEKcEhW.gif?auto=format,compress&gif-q=60&format=webm",
      image: "https://i.seadn.io/gae/PUj2kmAWCTVLWB2Vt4uacmHA7dxf-NqwMcxmDurbzPKweNWrEuATh_gyzRiM-wtokZOc0RUxXpOOD8SPDnZs8PSWlXNjHkxyUvCccA?auto=format&dpr=1&w=1000",
    },
   

   
  ];

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1200, 
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
    <div className=" bg-[#24034b]">
    <div className='w-4/5 py-28 mx-auto'>
      <h4 className="text-white text-3xl font-bold uppercase text-gradient">Top Artist</h4>
      <Slider {...settings}>
        {artists.map((artist) => (
          <div key={artist.id} className="w-full px-2 sm:w-3 md:w-6"> 
            <div className="w-full shadow-sm glow2 shadow-black rounded-2xl overflow-hidden bg-gray-800 my-2 p-3">
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
        <button className='shadow-lg shadow-black text-sm text-white font-bold bg-[#1526bd] hover:bg-[#b45609] rounded-full px-1.5 py-1'>View More</button>
      </div>
    </div>
    </div>
  );
};

export default Creators;
