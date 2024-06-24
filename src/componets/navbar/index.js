import { LocalMall } from "@mui/icons-material";
import "./index.css";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import img from "../../assets/take-bit.svg";
import { postCartRequest } from "../../redux/Shop/ShopActions";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  let [item, setItem] = useState([]);
  const url = process.env.REACT_APP_DOMAIN;
  const stripe_key = process.env.STRIPE_KEY;
  const dispatch = useDispatch();
  useEffect(() => {
    let val = localStorage.getItem("cart");
    setItem(JSON.parse(val));
  }, []);
  const { postCartResponse } = useSelector((state) => state.Shops);
  const makepay = async () => {
    console.log(stripe_key);
    const stripe = await loadStripe(
      "pk_test_51PV0cSP9aqwFvfhKjyjOSpx6eSbBakGfKCK60fEeSaRiPgNilfwrwq6pA3JbfOPUIqmWOPYgGawPs3rYXcCxIApf00yn2C3xL3"
    );
    stripe.redirectToCheckout({
      sessionId: postCartResponse?.data?.data,
    });
  };
  useEffect(() => {
    makepay(postCartResponse);
  }, [postCartResponse]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    let val = JSON.parse(localStorage.getItem("cart"));
    setItem(val);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const CheckOut = async () => {
    if (item?.length < 0) return;
    dispatch(postCartRequest(item));
  };
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <img src={img} className="logo_shop" />
      </div>
      <div
        className="navbar_cart"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <LocalMall />
        <span>{item?.length}</span>
      </div>
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div className="product_cart_list">
          <div className="cart_product_list">
            {item?.length > 0 ? (
              item.map((each) => (
                <div className="cart_product">
                  <div className="cart_product_img">
                    <img src={url + "/" + each?.product_logo}></img>
                  </div>
                  <div className="product_price">
                    <h1 className="product_name">{each?.product_name} </h1>
                    <h1 className="product_name">₹{each?.product_price}X 1</h1>
                  </div>
                </div>
              ))
            ) : (
              <h2>No Products In Cart</h2>
            )}
          </div>
          <button onClick={() => CheckOut()} className="checkout_button">
            checkout
          </button>
        </div>
      </Menu>
    </div>
  );
}
