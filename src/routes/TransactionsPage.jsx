import React from 'react'
import Navbar from '../components/Navbar'
import Artworks from '../components/Artworks'
import Creators from '../components/Creators'
import Transactions from '../components/Transactions'
import Footer from '../components/Footer'

const TransactionsPage = () => {
    return (
        <>
           <Navbar />
           <Transactions />
           <Footer />  
        </>
    )
}

export default TransactionsPage
