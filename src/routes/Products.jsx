import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './Products.css'
import { Link } from 'react-router-dom'


const url = "http://localhost:3000/products"

const Products = () => {
 
    const {data: items} = useFetch(url)
  

  return (
    <div className="container">
        <ul className="products">
        {items && items.map((item) => (
            <li className="product">
                <h2>{item.name}</h2>
                <p>R${item.price},00</p>
                <img src={item.image} alt={`imagem ${item.id}`} />
                <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
        ))}
        </ul>
        <div className="filter">
        </div>
    </div>
  )
}

export default Products