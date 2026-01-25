import { Route, Routes } from "react-router-dom"
import BtmHeader from "./components/Header/BtmHeader"
import TopHeader from "./components/Header/TopHeader"
import Home from "./page/home/Home"
import ProductDetails from "./page/ProductDetails"
import Cart from "./page/cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./ScrollToTop"


function App() {

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <header>
        <BtmHeader></BtmHeader>
        <TopHeader></TopHeader>
      </header>
      <Toaster position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#333',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            padding: '15px',
            fontSize: '14px',
          }
        }}

      >

      </Toaster>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>


    </>
  )
}

export default App
