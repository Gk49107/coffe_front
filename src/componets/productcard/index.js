import "./index.css";

import React from "react";
import img from "../../assets/coffe1.jpg";
import { Add, Star } from "@mui/icons-material";

export default function ProductCard(props) {
  const url = process.env.REACT_APP_DOMAIN;

  const { each } = props;
  const addtocart = (e) => {
    let cart = [];
    let localitem = localStorage.getItem("cart");
    if (localitem) {
      let val = JSON.parse(localitem);
      cart = [...val, e];
    } else {
      cart.push(e);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div
      className="productcard_container"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="productcard_image_container">
        <img className="productcard_img" src={url + "/" + each?.product_logo} />
      </div>
      <div className="productcard_datails">
        <div className="productcard_name">
          <h1>{each?.product_name}</h1>
        </div>
        <div className="productcard_ratings">
          <h1>
            {" "}
            <Star /> {each?.ratings}
          </h1>
          <h1>1400 reviews</h1>
        </div>
        <div className="productcard_desc">
          <h1>Qty : {each?.qty}</h1>
          {/* <LocationOn /> */}
        </div>
        <div className="productcard_price">
          <h1>₹{each?.product_price} </h1>
          <Add onClick={() => addtocart(each)} />
        </div>
      </div>
    </div>
  );
}
