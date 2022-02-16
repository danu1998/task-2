import React from "react";
import { FaMoneyCheck } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { GoTrashcan } from "react-icons/go";
import Margin from "../../../components/atoms/Margin";
import Header from "../../../components/moleculs/Header";
// import { DataCart } from "./DataCart";
const Cart = () => {
  return (
    <div>
      <Header />
      <Margin />
      <Container>
        <h3 className="fw-bold text-danger">My Cart</h3>
        <div className="d-flex flex-row justify-content-between align-items-center gap-5">
          <div className="col-md-8">
            <h6 className="text-danger mt-3">Review Your Order</h6>
            <hr className="text-danger" style={{ height: "3px" }} />
            return (
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="row justify-content-start align-items-center">
                  <div className="col-md-2">
                    <div>
                      <img
                        src=""
                        alt="img-cart"
                        width={100}
                        height={100}
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="row justify-content-between">
                      <div className="col-md-10">
                        <h5 className="fw-bold text-danger">name</h5>
                      </div>
                      <div className="col-md-2">
                        <p className="text-danger">Rp 27000</p>
                      </div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-md-11">
                        <div className="d-flex justify-content-start align-items-center">
                          <p className="fw-bold" style={{ color: "#974A4A" }}>
                            Toping :
                          </p>
                          <p className="text-danger">Toping</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <GoTrashcan className="text-danger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
            <hr className="text-danger" style={{ height: "3px" }} />
            <div>
              <div className="row">
                <div className="col-md-8">
                  <hr className="text-danger" style={{ height: "3px" }} />
                  <div className="row">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-9">
                        <p className="fw-bold text-danger">Subtotal</p>
                      </div>
                      <div className="col-md-3 text-danger">
                        <p>Rp 69.000</p>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-10">
                        <p className="text-danger">Qty</p>
                      </div>
                      <div className="col-md-2">
                        <p className="text-danger">2</p>
                      </div>
                    </div>
                  </div>
                  <hr className="text-danger" style={{ height: "3px" }} />
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-9">
                      <p className="fw-bold text-danger">Total</p>
                    </div>
                    <div className="col-md-3">
                      <p className="text-danger">Rp 69.000</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="card px-3 py-4 border-danger border-3">
                    <label for="file-input" className="text-center">
                      <FaMoneyCheck
                        style={{ width: "56px", height: "56px" }}
                        className="text-danger"
                      />
                      <input
                        style={{ display: "none" }}
                        id="file-input"
                        type="file"
                      />
                      <h6 className="mt-3 text-danger">
                        Attache of Transaction
                      </h6>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <form>
              <div class="mb-4">
                <input
                  type="email"
                  className="form-control border-danger border-2 py-2"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control border-danger border-2 py-2 "
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  className="form-control border-danger border-2 py-2"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="inputPostCode"
                  className="form-control border-danger border-2 py-2"
                  placeholder="Post Code"
                />
              </div>
              <div className="mb-4">
                <textarea
                  type="text"
                  id="inputAddress"
                  className="form-control border-danger border-2 py-2"
                  placeholder="Address"
                  rows={4}
                  cols={50}
                />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-danger" type="submit">
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
