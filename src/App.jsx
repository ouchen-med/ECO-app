import BtmHeader from "./components/Header/BtmHeader"
import TopHeader from "./components/Header/TopHeader"
import Home from "./page/home/Home"


function App() {

  return (
    <>
      <header>
        <TopHeader></TopHeader>
        <BtmHeader></BtmHeader>
      </header>
      <Home></Home>

    </>
  )
}

export default App
