import { Route, Routes } from "react-router-dom"
import BtmHeader from "./components/Header/BtmHeader"
import TopHeader from "./components/Header/TopHeader"
import Home from "./page/home/Home"
import ProductDetails from "./page/ProductDetails"


function App() {

  return (
    <>
      <header>
        <BtmHeader></BtmHeader>
        <TopHeader></TopHeader>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>


    </>
  )
}

export default App
