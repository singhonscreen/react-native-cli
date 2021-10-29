import React, { Component, useState } from 'react';
import Login from "./assets/components/Login";
import ShoppingCart from './assets/components/ShopingCart'






const App = () =>{

  const [state,setState] = useState(true)

  const ToggleScreen = ()=>{
    setState(!state)
  }
  

  return (
    
    <>
    {
      (state) ? <Login ToggleScreen={ToggleScreen}/> : <ShoppingCart ToggleScreen={ToggleScreen} />
    }
    
    </>
    
    
    );
  } 



export default App;