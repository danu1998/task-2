import React from "react";
import { Container } from "react-bootstrap";
import Margin from "../../../components/atoms/Margin";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import HeaderAdmin from "../../../components/moleculs/HeaderAdmin";

const Transaction = () => {
  return (
    <div>
      <HeaderAdmin />
      <Margin />
      <Container>
        <h3 className="fw-bold text-danger">Income Transaction</h3>
        <div>
          <table className="table table-bordered border-secondary">
            <thead>
              <tr className="table-secondary">
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Post Code</th>
                <th scope="col">Income</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Sugeng No Pants</td>
                <td>Cileungsi</td>
                <td>16820</td>
                <td>69.000</td>
                <td className="text-warning">Waiting Approve</td>
                <td>
                  <div className="d-flex justify-content-center gap-3 align-items-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger px-5"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-success px-5"
                    >
                      Approve
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Haris Gams</td>
                <td>Serang</td>
                <td>42111</td>
                <td>30.000</td>
                <td className="text-success">Success</td>
                <td className="text-center">
                  <BsFillCheckCircleFill className="text-success" />
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Aziz Union</td>
                <td>Bekasi</td>
                <td>13450</td>
                <td>28.000</td>
                <td className="text-danger">cancel</td>
                <td className="text-center">
                  <BsXCircleFill className="text-danger" />
                </td>
              </tr>
              <tr>
                <th>4</th>
                <td>Lae Tanjung Balai</td>
                <td>Tanjung Balai</td>
                <td>21331</td>
                <td>30.000</td>
                <td className="text-primary">On The Way</td>
                <td className="text-center">
                  <BsFillCheckCircleFill className="text-success" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Transaction;
