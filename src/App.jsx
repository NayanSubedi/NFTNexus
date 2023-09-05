import Header from "./components/Header"
import Hero from "./components/Hero"
import Artworks from "./components/Artworks"
import Transactions from "./components/Transactions"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero"> 
      <Header />
      <Hero />
      </div>
      <Artworks />
      <Transactions />
    </div>
  )
}

export default App
