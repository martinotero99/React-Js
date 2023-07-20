import "./App.css"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
 
  return (
    <main className="main">
      <Navbar/>
      <ItemListContainer bienvenida="hola mundo" />
    </main>
  )
}

export default App
