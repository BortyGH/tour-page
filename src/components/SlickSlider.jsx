import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  left: 60%;
  top: 50%;
  width: 232px;
  height: 60px;
  font: normal normal normal 26px/33px Source Sans Pro;
  letter-spacing: 0px;
  color: #0d9206;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 0px 7px #00000029;
  border-radius: 56px;
  opacity: 0.79;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  @media all and (max-width: 1455px) {
    left: 40%;
    top: 30%;
  }
  @media (min-width: 300px) and (max-width: 712px) {
    left: 23%;
    top: 30%;
  }
  @media (min-width: 375px) and (max-width: 414px) {
    display: none;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 75%;
  left: ${(props) => (props.isLoaded ? "46.5%" : "100%")};
  overflow: hidden;
  transition: left 0.6s ease-in-out;
  @media (min-width: 375px) and (max-width: 414px) {
    flex-direction: column;
    top: 80%;
  }

  @media (min-width: 0px) and (max-width: 1262px) {
    margin-top: 680px;
    left: 0;
  }
  @media (max-width: 1440px) {
    margin-top: 40px;
  }
  @media (min-width: 0px) and (max-width: 1262px) {
    margin-top: 680px;
    left: 0;
  }
  @media (min-width: 375px) and (max-width: 414px) {
    top: 90%;
    left: 9px;
  }
  @media (width: 375px) {
    flex-direction: column;
    top: 120%;
  }
  @media (width: 414px) {
    left: 21px;
  }
  @media (width: 412px) {
    left: 20px;
  }
`;

const SlickSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 3);
  };

  const images = ["Shutterstock.png", "Vietnam.png", "vietnam_foto.png"];

  return (
    <SliderContainer isLoaded={isLoaded}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`src ${index + 1}`}
          style={{
            transform: `translateX(-${currentIndex * 380}px)`,
            transition: "transform 0.4s",
          }}
        />
      ))}
      <Button onClick={handleNextClick}>See more photos</Button>
    </SliderContainer>
  );
};

export default SlickSlider;
