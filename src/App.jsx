import "./App.css"
//COMPONENTS
import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";

// PAGES

import { CartProvider } from "./context/CartContext";


function App() {
 
  return (
    
      <div className="App">
        <BrowserRouter>
        <CartProvider>
        <Navbar/>
        <Banner/>   
        <Routes>
          <Route path="/" element={<ItemListContainer greetig={"Todos Nuestros productos"} />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greetig={"Productos por categoria"} />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/chekout" element={<checkout />}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/> 
        </Routes>
        </CartProvider>
        </BrowserRouter>
      </div>
    
  )
}

export default App
