import React, { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Margin from "../../../components/atoms/Margin";
import Display from "../../../components/moleculs/Display";
import HeaderCustomer from "../../../components/moleculs/HeaderCustomer";

import { API } from "../../../config/api";
const MainCustomer = () => {
  return (
    <div>
      <HeaderCustomer />
      <Margin />
      <Container>
        <Display />
      </Container>
      <Margin />
      <Container></Container>
      <Margin />
    </div>
  );
};

export default MainCustomer;
