import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Margin from "../../../components/atoms/Margin";
import HeaderCustomer from "../../../components/moleculs/HeaderCustomer";
import { API } from "../../../config/api";
const Detail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [toping, setTopings] = useState([]);
  const [priceToping, setPriceToping] = useState(0);
  const [checked, setChecked] = useState(false);
  // Get product berdasarkan id
  const getProduct = async (id) => {
    try {
      const response = await API.get("/product/" + id);
      console.log(response.data.data);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // ===== || =====
  // Get seluruh toping
  const getTopings = async () => {
    try {
      const response = await API.get("/topings");
      console.log(response);
      setTopings(
        response.data.data.topings.map((item) => {
          return { ...item, checked: false };
        })
      );
      console.log(toping);
    } catch (error) {
      console.log(error);
    }
  };
  // ===== || =====
  // const handleChangeTopingId = (e, index) => {
  //   const id = e.target.value;
  //   console.log(JSON.parse(id));
  //   const checked = e.target.checked;
  //   toping[index].checked = checked;
  //   const price = toping
  //     .filter((data) => data.checked)
  //     .map((data) => data.price);
  //   setPriceToping(price.length > 1 ? price.reduce((p, c) => p + c) : price[0]);
  //   console.log(toping);
  // };
  // ===== || =====

  const handleChecked = () => {
    setChecked(!checked);
    toping.find((item) => item.id === id).checked = !checked;
    // const checked = e.target.checked;
    // toping[index].checked = checked;
  };

  useEffect(() => {
    getProduct(id);
    getTopings();
  }, []);
  return (
    <div>
      <HeaderCustomer />
      <Margin />
      <Container>
        <div>
          <div className="row">
            <div className="col-md-5 col-sm-12" key={id}>
              <div>
                <img
                  src={product.image}
                  alt="img-detail"
                  style={{ height: "600px" }}
                ></img>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <h1 className="fw-bold">{product.name}</h1>
              <h5 className="fs-5 mt-3">{product.price}</h5>

              <div className="row mt-5">
                <div className="d-flex flex-row justify-content-start mb-5 text-center">
                  {toping?.map((item, index) => (
                    <label className="list-group-item border-0" key={index}>
                      <input
                        style={{
                          marginLeft: "50px",
                        }}
                        className="form-check-input rounded-pill me-1 position-absolute absolute"
                        type="checkbox"
                        value={JSON.stringify(item)}
                        // onClick={(e) => handleChangeTopingId(e, index)}
                        // onClick={handleClick}
                      />
                      <img
                        src={item.image}
                        alt="img-toping"
                        style={{ height: "85px", widht: "75px" }}
                      ></img>
                      <p>{item.name}</p>
                    </label>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold">Product Price :</h4>
                <h4 className="fw-bold">Toping Price : {priceToping}</h4>
                <h4 className="fw-bold">
                  Sub Total : {product.price + priceToping}
                </h4>
              </div>
              <div className="d-grid mt-5">
                <button className="btn btn-danger">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
