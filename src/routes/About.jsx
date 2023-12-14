import React from 'react'
import './About.css'
import { FaRegHandPointRight } from "react-icons/fa6"

const About = () => {
  return (
    <div className='container-about'>
      <h1>Sobre a marca</h1>
      <p>
        <FaRegHandPointRight/>
        Somos uma empresa especializada em revenda de produtos voltados ao meio fitness.
      </p>
      <p>
        <FaRegHandPointRight/>
        Asseguramos 100% a qualidade de nossos serviços e produtos oferecidos
      </p>
      <p>
        <FaRegHandPointRight/>
        Ingressamos no mercado em Dezembro de 2023
      </p>
    </div>
  )
}

export default About