import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'


const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')


  const sendEmail = (e) => {
    e.preventDefault()

    if(name === '' || email === '' || msg === ''){
      alert("Preencha esses campos!")
      return
    }

    const templateParams = {
      from_name: name, 
      email: email,
      message: msg
    }

    emailjs.send("service_c9u2zxe", "template_3sgwdfn", templateParams, "Pgwe2R1LfWvBdHeNa")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName("")
      setEmail("")
      setMsg("")
    }, (error) => {
      console.log(error);
    })
    
  }


  return (
    <div className='contact'>
      <h2>Entre em contato por Whatsapp</h2>
      <a href="https://wa.me/5549991670736" target='_black'>
        <img src="../whatsapp-logo-png-0.png" alt="" />
      </a>
      <form className='container-form' onSubmit={sendEmail}>
        <h2>Entre em contato por E-mail</h2>
        <input type="text" placeholder='informe seu nome' onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder='informe seu email' onChange={(e) => setEmail(e.target.value)}/>
        <textarea placeholder='Digite sua mensagem' onChange={(e) => setMsg(e.target.value)}></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Contact