import React from "react";
import "./index.css";
import img from "../../assets/coffe1.jpg";
import { LocationOn, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function ShopCard(props) {
  const { each } = props;
  const navigate = useNavigate();
  const url = process.env.REACT_APP_DOMAIN;
  return (
    <div
      className="card_container"
      onClick={() => navigate(`/product/${each?._id}`)}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="card_image_container">
        <img className="card_img" src={url + "/" + each?.shop_logo} />
      </div>
      <div className="card_datails">
        <div className="card_name">
          <h1>{each?.shop_name}</h1>
        </div>
        <div className="card_ratings">
          <h1>
            {" "}
            <Star /> {each?.ratings}
          </h1>
          <h1>1400 reviews</h1>
        </div>
        <div className="card_desc">
          <h1>{each?.address} </h1>
          <LocationOn />
        </div>
      </div>
    </div>
  );
}
