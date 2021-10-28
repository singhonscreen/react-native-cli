import React, { Component, useState } from 'react';
import Login from "./assets/components/Login";
import ShoppingCart from './assets/components/ShopingCart'






const App = () =>{

  const [state,setState] = useState(true)

  const ToggleScreen = ()=>{
    setState(false)
  }
  const goBack = ()=>{
    setState(true)
  }

  return (
    
    <>
    {
      (state) ? <Login ToggleScreen={ToggleScreen}/> : <ShoppingCart goBack={goBack} />
    }
    
    </>
    
    
    );
  } 



export default App;