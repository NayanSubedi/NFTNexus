import Header from "./components/Header"
import Hero from "./components/Hero"
import Artworks from "./components/Artworks"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero"> 
      <Header />
      <Hero />
      </div>
      <Artworks />
    </div>
  )
}

export default App
