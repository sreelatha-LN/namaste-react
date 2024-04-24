import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = (item) => {
    dispatch(clearCart(item));
  };

  return (
    <div className="text-center m-6 p-6">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto border-spacing-1">
      {cartItem.length>0 &&  <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={() => handleClearCart(cartItem)}
        >
          clearCart
        </button>
}
        {cartItem.length===0 && <div className="font-bold"> please add cart items</div>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
