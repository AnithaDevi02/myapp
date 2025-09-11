// import React,{ createContext, useState} from 'react';
import './App.css';
import { Route,Routes } from "react-router";
import Header from "./Common/header/Header";
import Home from "./Screen/home/Home";
import About from "./Screen/about/About";
import Cart from "./Screen/cart/Cart";
import Productdetails from "./Screen/productdetails/Productdetails";
import { Provider } from 'react-redux';
import {store} from "./redux/store";

// export const Context = createContext({});
function App() {
  // const [home,setHomeValue]=useState({name: "this is home "});
  // const [about]=useState({ name: " this is about"});
  return (
    <div>
      <Provider store={store}>
      {/* <Context.Provider
      value={{
        homeScreen:{
          ...home,
          setHomeValue,
        },
        about:about,
      }}
      > */}
            <Header></Header>
   <Routes>
   <Route path="/myapp" element={<Home></Home>}></Route>
   <Route path="/about" element={<About></About>}></Route>
   <Route path="/cart" element={<Cart></Cart>}></Route>
   <Route path="/product/:id" 
   element={<Productdetails></Productdetails>}></Route>
   </Routes>
         {/* </Context.Provider> */}
         </Provider>
   </div>
  );
  }
export default App;


