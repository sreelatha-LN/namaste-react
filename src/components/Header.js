import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const btnName = "login";

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  const { loggedInUser } = useContext(UserContext);

  const [btnInitialState, setBtnInitialState] = useState(btnName);
  useEffect(() => {
    console.log("useeffect called ");
  }, []);

  return (
    <div className="flex justify-between p-4 bg-pink-50">
      <div className="w-56">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">onlineStatus : {onlineStatus ? "📗" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <button
            className="login-button"
            onClick={() =>
              btnInitialState === "login"
                ? setBtnInitialState("logout")
                : setBtnInitialState("login")
            }
          >
            {loggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
