import React from "react";
import "./Header.css";
import { Link } from 'react-router'; 
import { useSelector } from "react-redux";
// import { cartSlice } from "../../redux/cartslice/cartSlice";

function Header() 
{
    const state:any = useSelector((state) => state);

    return (
        <header className="header-container">
            <section className="header-logo"></section>
            <section className="header-nav">
                <nav className="nav-links">
                    <div>
                        <Link className="nav-link" to="/myapp/">Home</Link>
                    </div>
                    <div>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                    <div>
                        <a className="nav-link" href="/contact">
                            Contact
                        </a>
                    </div>
                        <div className="cart">
                        <Link className="nav-link" to="/cart">Cart</Link>
                        {state.cart.cartItems.length === 0 ? (
                            " "
                        ) : (
                            <div className="cart-items">{state.cart.cartItems.length }
                            </div>
                        )
                        }
                    </div>
                </nav>
            </section>
        </header>
    );
}

export default Header;
