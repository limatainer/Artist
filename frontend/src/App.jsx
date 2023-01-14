import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import Profile from "./components/Profile"

function App() {

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Presentation />
      <Gallery />

      <Footer />
    </div>
  )
}

export default App
