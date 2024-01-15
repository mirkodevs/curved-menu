import React, { useEffect, useState, useContext, useRef } from 'react'
import { MainHeader } from './components/MainHeader'
import { Meals } from './components/Meals'
import { useAvailableMeals } from './Contexts'
import Modal from './components/Modal'

import MyProvider from './Contexts'
function App() {

  const modal = useRef()
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [isCheckout,setIsCheckout] = useState(false);

  function openCart() {
  
  modal.current.open();
  setIsCartOpen(true)

  }
function checkout() {
  modal.current.close()
  setIsCartOpen(false)
  setIsCheckout(true)
  modal.current.open()
}
  return (
    <MyProvider>
      <MainHeader handleOpen={(openCart)} />
      {

        <Meals  />

      }
      <Modal ref={modal} isCheckout = {isCheckout} isCartOpen = {isCartOpen} goCheckout = {checkout}>

      </Modal>
    </MyProvider>
  )
}

export default App
