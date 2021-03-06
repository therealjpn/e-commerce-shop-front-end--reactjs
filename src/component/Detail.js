import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            Company,
            info,
            price,
            inCart,
            img,
          } = value.detailProduct;
          return (
            <div className="container py">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End of title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by:<span className="text-uppercase">{Company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some Info About the Product:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/*Buttons */}
                  <Link to="/">
                    <ButtonContainer>Back to Products</ButtonContainer>
                  </Link>

                  <ButtonContainer
                    cart
                    disable={inCart ? true : false}
                    onClick={() => {
                      value.addTocart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "In cart" : "Add to Cart"}
                  </ButtonContainer>
                </div>
              </div>
              {/* Product Info Ends */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
