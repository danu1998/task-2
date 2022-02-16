import React from "react";
import { Container } from "react-bootstrap";
import Margin from "../../../components/atoms/Margin";
import Display from "../../../components/moleculs/Display";
import HeaderAdmin from "../../../components/moleculs/HeaderAdmin";
import Products from "../../../components/moleculs/Products";

const MainAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <Margin />
      <Container>
        <Display />
      </Container>
      <Margin />
      <Container>
        <Products />
      </Container>
      <Margin />
    </div>
  );
};

export default MainAdmin;
