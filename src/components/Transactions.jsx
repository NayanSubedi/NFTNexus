import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'
const Transactions = () => {
  return (
    
        <div className='bg-[#24034b]'>
        <div className="w-4/5 py-36 mx-auto">
            <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Transactions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gaps-4 lg:gaps-2 py-2.5">
          {Array(9)
            .fill()
            .map((nft, i) => (
            //   <Card key={i} nft={i + 1} />
            <Transaction key={i} tx={i + 1} />
            ))}
        </div>
        <div className="text-center my-5">
        <button className='shadow-lg shadow-black text-sm bg-[#1526bd] hover:bg-[#b45609] text-white rounded-full px-1.5 py-1'>View More</button>
        </div>
        </div>
        </div>

  )
}
const Transaction = ({ tx }) => (
    <div className="flex justify-between items-center border border-violet-800 text-gray-400 w-full shadow-xl shadow-black rounded-md  overflow-hidden bg-gray-800 my-2 p-3">
        <div className='rounded-md shadow-sm shadow-violet-500 p-2 '>
            <BiTransfer />
        </div>
        <div>
            <h4 className='text-sm'> #{tx} Fund Transfered</h4>
            <small className='flex justify-start items-center'>
                <span className='mr-1'>Recieved by</span>
                <a className='text-violet-500 mr-2' href='#' target='_blank'>0x26...068d</a>
                <MdOpenInNew />
            </small>
        </div>
        <p className='text-sm font-medium '>0.56 ETH</p>
    </div>
)

export default Transactions