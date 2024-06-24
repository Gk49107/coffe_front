import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import React, { useCallback, useEffect, useState } from "react";
import {
  getShopByIdRequest,
  getShopListRequest,
} from "../../redux/Shop/ShopActions";
import { Carousel } from "react-bootstrap";
import ShopCard from "../../componets/shopcard";
import { Close, Earbuds, Search } from "@mui/icons-material";
import Loader from "../../componets/loader";

export default function Shop() {
  const [search, setSearch] = useState("");

  const debounce = (func, wait) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const [debounceVal, setDebounceVal] = useState("");
  const handleSearch = useCallback(
    debounce((inputVal) => setDebounceVal(inputVal), 500),
    []
  );
  useEffect(() => {
    dispatch(getShopListRequest({ search: debounceVal }));
  }, [debounceVal]);
  const dispatch = useDispatch();
  const { getShopLoading, getShopResponse } = useSelector(
    (state) => state.Shops
  );

  return (
    <div className="carousel_container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="find_text">
        <h1>Find Your Coffee Shop Anywhere</h1>
      </div>
      <div className="search_bar">
        <div className="search_input">
          <input
            value={search}
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value);
            }}
            className="input_search"
          ></input>
          <span className="search_icon">
            {search ? <Close onClick={() => setSearch("")} /> : <Search />}
          </span>
        </div>
        <span className="advance_button">
          <Earbuds />
        </span>
      </div>
      {true ? (
        <Loader />
      ) : (
        <div className="shops_container">
          {getShopResponse?.data?.data?.map((each, index) => (
            <ShopCard each={each} />
          ))}
        </div>
      )}
    </div>
  );
}
