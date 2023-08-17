import React, {useState, useEffect } from "react"
import CardProduct from '../../components/CardProduct/CardProduct'
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./Category.css";

const Category = () => {
    const[Prods, setProds]= useState([]);

    let { tipo } = useParams;

    let filteredProducts = Prods.filter ((Prod) => {
        return Prod.species === tipo;
    })

    
    useEffect(() => {
        axios ("https://rickandmortyapi.com/api/character").then((jason) => 
            setProds(jason.data.results)
        );
      }, []);
    
  return (
    <div className="Cards-List">
        {filteredProducts.map((Prod) => {
            return(
            <div className="cardd" key={Prod.id}>
                <CardProduct data={Prod} />
            </div>
            );
        })}
    </div>
  );
};

export default Category