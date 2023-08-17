import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();

    useEffect(() =>{
        setTimeout(() => {
            navigate("/");
        }, 5000)
    })
    
  return (
    <div>
        <h1>Error 404</h1>
        <p>Usted sera redirigido al Home en 5 segundos....</p>
    </div>
  )
}

export default Error