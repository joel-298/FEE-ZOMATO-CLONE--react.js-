import React from 'react'
import './Cart.css'
import Footer from './Footer';

const Cart = ({cart, AddToCart, DecrementFromCart , RemoveFromCart }) => {
  
  // Calculate subtotal by summing the price * quantity of each item in the cart
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const fee = 2; // Delivery fee
  const total = subtotal + fee; // Total amount including delivery fee

  return (
    <>
    <div className='add-to-cart'>

      <div className="items_selected">
        <div className="title">
          <h3>Item</h3>
          <h3>Title</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Increase</h3>
          <h3>Decrease</h3>
          <h3>Remove</h3>
        </div>
        <hr />
        {cart.map((element,i)=>(<div>
          <div key={i} className='items'>
            <img src={element.image} alt="" srcset="" />
            <h4>{element.name}</h4>
            <h4>${element.price}</h4>
            <h4 className='quant'>{element.quantity}</h4>
            <h2 className='increase' onClick={() => AddToCart(element)}>+</h2>
            <h2 className='decrease' onClick={() => DecrementFromCart(element._id)}>-</h2>
            <h4 className='remove' onClick={() => RemoveFromCart(element._id)}>Remove</h4> 
          </div>
          <hr />
          </div>
        ))}
      </div>
      <br />


      <div className="Final-amount">
        <div className='info'>
          <div className='amount'>
            <h1>CART TOTALS</h1>
            <div className='subtotal'>
              <h3>Subtotal</h3>
              <h3>${subtotal}</h3>
            </div>
            <div className='fee'>
              <h3>Delivery Fee</h3>
              <h3>${fee}</h3>
            </div>
            <div className='total'>
              <h3>Total</h3>
              <h3>${total}</h3>
            </div>
          </div>
        </div>
        <button className='pay'><h2>PROCEED TO PAY</h2></button>
      </div>
    </div>
    <Footer className="Contact-us" id="Contact-us"/>
    </>
  )
}

export default Cart


// {/* <h1>CART ITEMS </h1>
// {cart.map((element,i)=>(
//   <div key={i}>
//     <h2>{element.name}</h2>
//     <h3 onClick={() => AddToCart(element)}>+</h3>
//     <span>{element.quantity}</span>
//     <h3 onClick={() => DecrementFromCart(element._id)}>-</h3>
//     <h3 onClick={() => RemoveFromCart(element._id)}>Remove</h3> 
//   </div>
// ))} */}