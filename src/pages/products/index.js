import { useDispatch, useSelector } from "react-redux";
import { getProductListRequest } from "../../redux/Products/ProductActions";
import "./index.css";
import {
  LocationOn,
  Star,
  Coffee,
  LunchDining,
  Fastfood,
  ArrowBack,
} from "@mui/icons-material";

import React, { useEffect, useState } from "react";
import img from "../../assets/coffe1.jpg";
import ProductCard from "../../componets/productcard";
import { useNavigate, useParams } from "react-router-dom";
import { getShopByIdRequest } from "../../redux/Shop/ShopActions";
export default function Products() {
  const [current, setCurrent] = useState("Coffee");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getProductLoading, getProductResponse } = useSelector(
    (state) => state.Product
  );
  const url = process.env.REACT_APP_DOMAIN;

  const { getShopLoading, getShopByidResponse, getShopResponse } = useSelector(
    (state) => state.Shops
  );
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    dispatch(getShopByIdRequest(id));
  }, [id]);
  console.log(getProductResponse);
  useEffect(() => {
    dispatch(getProductListRequest(id, current));
  }, [current]);
  return (
    <div className="products_page_container">
      <div className="shop_product_container">
        <div className="product_shop_img_con">
          <button className="backarrow" onClick={() => navigate("/")}>
            <ArrowBack />
          </button>
          <img
            src={url + "/" + getShopByidResponse?.data?.shop_logo}
            className="shop_product_img"
          ></img>
        </div>
        <div className="product_shop_details">
          <div className="card_datails">
            <div className="card_name">
              <h1>{getShopByidResponse?.data?.shop_name}</h1>
            </div>
            <div className="card_ratings">
              <h1>
                {" "}
                <Star /> {getShopByidResponse?.data?.ratings}
              </h1>
              <h1>1400 reviews</h1>
            </div>
            <div className="card_desc">
              <h1>{getShopByidResponse?.data?.address}</h1>
              <LocationOn />
            </div>
          </div>
          <div className="product_category_list">
            <div
              className={
                current === "Coffee"
                  ? `product_category product_active`
                  : `product_category`
              }
              onClick={() => {
                setCurrent("Coffee");
              }}
            >
              <Coffee />
              <h1>Coffee</h1>
            </div>
            <div
              className={
                current === "Drink"
                  ? `product_category product_active`
                  : `product_category`
              }
              onClick={() => {
                setCurrent("Drink");
              }}
            >
              <Fastfood />
              <h1>Drink</h1>
            </div>
            <div
              className={
                current === "Food"
                  ? "product_category product_active"
                  : "product_category"
              }
              onClick={() => {
                setCurrent("Food");
              }}
            >
              <LunchDining />
              <h1>Food</h1>
            </div>
          </div>

          <div className="product_list_container">
            {getProductResponse?.data?.map((each) => (
              <ProductCard each={each} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
