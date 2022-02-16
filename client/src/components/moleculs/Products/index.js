import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProducts } from "./DataProducts";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1 className="my-5 fw-bold text-danger">Let's Order</h1>
      <div className="row">
        {DataProducts.map((data) => {
          return (
            <div className="col-md-3 col-sm-12" key={data.id}>
              <Link to="/detail" className="text-decoration-none">
                <div className="card">
                  <img
                    src={data.image}
                    className="card-img-top img-fluid"
                    alt="img-product"
                  />
                  <div className="card-body alert-danger ">
                    <h5 className="card-text text-danger">{data.name}</h5>
                    <p className="card-text text-danger">{data.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Products;
