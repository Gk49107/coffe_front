import { useFormik } from "formik";
import "./index.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopListRequest } from "../../redux/Shop/ShopActions";
import { postProductRequest } from "../../redux/Products/ProductActions";

export default function CreateProduct() {
  const handleChange = (e) => {
    const filename = e?.currentTarget?.files[0]?.name?.split(".");
    if (filename && filename[0]) {
      const format = filename[filename?.length - 1];
      formik.setFieldValue("product_logo", e.currentTarget.files[0]);
      // if (imageFileFormat.includes(format)) {
      //   setImage(URL.createObjectURL(e.currentTarget.files[0]));
      // } else {
      //   toast.error("Invalid File Type.");
      // }
    }
  };
  const { getShopLoading, getShopByidResponse, getShopResponse } = useSelector(
    (state) => state.Shops
  );

  useEffect(() => {
    dispatch(getShopListRequest());
  }, []);
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.Product);
  const formik = useFormik({
    initialValues: {
      shop_id: "",
      product_name: "",
      product_desc: "",
      ratings: "",
      location: "",
      location_string: "",
      address: "",
      product_logo: "",
      reviews: [],
      product_temp: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(postProductRequest(values));
      // if (each) {
      //   dispatch(putMaterialCategoryRequest(values, each._id));
      // } else {
      //   dispatch(postMaterialCategoryRequest(values));
      // }
    },
  });

  return (
    <div className="shop_container">
      <div className="form_container">
        <form className="shop_form" onSubmit={formik.handleSubmit}>
          <h6>only for dev purpose</h6>
          <div className="input_container">
            <label className="input-label">product name</label>
            <input
              className="shop_input"
              name="product_name"
              value={formik.values.product_name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">shop list</label>
            <select
              name="shop_id"
              className="shop_input"
              onChange={formik.handleChange}
            >
              {getShopResponse?.data?.data?.map((each) => (
                <option value={each?._id}>{each?.shop_name}</option>
              ))}
            </select>
          </div>
          <div className="input_container">
            <label className="input-label">shop list</label>
            <select
              name="category"
              className="shop_input"
              onChange={formik.handleChange}
            >
              <option value={"Coffee"}>Coffee</option>
              <option value={"Drink"}>Drink</option>
              <option value={"Food"}>Food</option>
            </select>
          </div>
          <div className="input_container">
            <label className="input-label">product desc</label>
            <input
              className="shop_input"
              name="product_desc"
              value={formik.values.product_desc}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">product Qty</label>
            <input
              className="shop_input"
              name="qty"
              type="number"
              value={formik.values.qty}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">product price</label>
            <input
              className="shop_input"
              name="product_price"
              type="number"
              value={formik.values.product_price}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">product logo</label>
            <input
              className="shop_input"
              accept="image/jpg,image/png,image/jpeg"
              type="file"
              //s value={formik.values.product_logo}
              onChange={handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">ratings</label>
            <input
              className="shop_input"
              name="ratings"
              value={formik.values.ratings}
              onChange={formik.handleChange}
            />
          </div>
          <button className="submit_button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
