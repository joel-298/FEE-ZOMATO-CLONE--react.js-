import React, { useState } from 'react';
import './Home.css';
import Footer from './Footer';
import Menu from './Menu';
import foodies from '../assets/foodies.mp4'

function Home({menu,food,cart,AddToCart,DecrementFromCart}) {


  return (
    <> 
      <div className='video'>
        <video src={foodies} autoPlay loop muted/>
      </div>
      <Menu className="Menu" id="Menu" 
        menu = {menu}
        food = {food} 
        cart = {cart} 
        // adding and decrementing commands
        AddToCart = {AddToCart} 
        DecrementFromCart = {DecrementFromCart}
      />
      <Footer className="Contact-us" id="Contact-us"/>      
    </>
  );
}

export default Home;
































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
