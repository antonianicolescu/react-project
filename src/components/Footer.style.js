import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.footer`
  display: block;
  position: relative;

  height: 90px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 15px 0;
  overflow: hidden;
  font-size: 10px;
  background-color: #ffffff;
  border-top: 0.5px solid #ececec;
`;

export const Ulist = styled.ul`
  text-align: center;
`;

export const Elem = styled.li`
  display: inline-block;
  text-align: center;
  padding: 4px 20px 0 6px;
  font-size: 25px;
  color: rgba(87, 83, 83, 0.8);
  transition: color 0.3s;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 5px;
  &:hover {
    color: #4099ff;
  }
`;

export const Par = styled.p`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 1px;
  color: #999;
`;

export const Span = styled.span`
  font-size: 10px;
  font-weight: 400;
  font-style: italic;
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  color: rgb(136, 134, 134);
`;
