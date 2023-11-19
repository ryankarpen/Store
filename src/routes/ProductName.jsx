import React from 'react'
import './ProductName.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './ProductName.css'
import { Link } from 'react-router-dom'

const ProductName = () => {

  const {name} = useParams()

  const url = "http://localhost:3000/products"

  const {data: products} = useFetch(url)

  if (!products) return <p>Carregando...</p>


  return (
    <div className='search-container'>
      {products.map((product) => (
        product.name === name ? 
        <div className="search-details" key={product.id}>
          <img src={product.image} alt="" />
          <div className="search-description">
            <h3>{product.name}</h3>
            <h2>R${product.price},00</h2>
            <p>{product.description}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>
          </div>
        </div>
        : ""
      ))}
    </div>
  )
}

export default ProductName