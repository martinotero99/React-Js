import React, {useState, useEffect} from "react";
import axios from "axios";
import "./ListProducts.css";
import { Link } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";

const ListProducts = () => {
  const[Prods, setProds]= useState([]);
    
  useEffect(() => {
    axios ("https://rickandmortyapi.com/api/character").then((jason) => 
        setProds(jason.data.results)
    );
  }, []);
  
  
    return  <div className="Cards-List">
            {Prods.map((Prods) => {
                return (
                    <div key={Prods.id}>
                        <Link to={`/Detail/${Prods.id}`}>
                            <CardProduct data={Prods}/>
                        </Link>
                    </div>
                )
            })}
        </div>
  
}

export default ListProducts