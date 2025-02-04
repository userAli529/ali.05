import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import Oder from './oder'

export default function Header(props) {
  let summa = 0;
  props.osders.forEach(el => {
    summa += Number.parseFloat(el.price)
  })
  let [cartOpen, setCartOpen] = useState(false);
  return (
   <header>
   <div>    
    <a href="/"> <span className='logo'>Net-Store </span></a>
    <ul className='nav'>
    <li><Link to="/about">Про нас</Link></li>
      <li><Link to="/cot">Контакты</Link></li>


     
    
    </ul>
    <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && "active"}`}/>
      {cartOpen && (
        <div className='shop-cart'>
          <div style={{ textAlign: 'right', padding: '5px' }}>
            <span 
              style={{ 
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
              onClick={() => setCartOpen(false)}
            >
              ×
            </span>
          </div>
          {props.osders.map(el => (
            <Oder key={el.id} item={el} onDelete={props.onDelete} />
          ))}
          <p className='total-price'>
            {summa}сом {props.osders.length} товаров
            {new Intl.NumberFormat().format}
            <a href="https://wa.me/996507666438">
              <button className='order-button'>Оформить заказ</button>
            

            </a>
            <input type="text" placeholder='имя' />
            <input type="text" placeholder='Адрес' />
          </p>


        </div>

      )}
   </div>
   <div className='presentation'></div>
   </header>
  )
}
