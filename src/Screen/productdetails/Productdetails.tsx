import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Productdetails.css";
// import banner from"../../asset/images/Banner1.jpg";

function Productdetails() {
    const { id } = useParams();
    const [product,setProducts] = useState<any>();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => {
        console.log(res);
        setProducts(res);
    });
},[]);

    return (
        <section className="product-details-sec">
        {product && (
            <div className="product-details grid-container">
            <img className="grid-items box1 " src ={ product.images[0]} alt=""></img>
            <h3 className="grid-items-box2 " > {product?.title}</h3>
            <p className="grid-items-box3 " > {product.price} </p>
            <p className="grid-items-box4 " > {product.description}</p>
            </div>
        )}
        </section>
    );
}
export default Productdetails;