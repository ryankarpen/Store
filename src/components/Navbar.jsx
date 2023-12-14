import { Link } from 'react-router-dom'
import "./Navbar.css"
import React from 'react'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FiAlignJustify } from "react-icons/fi";


const Navbar = () => {


  const [product, setProduct] = useState("")
  const [openmenu, setOpenMenu] = useState(false)

  const handleProduct = (name) => {
    const productName = name.toUpperCase()

    setProduct(productName)
  }
  



  return (
    <div className="nav">
        <Link to="/">
          <img src="../public/icon.png" alt="" />
        </Link>
        <h1>Cycle Suplements</h1>
        <span>
          <input type="text" placeholder='Busque por produtos' onChange={(e) => handleProduct(e.target.value)}/>
          <Link to={`/product/${product}`}>
            <BiSearchAlt2 className='search-svg'/>
          </Link>
        </span>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
        <nav className="navbar-mobile">
          <FiAlignJustify onClick={() => setOpenMenu((prev) => !prev)}/>
          {openmenu && 
          <div className="menu">
          <Link to="/" onClick={() => setOpenMenu((prev) => !prev)}>Home</Link>
          <Link to="/products" onClick={() => setOpenMenu((prev) => !prev)}>Products</Link>
          <Link to="/contact" onClick={() => setOpenMenu((prev) => !prev)}>Contact</Link>
          <Link to="/about" onClick={() => setOpenMenu((prev) => !prev)}>About</Link>
        </div>}
        </nav>
    </div>
  ) 
}

export default Navbar