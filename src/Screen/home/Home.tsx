import {useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import Banner1 from "../../asset/images/Banner1.jpg"
import Banner2 from "../../asset/images/Banner2.jpg"
import ProductCard from "../../Common/productCard/productCard";
import  Spinner  from 'react-bootstrap/Spinner';
//import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { homeSlice } from '../../redux/homeslice/homeSlice';
import { cartSlice } from '../../redux/cartslice/cartSlice';
import { ValidateDuplicateCartItems } from '../utils.ts/utils';

function Home(){
 // const data: any =useContext(Context);
  //console.log(data);
  //const[loading, setLoading]=useState<boolean>(true);
  const[products,setProducts]=useState([]);
  const dispatch = useDispatch();
  const redux: any = useSelector((state) => state);
  console.log("redux" , redux);

  useEffect(() =>{
    getProducts();
  },[]);

  function getProducts() {
    fetch("https://dummyjson.com/products?limit=40")
    .then((res) => res.json())
    .then((res) => {
      setProducts(res.products);
      dispatch(homeSlice.actions.setLoading(false));
    });
  }

  return(
      <main>
        {
        /* {/* <div>{data.homeScreen.name}</div>
        <button onClick={() =>data.homeScreen.setHomeValue({ name:"hello"})}>
          update }
        </button> */
        }
    <section className="home-Banner">
        <Carousel fade>
      <Carousel.Item interval={1000}>
        <img className="banner-images" src={Banner1} alt="banner"></img>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="banner-images" src={Banner2} alt="banner"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="banner-images" src={Banner1} alt="banner"></img>
      </Carousel.Item>
    </Carousel>
    </section>
    <section className="product-section">
     { redux.home.loading ? (
      <Spinner animation="border" role="status">
        <span className="visually-hidden"> Loading....</span>
      </Spinner>
     ) : (
      <div className="product-listing">
        {products.map((items:any ,index:number) => {
          return (
            <ProductCard
             key={index} 
             productInfo={items} 
             onClick={(data:any)=>{
              let validate = ValidateDuplicateCartItems(
                redux.cart.cartItems,
                data
              );
              console.log(redux.cart.cartItems,validate);
              if(!validate){
                let cartItem:any =[...redux.cart.cartItems,data];
                dispatch(cartSlice.actions.setCart(cartItem));
              }
              else {
                alert("Items already available");
              }
             }}></ProductCard>
          );
        })}
      </div>
     )} 
    </section>
             </main>
);
}
export default Home;