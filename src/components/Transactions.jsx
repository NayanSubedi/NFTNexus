import React, { useState } from 'react';
import { BiTransfer } from 'react-icons/bi';
import { MdOpenInNew } from 'react-icons/md';
import './Glow.css';

const Transactions = () => {
  const [showChart, setShowChart] = useState(false);

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const cryptoData = [ 
    { name: 'Bitcoin (BTC)', price: '$26,309.11', change: '-1.92%' },
    { name: 'Ethereum (ETH)', price: '$1,591.52', change: '-2.72%' },
    { name: 'Chainlink (Link)', price: '$7.47', change: '+9.62%' },
    { name: 'Ripple (XRP)', price: '$0.5027', change: '-1.54%' },
    { name: 'Fantom (FTM)', price: '$0.1903', change: '+1.32%' },
    { name: 'Solana (Sol)', price: '$19.33', change: '-1.76%' },
    { name: 'Tron (TRN)', price: '$0.08463', change: '+0.20%' },
  ];

  const addresses = [
    '0x26...068d',
    '0x12...a8f4',
    '0x74...1b9e',
    '0x98...6f2d',
    '0x54...3e1a',
    '0x71...5c8b',
  ];

  const ethAmounts = [
    '56 ETH',
    '75 ETH', 
    '42 ETH', 
    '69 ETH',
    '17 ETH', 
    '5 ETH'
    ];

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
        {showChart && <CryptoPriceTable cryptoData={cryptoData} />}
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

const CryptoPriceTable = ({ cryptoData }) => {
  return (
    <div className="mt-5">
      <h4 className="text-white text-3xl font-bold uppercase text-gradient">
        Current Price
      </h4>
      <div className="overflow-x-auto py-8">
        <table className="min-w-full border gradient-bg-hero border-violet-800  glow">
          <thead>
            <tr className='border-violet-800'>
              <th className="px-4 py-2  bg-gray-800 text-gray-300">Crypto Name</th>
              <th className="px-4 py-2 bg-gray-800 text-gray-300">Price (USD)</th>
              <th className="px-4 py-2 bg-gray-800 text-gray-300">Price Change</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto, index) => (
              <tr
                key={index}
                style={{ borderBottom: '1px solid #e2e8f0' }} 
              >
                <td className="px-4 text-white font-semibold text-center py-2">{crypto.name}</td>
                <td className="px-4 text-white text-center font-semibold py-2">{crypto.price}</td>
                <td
                  className={`px-4 py-2 text-center ${
                    crypto.change.includes('+') ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {crypto.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
