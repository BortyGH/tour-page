import React, { useState, useEffect } from "react";
import ShareButton from "./ShareButton";
import styled from "styled-components";
import PriceBanner from "./PriceBanner";
import SlickSlider from "./SlickSlider";

const Image = styled.img`
  position: relative;
  top: -103px;
  left: -35px;
  width: 900px;
  height: 905px;
  z-index: -2;
  opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
  transition: opacity 1s ease-in-out;

  @media (min-width: 1455px) {
    left: ${({ isLoaded }) => isLoaded && "60px"};
  }
  @media all and (max-width: 1455px) {
    width: 800px;
    height: 805px;
  }
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: auto;
    top: auto;
    left: 0;
  }
`;

const Text = styled.div`
  position: relative;
  top: 37px;
  left: 50px;
  width: 317px;
  height: 338px;
  text-align: left;
  font: normal normal 900 90px/105px Source Sans Pro;
  letter-spacing: 0px;
  color: #000000;
  text-shadow: 0px 16px 21px #00000029;
  text-transform: capitalize;
  opacity: 1;

  @media (min-width: 375px) and (max-width: 519px) {
    position: relative;
    left: 80%;
    top: 20%;
  }
  @media all and (max-width: 1455px) {
    font-size: 80px;
    left: -70px;
  }
  @media (min-width: 375px) and (max-width: 998px) {
    position: relative;
    max-width: 26px;
    left: 80%;
  }
  @media (min-width: 0px) and (max-width: 414px) {
    margin-left: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TextGreen = styled.div`
  position: relative;
  height: 112px;
  font: normal normal bold 84px/112px Source Sans Pro;
  color: #0d9206;
  text-shadow: 0px 16px 21px #00000029;
  opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
  transition: opacity 0.6s ease-in-out;
  bottom: 92px;
  left: ${({ isLoaded }) => (isLoaded ? "390px" : "500px")};

  @media (max-width: 1600px) {
    left: ${({ isLoaded }) => (isLoaded ? "160px" : "500px")};
    font-size: 80px;
  }
  @media (min-width: 1456px) and (max-width: 1600px) {
    left: 50%;
  }
  @media (min-width: 520px) and (max-width: 998px) {
    position: relative;
    max-width: 26px;
    left: 80%;
    top: 10px;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    position: relative;
    max-width: 26px;
    left: 76%;
    top: 350px;
  }
  @media (min-width: 0px) and (max-width: 414px) {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const TextBody = styled.div`
  position: relative;
  height: 200px;
  width: 665px;
  left: 55px;
  bottom: 70px;
  text-align: left;
  font: normal normal normal 28px Source Sans Pro;
  color: #7d7d7d;

  @media all and (max-width: 1455px) {
    font-size: 24px;
    left: -70px;
    width: 550px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    margin-top: 10px;
    right: 0;
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 5px;
    margin-top: 5px;
    right: 0;
    font-size: 20px;
  }
  @media (min-width: 520px) and (max-width: 998px) {
    font-size: 20px;
    position: static;
    left: -30px;
    width: 450px;
  }
  @media (min-width: 520px) and (max-width: 768px) {
    font-size: 20px;
    position: absolute;
    left: -30px;
    top: 140%;
    width: 450px;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    position: relative;
    left: 70%;
    top: 450px;
  }
  @media (min-width: 0px) and (max-width: 414px) {
    justify-content: center;
    align-items: center;
    width: 300px;
    left: 40%;
  }
  @media (min-width: 375px) and (max-width: 414px) {
    top: 500px;
    padding-left: 100px;
    justify-content: center;
  }
  @media (min-width: 820px) and (max-width: 912px) {
    position: relative;
    top: 100px;
    left: 10%;
  }
`;

const ButtonOrange = styled.div`
  position: relative;
  width: 203px;
  height: 61px;
  text-align: left;
  font: normal normal normal 27px/34px Source Sans Pro;
  letter-spacing: 0px;
  color: #ffffff;
  background: #ff8800;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 2px;
  margin-top: 45px;

  &:hover {
    background-color: #0d9206;
    transform: scale(1.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-color: rgba(255, 255, 255, 0.4);
    transform: rotate(45deg);
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
    pointer-events: none;
  }

  &:hover::before {
    transform: rotate(0deg);
    opacity: 1;
  }
`;

const Line = styled.div`
  position: absolute;
  top: 374px;
  left: 900px;
  height: 235px;
  border: 2px solid #0d9206;
  opacity: 1;
  @media (min-width: 1900px) {
    margin-top: 10px;
    height: 250px;
  }
  @media all and (max-width: 1455px) {
    left: 690px;
  }
  @media (min-width: 0px) and (max-width: 998px) {
    display: none;
  }
`;

const Grid = styled.img`
  position: relative;
  right: -260px;
  bottom: 70px;
  @media all and (max-width: 1455px) {
    left: -25px;
  }
  @media (min-width: 0px) and (max-width: 414px) {
    display: none;
  }
`;

const ArrowDown = styled.img`
  position: absolute;
  top: 80%;
  left: 20px;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.2);
  }
  @media all and (max-width: 1262px) {
    position: absolute;
    top: 170%;
    left: 55px;
  }
  @media (min-width: 300px) and (max-width: 1262px) {
    position: absolute;
    top: 174%;
    left: 55px;
  }
  @media (min-width: 375px) and (max-width: 414px) {
    display: none;
  }
`;

const ArrowText = styled.div`
  position: absolute;
  top: 84.5%;
  left: 10%;
  font: 26px/33px Source Sans Pro;
  color: #789376;

  @media all and (max-width: 1936px) {
    top: 84%;
    left: 150px;
  }
  @media all and (max-width: 1262px) {
    position: absolute;
    top: 174%;
    left: 180px;
  }
  @media (min-width: 500px) and (max-width: 1262px) {
    position: absolute;
    top: 178%;
    left: 180px;
  }
  @media (min-width: 375px) and (max-width: 414px) {
    display: none;
  }
`;

const Body = styled.div`
  @media all and (max-width: 1262px) {
    position: absolute;
    top: 650px;
    right: 300px;
  }
  @media all and (max-width: 998px) {
    position: absolute;
  }
`;

const MainPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Image isLoaded={isLoaded} src="MainImg.png"></Image>
      <ShareButton />
      <Body>
        <TextContainer>
          <PriceBanner />
          <Line />
          <Text>Mekong Delta Tour,</Text>
          <TextGreen isLoaded={isLoaded}>Vietnam</TextGreen>
          <TextBody>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            <ButtonOrange>Book Now</ButtonOrange>
          </TextBody>
        </TextContainer>
      </Body>
      <Grid src="Grid.svg"></Grid>
      <ArrowDown src="ArrowDown.svg" />
      <ArrowText>More Short Trips</ArrowText>
      <SlickSlider />
    </Container>
  );
};

export default MainPage;
