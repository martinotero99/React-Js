import "./styles.css";
import {useState} from 'react' 

function ItemListContainer({ bienvenida }) {
    const[saludo,setSaludo] = useState(bienvenida);

    function cambiarSaludo () {
        setSaludo ("hello world")
    }

    return (
        <div className="item-list-container">
             <p>{saludo}</p>
             <button onClick={cambiarSaludo}>Press me</button>
         </div>
    );      
}

export default ItemListContainer;

