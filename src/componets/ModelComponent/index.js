import React, { useEffect, useRef } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";
const Model = React.memo(
  ({
    width,
    minWidth,
    height,
    right,
    left,
    position,
    maxHeight,
    innerHeight,
    open,
    Title,
    titleMt,
    titleMb,
    header,
    handleClose,
    TitleClick,
    overflow,
    children,
  }) => {
    const style = {
      width: width ? width : "40%",
      minWidth: minWidth || "285px",
      height: height,
      right: right,
      left: left,
      position: position,
      overflow: overflow || "visible",
      maxHeight: maxHeight || "80%",
      "@media (maxWidth: 568px)": {
        width: "90%",
      },
    };

    const ref = useRef(null);

    useEffect(() => {
      function handleClickOutside(e) {
        e.stopPropagation();
        if (ref.current && !ref.current.contains(e.target)) {
          handleClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    const style1 = {
      maxHeight: innerHeight,
    };
    return open
      ? createPortal(
          <div className="CustomModel-popup">
            <div ref={ref} style={style} className="CustomModel-inner">
              {header ? (
                <div className="rent-model-header">
                  {" "}
                  <div
                    style={{ marginTop: titleMt, marginBottom: titleMb }}
                    className="title_rent"
                    variant="h6"
                    component="h2"
                  >
                    <h4>
                      {Title} {TitleClick ? <span>{TitleClick}</span> : null}
                    </h4>
                  </div>
                  <button
                    onClick={handleClose}
                    className="rent-modal-close-btn"
                  >
                    <CloseIcon sx={{ fontSize: "22px" }} />
                  </button>{" "}
                </div>
              ) : (
                <div className="CustomModel-inner-header-container">
                  <div
                    style={{ marginTop: titleMt, marginBottom: titleMb }}
                    className="title_model"
                    variant="h6"
                    component="h2"
                  >
                    <h4>
                      {Title} {TitleClick ? <span>{TitleClick}</span> : null}
                    </h4>
                  </div>
                  <button onClick={handleClose} className="modal-close-btn">
                    <CloseIcon sx={{ fontSize: "16px" }} />
                  </button>
                </div>
              )}

              <div style={style1} className="custom-role-model-form1">
                {children}
              </div>
            </div>
          </div>,
          document.body
        )
      : null;
  }
);
export default Model;
