import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  top: 68px;
  right: 1030px;
  width: 289px;
  height: 141px;
  background: #ffffff;
  box-shadow: -8px 14px 27px #00000029;
  border-radius: 12px;
  display: grid;

  @media all and (max-width: 1455px) {
    right: 750px;
  }

  @media all and (max-width: 1262px) {
    position: absolute;
    right: -260px;
    bottom: -20%;
  }

  @media (min-width: 780px) and (max-width: 998px) {
    position: absolute;
    right: 260px;
  }
  /*   @media (min-width: 520px) and (max-width: 768px) {
    position: absolute;
    left: 550px;
  } */
  @media (min-width: 520px) and (max-width: 779px) {
    position: absolute;
    left: 400px;
    top: -40%;
  }
  @media (min-width: 768px) and (max-width: 850px) {
    position: absolute;
    left: 150%;
    top: -40%;
  }
  @media (width: 768px) {
    position: absolute;
    left: 160%;
    top: -10%;
  }

  @media (min-width: 370px) and (max-width: 520px) {
    top: -50%;
    right: -250px;
  }
  @media (width: 360px) {
    top: -50%;
    right: -300px;
  }
`;

const H1 = styled.div`
  margin-top: 5px;
  top: 76px;
  left: 748px;
  width: 111px;
  height: 54px;
  text-align: left;
  font: normal normal 900 38px/54px Source Sans Pro;
  letter-spacing: 0px;
  color: #0d9206;
  opacity: 1;
`;
const H2 = styled.div`
  top: 152px;
  left: 748px;
  height: 40px;
  text-align: left;
  font: normal normal normal 32px/40px Source Sans Pro;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Line = styled.div`
  top: 137px;
  left: 748px;
  width: 170px;
  height: 0px;
  border: 2px solid #ff8800;
`;

const PriceBanner = () => {
  return (
    <Container>
      <H1>2 Days</H1>
      <Line />
      <H2>$166 per person</H2>
    </Container>
  );
};

export default PriceBanner;
