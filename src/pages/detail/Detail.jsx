import React, {useState, useEffect } from "react"
import CardProduct from '../../components/CardProduct/CardProduct'
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
    const[Prod, setProd]= useState([]);

    console.log(Prod);
    
    let { id } = useParams();

        useEffect(() => {
            axios (`https://rickandmortyapi.com/api/character/${id}`).then((jason) => 
                setProd(jason.data)
            );
        }, [id]);

    return  (
    <div className="card-detail">
        {Prod.id ? <CardProduct data={Prod} /> : null}
    </div>
    
    ) 
}

export default Detail