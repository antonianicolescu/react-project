import React from "react";
import { Layout } from "../components";
import {
  Container,
  Title,
  Description,
  Aside,
  Sticky,
  Contact,
  Details,
  Name,
  SubTitle,
  SlideAnimate,
  ImageSlider,
  Image,
} from "./ContactPage.style";
import { Row, Col } from "reactstrap";
import img1 from "../img/Brasov.jpg";
import img2 from "../img/MaisonDadoo.jpg";
import img3 from "../img/Building.jpg";

export const ContactPage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Title>Let's get to know each other!</Title>
            <Description>
              Whether you have an event and you're looking for a photographer or
              you are a passionate about photography who wants us to get
              inspired by my work and wants to collaborate, drop me a call or
              email. Either way, let’s get connected!
            </Description>
            <Description>
              For all general inquiries, comments or information, please don’t
              hesitate to contact me at:
            </Description>

            <Col>
              <Contact>phone</Contact>
              <Details>adam@gmail.com</Details>
              <Name>Adam Nicolescu, Photographer</Name>
            </Col>

            <Col>
              <Contact>email</Contact>
              <Details>+ 40 700 000 000</Details>
            </Col>
          </Col>

          <Col>
            <Aside>
              <SubTitle>
                <span>Hello there</span>
              </SubTitle>
              <Sticky>
                <SlideAnimate>
                  <ImageSlider>
                    <Image src={img1} />
                    <Image src={img2} />
                    <Image src={img3} />
                  </ImageSlider>
                </SlideAnimate>
              </Sticky>
              <SubTitle>
                <span>Welcome</span>
              </SubTitle>
            </Aside>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
