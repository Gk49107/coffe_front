import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import React from "react";
import { useFormik } from "formik";
import { postShopRequest } from "../../redux/Shop/ShopActions";

export default function CreateShop() {
  const handleChange = (e) => {
    const filename = e?.currentTarget?.files[0]?.name?.split(".");
    if (filename && filename[0]) {
      const format = filename[filename?.length - 1];
      formik.setFieldValue("shop_logo", e.currentTarget.files[0]);
      // if (imageFileFormat.includes(format)) {
      //   setImage(URL.createObjectURL(e.currentTarget.files[0]));
      // } else {
      //   toast.error("Invalid File Type.");
      // }
    }
  };
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.Shops);
  const formik = useFormik({
    initialValues: {
      shop_name: "",
      shop_desc: "",
      ratings: "",
      location: "",
      location_string: "",
      address: "",
      shop_logo: "",
      reviews: [],
      shop_temp: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(postShopRequest(values));
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
            <label className="input-label">shop name</label>
            <input
              className="shop_input"
              name="shop_name"
              value={formik.values.shop_name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">shop desc</label>
            <input
              className="shop_input"
              name="shop_desc"
              value={formik.values.shop_desc}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">shop address</label>
            <input
              className="shop_input"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input_container">
            <label className="input-label">shop logo</label>
            <input
              className="shop_input"
              accept="image/jpg,image/png,image/jpeg"
              type="file"
              //s value={formik.values.shop_logo}
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
