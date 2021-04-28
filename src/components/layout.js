import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./layout.style";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};
