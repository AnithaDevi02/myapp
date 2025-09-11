import Button from "react-bootstrap/Button";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../redux/cartslice/cartSlice";

function Cart(){
    const cartInfo: any = useSelector((state) => state);
    const dispatch = useDispatch();

    function removeCartItem(params:any) {
        const filtered = cartInfo.cart.cartItems.filter(
            (item: any)=> item.id !== params.id
        );
        dispatch(cartSlice.actions.removeCart(filtered));
    }

    
    return(
        <section className="cart-screen-container">
            <div className="cart-items-container">
                {cartInfo.cart.cartItems.length > 0
                  ? cartInfo.cart.cartItems.map((item: any, index: any) => {
                return (
                    <div key={index} className="cart-card">
                        <img src={item.thumbnail} alt="card-item"></img>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                    </div>
                    <div>
                        <Button 
                        variant="primary"
                        onClick={() =>{
                            removeCartItem(item);
                        }}
                        >
                            Remove
                            </Button>
                    </div>
                    </div>
                );
                })
                :"No data found"}
            </div>
        </section>
    );

}

export default Cart;