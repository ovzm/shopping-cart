import React from 'react'
import { BsCart3 } from "react-icons/bs";
import './CartButton.css'

function CartButton() {
  return (
    <button className="cart__button">
        <BsCart3/>
        <span className="cart__status">1</span>
    </button>
  )
}

export default CartButton