import React from "react";
import { Container } from "react-bootstrap";
import Margin from "../../../components/atoms/Margin";
import { CgAttachment } from "react-icons/cg";
import { imgToping1 } from "../../../assets/images";
import HeaderAdmin from "../../../components/moleculs/HeaderCustomer";

const AddToping = () => {
  return (
    <div>
      <HeaderAdmin />
      <Margin />
      <Container>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8">
            <h3 className="mx-5">Toping</h3>
            <div className="mt-5 mx-5">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-danger border-3"
                    id=""
                    placeholder="Name Toping"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-danger border-3"
                    id=""
                    placeholder="Price"
                  />
                </div>

                <div className="card p-2 border-danger border-3">
                  <label for="file-input" className="text-center">
                    <input
                      style={{ display: "none" }}
                      id="file-input"
                      type="file"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className=" mt-1 text-danger">Photo Toping</h6>
                      <CgAttachment />
                    </div>
                  </label>
                </div>

                <div className="d-grid gap-2 mt-5">
                  <button type="submit" class="btn btn-danger">
                    Add Toping
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src={imgToping1}
                alt="img-product"
                width={400}
                height={500}
              ></img>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddToping;
