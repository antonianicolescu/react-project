import styled from "styled-components";
import { Container as C } from "reactstrap";

export const Container = styled(C)`
  display: flex;
  min-height: 80vh;
  height: auto;
  align-items: stretch;
`;

export const Main = styled.div`
  flex: 1;
  margin: 0 1.5rem;
  z-index: 999;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: "Open Sans";
  font-weight: 400;
  text-align: center;
  font-style: italic;
  line-height: 2;
  letter-spacing: 1px;
  padding: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 150px;
    right: 150px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 0.25),
      transparent
    );
  }
`;
export const Description = styled.p`
  font-size: 15px;
  text-align: left;
  font-weight: 400;
  font-family: "Open Sans";
  line-height: 1.3;
  letter-spacing: 1px;
  padding: 10px;
`;
