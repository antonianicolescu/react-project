import styled from "styled-components";
import { Container as C } from "reactstrap";

export const Container = styled(C)`
  display: flex;
  min-height: 80vh;
  height: auto;
  align-items: stretch;
`;

export const Aside = styled.div`
  width: 280px;
  background-color: #ffffff;
  color: #2b2922;
  padding: 10px;
  margin-top: 15px;
  margin-left: 150px;
  box-shadow: 0 5px 20px rgba(199, 196, 196, 0.5);
  border-radius: 5px;
  position: sticky;
  top: 60px;
  @media (max-width: 767px) {
    width: 55%;
  }
`;

export const Sticky = styled.div`
  background-color: #ffffff;
  color: #2b2922;
  margin-top: 10px;
  padding: 1.3rem;
  position: sticky;
  top: 60px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-family: "Open Sans";
  font-weight: 400;
  text-align: center;
  font-style: italic;
  line-height: 2;
  letter-spacing: 1px;
  padding: 10px;
  position: relative;
`;
export const Description = styled.p`
  font-size: 15px;
  text-align: left;
  font-weight: 400;
  font-family: "Open Sans";
  line-height: 1.3;
  letter-spacing: 1px;
  opacity: 0.9;
  padding: 10px;
`;

export const Contact = styled.h6`
  font-size: 15px;
  text-align: left;
  font-weight: 400;
  font-family: "Open Sans";
  line-height: 1.3;
  letter-spacing: 1px;
  opacity: 0.9;
  padding-bottom: 10px;
  text-transform: uppercase;
`;
export const Details = styled.span`
  font-size: 15px;
  text-align: left;
  font-weight: 700;
  padding-bottom: 10px;
`;
export const Name = styled.p`
  font-size: 15px;
  text-align: left;
  font-weight: 400;
  font-family: "Open Sans";
  line-height: 1.3;
  letter-spacing: 1px;
  opacity: 0.9;
  padding-bottom: 10px;
`;

export const SubTitle = styled.h3`
  color: #000;
  font: 11px Montserrat, arial, sans-serif;
  letter-spacing: 3px;
  margin: 7px 5px;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  border-top: 1px solid #111;
  & span {
    position: relative;
    z-index: 99;
    top: -7px;
    padding: 0 10px;
    background: #fff;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const SlideAnimate = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  z-index: 999;
  @media (max-width: 767px) {
    height: 40vh;
    width: 128px;
  }
`;

export const ImageSlider = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  min-height: 300px;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid rgba(100, 100, 111, 0.2);
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: imgSlider 9s ease-in-out infinite;
  &:nth-child(2) {
    animation-delay: -3s;
  }
  &:nth-child(3) {
    animation-delay: -6s;
  }
  @keyframes imgSlider {
    0% {
      opacity: 0;
      left: 450px;
    }
    17%,
    33% {
      opacity: 1;
      left: 0;
    }
    50%,
    100% {
      opacity: 0;
      left: -450px;
    }
  }
`;
