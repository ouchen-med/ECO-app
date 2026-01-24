import BtmHeader from "./components/Header/BtmHeader"
import TopHeader from "./components/Header/TopHeader"
import Home from "./page/home/Home"


function App() {

  return (
    <>
      <header>
        <BtmHeader></BtmHeader>
        <TopHeader></TopHeader>
      </header>
      <Home></Home>

    </>
  )
}

export default App
