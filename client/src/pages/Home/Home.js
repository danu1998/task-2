import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Margin from "../../components/atoms/Margin";
import Display from "../../components/moleculs/Display";
import Header from "../../components/moleculs/Header";
import Products from "../../components/moleculs/Products";
import NotifTransaction from "../../components/atoms/NotifTransaction";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
const Home = () => {
  let navigate = useNavigate;
  const [state] = useContext(UserContext);
  const checkAuth = () => {
    if (!state.isLogin) {
      navigate("/mainadmin");
    }
  };
  checkAuth();
  return (
    <div>
      <Header />
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

export default Home;
