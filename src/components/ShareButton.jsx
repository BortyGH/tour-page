import React, { useState } from "react";
import styled from "styled-components";

const Text = styled.div`
  font: normal normal normal 26px/33px Source Sans Pro;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #0d9206;
  border-radius: 50%;
  opacity: 0.79;
  justify-content: center;
  align-items: center;
  left: 100px;
  cursor: pointer;
  transition: opacity 1s ease-in-out;
`;

const ImageContainer2 = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #0d9206;
  border-radius: 50%;
  opacity: 0.79;
  justify-content: center;
  align-items: center;
  left: 100px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: opacity 1s ease-in-out;
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 238px;
  height: 60px;
  background: #789376;
  box-shadow: 5px 14px 15px #0000002e;
  border-radius: 96px;
  border: none;
  top: 50%;
  left: 35px;
  transform: translateY(-50%);
  justify-content: space-evenly;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: #0d9206;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media all and (max-width: 1262px) {
    position: absolute;
    top: 70%;
    left: 900px;
  }
  @media (min-width: 370px) and (max-width: 414px) {
    position: absolute;
    top: 45%;
    left: 60px;
  }
  @media (width: 360px) {
    position: absolute;
    top: 50%;
    left: 60px;
  }
  @media (width: 375px) {
    position: absolute;
    top: 60%;
    left: 0px;
  }
  @media (min-width: 540px) and (max-width: 920px) {
    position: absolute;
    top: 50%;
    left: 790px;
  }
  @media (width: 820px) {
    position: absolute;
    top: 22%;
    left: 770px;
  }
`;

const HoverContent = styled.div`
  position: relative;
  top: -120px;
  left: 35px;
`;

const IconImage = styled.img`
  margin: 10px;
`;

const ShareButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src="share.svg" />
        <Text>Lorem Ipsum</Text>
      </Button>
      {isHovered && (
        <HoverContent>
          <ImageContainer2
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <IconImage src="twitter.svg" />
          </ImageContainer2>
          <ImageContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <IconImage src="facebook.svg" />
          </ImageContainer>
        </HoverContent>
      )}
    </Container>
  );
};

export default ShareButton;
