import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './compopnents/Navigation';
import Home from './compopnents/Home';
import Cart from './compopnents/Cart';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  // active class for child 1 and child 2
  const [activeChild, setActiveChild] = useState('child1') ;
  const returning_child = (element) =>{
    setActiveChild(element);
  }

  // FETCHING APIS 
  //                  API 1 :  MENU :
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Menu")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenu(data);
      })
      .catch((err) => {
        console.log("network error:", err);
      });
  }, []);
  //                 API 2 : FOOD ITEMS :
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/food")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFood(data);
      })
      .catch((err) => {
        console.log("network error:", err);
      });
  }, []);

  // CREATING EMPTY ARRAY FOR CART ITEMS : 
  const [cart,setCart] = useState([]) ;
  
  // ADDING AND REMOVING ELEMENT : 
    const AddToCart = (item) => {
      setCart(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
        if (existingItem) {
          return prevCart.map(cartItem =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });
    };

    const DecrementFromCart = (itemId) => {
      setCart(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem._id === itemId);
        if (existingItem) {
          if (existingItem.quantity > 1) {
            return prevCart.map(cartItem =>
              cartItem._id === itemId
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            );
          } else {
            return prevCart.filter(cartItem => cartItem._id !== itemId);
          }
        }
        return prevCart; // Return the unchanged cart if item does not exist
      });
    };

    const RemoveFromCart = (itemId) => {
      setCart(prevCart => prevCart.filter(cartItem => cartItem._id !== itemId));
    };
    
  return (
    <>  
      <Navigation active_class={returning_child}/>
      <Routes> 
        {activeChild === 'child1' ? (
          // by default we will get our home page  
          <Route path='/' element={<Home 
                                      menu = {menu}
                                      food = {food} 
                                      cart = {cart}
                                      
                                      // adding and decrementing commands
                                      AddToCart = {AddToCart} 
                                      DecrementFromCart = {DecrementFromCart}
                                  />} 
          /> 
        ):(
          <Route path='/cart' element={<Cart
                                      cart={cart} 
                                      // i just want to show the selected items in cart 
                                      AddToCart = {AddToCart}
                                      DecrementFromCart = {DecrementFromCart}
                                      RemoveFromCart = {RemoveFromCart}
                                    />}
          />
        )}
      </Routes>


    </>
  );
}

export default App;





























// FOR DISPLAYING RECEIVED ARRAY IN HTML : 
/* <div>
  <h2>Items received in Parent:</h2>
  <pre>{JSON.stringify(x, null, 2)}</pre>
</div> */




// HOW TO PASS DATA OR ARRAY OF OBJECTS FROM CHILD TO PARENT : 

//          PARENT COMPONENT :
              // <javascript>
              //   const[variable, SET_VARIABLES] = useState([]) ;

              //   const RECEIVING_FUNCTION = (elements) =>{
              //     SET_VARIABLES(elements) ;
              //   }
              // </javascript>

              // <html>
              //   <CHILD xyz={RECEIVING_FUNCTION}/> -----------------------(3)
              // </html>

//           CHILD COMPONENT : 
                // <javascript>
                // import React from 'react'
                // const CHILD = ( {xyz} ) => {------------------------------(2)

                //   xyz(updated_values) ------------------------------------(1) ;

                // </javascript>

                // <html>
                //     return (
                //       <div> HTML CODE </div>
                //     )
                //   }
                //   export default App
                // </html>  
                

// EXPLANATION : 
// IN CHILD COMPONENT :  when every time xyz function is called inside the child components it returns some updated arguments i.e xyz(updated_arguments) ------(1),(2)
//                      & then the returned updated_arguments are received by RECEIVING_FUNCTION (3)
// IN PARENT COMPONENT : when the child component is called like <CHILD> , in case of data transfer from child to parent = > 
//                       we write it like this <CHILD xyz={RECEIVING_FUNCTION}> -----------------(4)

//                       and then in the javascript code of parent : 
//                       const[variabe,setVariable] = useState([]) ; ------------------(6) ATH THIS PART WE ARE SAVING THE DATA RECEIVED THROUGH USESTATE 

//                       const RECEIVING_FUNCTION = /"ARROW FUNCTION i.e"/ (element) => { // ignore /this part/ -----------------(5)
//                         setVariable(element) ;
//                       }              