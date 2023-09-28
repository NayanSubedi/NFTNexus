import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiTransfer } from 'react-icons/bi';
import { MdOpenInNew } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Glow.css';

const Transactions = () => {
  const [showChart, setShowChart] = useState(false);
  const [cryptoData, setCryptoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,binancecoin,hedera-hashgraph,terra-luna-2,the-open-network,internet-computer,tether,the-sandbox,tezos, pepe,chiliz,stellar,shiba-inu,avalanche-2,BNB,1inch,ethereum,chainlink,ripple,fantom,solana,tron,litecoin,dogecoin,aave,algorand,cosmos,cardano,filecoin,polkadot,uniswap,hedera,okb',
          },
        }
      );

      setCryptoData(response.data);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  };

  useEffect(() => {
    fetchCryptoData();

    const intervalId = setInterval(() => {
      fetchCryptoData();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const addresses = [
    '0x26...068d',
    '0x12...a8f4',
    '0x74...1b9e',
    '0x98...6f2d',
    '0x54...3e1a',
    '0x71...5c8b',
  ];

  const ethAmounts = ['56 ETH', '75 ETH', '42 ETH', '69 ETH', '17 ETH', '5 ETH'];

  const totalPages = Math.ceil(cryptoData.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const visibleCryptoData = cryptoData.slice(startIndex, endIndex);

  return (
    <div className='bg-[#24034b]'>
      <div className="w-4/5 mx-auto py-24">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Transactions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gaps-4 lg:gaps-2 py-2.5">
          {Array(6)
            .fill()
            .map((nft, i) => (
              <Transaction key={i} tx={i + 1} address={addresses[i]} ethAmount={ethAmounts[i]} />
            ))}
        </div>
        <div className="text-center my-5">
          <button
            className='shadow-lg shadow-black font-bold text-sm bg-[#1526bd] hover:bg-[#b45609] text-white rounded-full px-1.5 py-1'
            onClick={toggleChart}
          >
            {showChart ? 'View Less' : 'View More'}
          </button>
        </div>
        {showChart && (
          <CryptoPriceTable
            cryptoData={cryptoData}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        )}
      </div>
    </div>
  );
};

const Transaction = ({ tx, address, ethAmount }) => (
  <div className="flex justify-between glow1 items-center border border-violet-800 text-gray-400 w-full shadow-xl shadow-black rounded-md  overflow-hidden bg-gray-800 my-2 p-3">
    <div className='rounded-md shadow-sm shadow-violet-500 p-2 '>
      <BiTransfer />
    </div>
    <div>
      <h4 className='text-sm'> #{tx} Fund Transferred</h4>
      <small className='flex justify-start items-center'>
        <span className='mr-1'>Received by</span>
        <a className='text-violet-500 mr-2' href={`#${address}`} target='_blank'>{address}</a>
        <MdOpenInNew />
      </small>
    </div>
    <p className='text-sm font-medium '>{ethAmount}</p>
  </div>
);

const CryptoPriceTable = ({
  cryptoData,
  currentPage,
  rowsPerPage,
  setCurrentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
}) => {
  const [cryptoLogos, setCryptoLogos] = useState({});

  useEffect(() => {
    const fetchCryptoLogos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,binancecoin,stellar,terra-luna-2,hedera-hashgraph,the-open-network,tether,internet-computer,tezos,pepe, the-sandbox,chiliz,shiba-inu,avalanche-2,BNB,1inch,ethereum,chainlink,ripple,fantom,solana,tron,litecoin,dogecoin,aave,algorand,cosmos,cardano,filecoin,polkadot,uniswap,hedera,okb',
            },
          }
        );

        const logos = {};
        response.data.forEach((crypto) => {
          logos[crypto.id] = crypto.image;
        });

        setCryptoLogos(logos);
      } catch (error) {
        console.error('Error fetching crypto logos:', error);
      }
    };

    fetchCryptoLogos();
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const visibleCryptoData = cryptoData.slice(startIndex, endIndex);

  return (
    <div className="mt-5">
      <h4 className="text-white text-3xl font-bold uppercase text-gradient">
        Current Price
      </h4>
      <div className="overflow-x-auto py-8">
        <table className="min-w-full border gradient-bg-hero border-violet-800  glow">
          <thead>
            <tr className='border-violet-800'>
              <th className="px-4 py-2  bg-gray-800 text-gray-300"></th>
              <th className="px-4 py-2  bg-gray-800 text-gray-300">Crypto Name</th>
              <th className="px-4 py-2 bg-gray-800 text-gray-300">Price (USD)</th>
              <th className="px-4 py-2 bg-gray-800 text-gray-300">Price Change</th>
            </tr>
          </thead>
          <tbody>
            {visibleCryptoData.map((crypto, index) => (
              <tr
                key={index}
                style={{ borderBottom: '1px solid #e2e8f0' }}
              >
                <td className="px-4 py-2 text-center">
                  {cryptoLogos[crypto.id] && (
                    <img
                      src={cryptoLogos[crypto.id]}
                      alt={`${crypto.name} Logo`}
                      className="w-8 h-8"
                    />
                  )}
                </td>
                <td className="px-4 text-white font-semibold text-center py-2">
                  {crypto.name}</td>
                <td className="px-4 text-white text-center font-semibold py-2">${crypto.current_price.toFixed(7)}</td>
                <td
                  className={`px-4 py-2 text-center ${
                    crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {crypto.price_change_percentage_24h.toFixed(4)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center my-5">
          <button
            className='shadow-lg shadow-black font-bold text-3xl text-[#1526bd] hover:text-[#b45609] text-white rounded-full px-1.5 py-1'
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`${
                i + 1 === currentPage
                  ? ' text-white'
                  : ' text-gray-300 hover:bg-[#1526bd] hover:text-white'
              }  font-light text-2xl px-2 rounded-xl mx-1`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className='shadow-lg shadow-black font-bold text-3xl text-[#1526bd] hover:text-[#b45609] text-white rounded-full px-1.5 py-1'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
