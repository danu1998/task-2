import { dataToping } from "./DataDetail";

const ProductDetail = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <div>
            <img
              src={props.image}
              alt="img-detail"
              style={{ height: "600px" }}
            ></img>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <h1 className="fw-bold">{props.name}</h1>
          <h5 className="fs-5 mt-3">{props.price}</h5>
          <h3 className="fw-bold mt-5">{props.toping}</h3>

          <div className="row mt-5">
            {dataToping.map((data) => {
              return (
                <div className="col-md-3 mb-5 text-center">
                  <label className="list-group-item border-0">
                    <input
                      style={{
                        marginLeft: "50px",
                      }}
                      className="form-check-input rounded-pill me-1 position-absolute absolute"
                      type="checkbox"
                      value=""
                    />
                    <img
                      src={data.image}
                      alt="img-toping"
                      style={{ height: "85px", widht: "75px" }}
                    ></img>
                    <p>{data.name}</p>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="fw-bold">{props.total}</h4>
            <h4 className="fw-bold">{props.totalPrice}</h4>
          </div>
          <div className="d-grid mt-5">
            <button className="btn btn-danger" onClick={props.btnClick}>
              {props.btnCart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
