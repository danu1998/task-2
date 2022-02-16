import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { imgProduct1 } from "../../../assets/images";
import Margin from "../../../components/atoms/Margin";
import HeaderCustomer from "../../../components/moleculs/HeaderCustomer";
import ProductDetail from "../../../components/moleculs/ProductDetail";

const Detail = () => {
  const [setSum, isSetSum] = useState(0);
  function Add() {
    return isSetSum(setSum + 1);
  }
  return (
    <div>
      <HeaderCustomer />
      <Margin />
      <Container>
        <ProductDetail
          name="Ice Coffee Palm Sugar"
          price="Rp 27.000"
          toping="Toping"
          total="Total"
          totalPrice={`Rp ${27000}`}
          btnCart="Add Cart"
          image={imgProduct1}
          btnClick={Add}
        />
      </Container>
    </div>
  );
};

export default Detail;
