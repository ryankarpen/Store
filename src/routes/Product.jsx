import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Product.css'
import Table from '../components/Table'
import ButtonComprar from '../components/ButtonComprar'


const Product = () => {

    const {id} = useParams()

    const url =  "http://localhost:3000/products/" + id

    const {data: product} = useFetch(url)

    if(!product) return <p>Carregando...</p>


  return (
    <div className='product-container'> 
        <div className="product-details">
          <img src={product.image} alt="" />
          <div className="product-description">
            <h2>{product.name}</h2>
            <h3>R${product.price},00</h3>
            <p>{product.description}</p>
            <ButtonComprar/>
          </div>
        </div>
        <div className="nutritional-table">
          <Table props={product}/>
        </div>
    </div>
  )
}

export default Product