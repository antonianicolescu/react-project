import styled from "styled-components";
import { Link as L } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  height: 60px;
  width: 100%;
  overflow: hidden;
  padding: 5px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #ececec;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    max-width: 900px;
  }
`;

export const Logo = styled(L)`
  width: 50%;
  img {
    display: block;
    @media (max-width: 1024px) {
      margin: 0 auto;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  overflow: hidden;
`;

export const Link = styled(L)`
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(31, 29, 29, 0.8);
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 400;
  margin-right: 10px;
  margin-left: 10px;
  display: block;
  padding: 8px 15px;
  transition: color 0.3s;
  &:hover {
    color: #b0b0b0;
    text-decoration: none;
  }
`;

export const MenuToggle = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    width: 50%;
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  color: black;
  cursor: pointer;
`;
