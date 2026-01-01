import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
// import { ProductDetails } from "./pages/ProductDetails"
// import { ShopContextProvider } from "./context/ShopContext"

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}
export default App