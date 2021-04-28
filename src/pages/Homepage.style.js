import styled from "styled-components";
import { Link as L } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 1024px) {
    padding-right: 4px;
    padding-left: 4px;
  }
`;

export const Aside = styled.div`
  width: 250px;
  padding-bottom: 5px;
  display: block;
  margin: 5px 40px 5px 100px;
  @media (max-width: 1024px) {
    width: 27%;
    margin: 10px 10px 5px 10px;
  }
`;

export const Sticky = styled.div`
  background-color: #ffffff;
  color: #2b2922;
  margin-top: 10px;
  padding: 1.3rem;
  box-shadow: 0 5px 20px rgba(199, 196, 196, 0.5);
  position: sticky;
  top: 60px;
  border-radius: 5px;
`;

export const Avatar = styled.div`
  img {
    padding: 10px 15px;
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

export const Icons = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 5px 6px 4px 6px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 0.25),
      transparent
    );
  }
  img {
    display: inline-block;
    max-width: 35px;
    height: 40px;
    margin: 6px;
    padding-bottom: 10px;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Para = styled.p`
  font-size: 12px;
  position: relative;
  font-family: "Open Sans";
  color: rgba(31, 29, 29, 0.8);
  letter-spacing: 1px;
  font-weight: 400;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 0.25),
      transparent
    );
  }
`;
export const Span = styled.span`
  font-style: italic;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 127px;
  min-height: 35px;
  position: relative;
  background-color: rgba(248, 241, 241, 0.8);
  margin: 15px auto;
  padding: 5px 20px;
  border-radius: 50px;
  border: 1px #ccc solid;
  overflow: hidden;
  cursor: pointer;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: #333;
  &:hover::before {
    left: -150%;
    transition: left 0.8s ease-out;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 300px;
    height: 50px;
    background-color: rgba(167, 155, 155, 0.4);
    transform: rotate(45deg);
    left: 50%;
    top: 0;
  }
`;
export const Link = styled(L)`
  text-decoration: none;
  color: inherit;
  &:hover,
  :active {
    text-decoration: none;
    color: inherit;
  }
`;

export const Ulist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0 5px;
`;

export const Elem = styled.li`
  display: inline-block;
  text-align: center;
  padding: 5px 6px 4px 6px;
  font-size: 30px;
  color: rgba(87, 83, 83, 0.8);
  transition: color 0.3s;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 0.5rem;
  &:hover {
    color: #4099ff;
  }
`;

export const Main = styled.div`
  flex: 1;
  z-index: 999;
  padding: 0 5px 5px;
  margin: 10px 5px;
  @media (max-width: 1024px) {
    margin: 10px 0;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: "Open Sans";
  font-weight: 400;
  text-align: center;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: 1px;
  padding: 10px;
`;

export const Subtitle = styled.p`
  font-size: 17px;
  font-family: "Open Sans";
  font-weight: 400;
  text-align: center;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: 1px;
  padding: 1.5px;
`;
export const Description = styled.p`
  font-size: 15px;
  font-family: "Open Sans";
  font-weight: 400;
  text-align: left;
  line-height: 1.3;
  letter-spacing: 1px;
  padding: 5px 10px 5px;
`;

export const Gallery = styled.div`
  border-radius: 5px;
  margin: 0 60px;
  float: left;
  width: auto;
  height: auto;
  @media (max-width: 1024px) {
    width: 50%;
    margin: 0 20px;
  }
`;
export const Ul = styled.ul`
  display: flex;
  align-items: stretch;
  height: auto;
`;
export const Li = styled.li`
  margin: 7px;
  border-radius: 5px;
  border: 1px solid #ccc;
  opacity: 0.8;
  height: 100%;
  &:hover {
    border: 1px solid rgb(146, 143, 143);
    opacity: 1;
  }
`;

export const ImagesGallery = styled.img`
  width: 190px;
  height: 250px;
  border-radius: 5px;
  @media (max-width: 1024px) {
    width: 120px;
    height: 190px;
  }
`;

export const Descript = styled.p`
  padding: 12px;
  text-align: center;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
`;

export const AsideHide = styled.div`
  width: 250px;
  padding-bottom: 5px;
  display: block;
  margin: 5px 100px 5px 35px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Desc = styled.p`
  font-family: "Open Sans";
  font-size: 12px;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.6;
  color: rgba(31, 29, 29, 0.8);
  font-weight: 400;
  padding: 12px 10px 0;
`;
