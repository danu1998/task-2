import React from "react";
import { Modal, Button } from "react-bootstrap";
const DeleteProduct = ({ show, handleClose, setConfirmDelete }) => {
  // const refresh = () => {
  //   window.location.reload();
  // };
  const handleDelete = () => {
    setConfirmDelete(true);
    // refresh();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-dark">
          <div style={{ fontSize: "20px", fontWeight: "900" }}>Delete Data</div>
          <div style={{ fontSize: "16px", fontWeight: "500" }} className="mt-2">
            Are you sure you want to delete this item ?
          </div>
          <div className="text-end mt-5">
            <Button
              onClick={handleDelete}
              size="sm"
              className="btn-success me-2"
              style={{ width: "135px" }}
            >
              Yes
            </Button>
            <Button
              onClick={handleClose}
              size="sm"
              className="btn-danger"
              style={{ width: "135px" }}
            >
              No
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteProduct;
