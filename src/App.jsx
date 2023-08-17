import "./App.css"
//COMPONENTS
import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Detail from "./pages/detail/detail";
import Category from "./pages/category/Category";

function App() {
 
  return (
    <Router>
      <main className="main">
        <Navbar/>
        <Banner/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/category/:tipo" element={<Category />}/>
          <Route path="*" element={<Error />}/>

          
        </Routes>
      </main>
    </Router>
  )
}

export default App
