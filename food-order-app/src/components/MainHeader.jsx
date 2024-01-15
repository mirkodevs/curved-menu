import React, { useContext } from 'react'
import Logo from '../assets/logo.jpg'
import { useCart} from '../Contexts'
import MyProvider from '../Contexts'
export const MainHeader = ({handleOpen}) => {
const cart = useCart()

  return (
    <header id="main-header">
      <div id="title">
        <img src = {Logo}></img>
        <h1>REACTFOOD</h1>
      </div>
    
      <button className='text-button' onClick={handleOpen}>Cart({cart.orders.length})</button>
     
    </header>
  )
}
