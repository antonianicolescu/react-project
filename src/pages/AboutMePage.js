import React from "react";
import { Layout } from "../components";
import { Container, Main, Title, Description } from "./AboutMePage.style";

export const AboutMePage = () => {
  return (
    <Layout>
      <Container>
        <Main>
          <Title>About Me</Title>
          <Description>
            Well, hello there! I am Adam, I have an unquenchable thirst for
            photography, art, history and everything related to them. Eternally
            melancholic, always on the hunt for new places, I declared myself a
            photoworm. Welcome to my humble abode!
          </Description>
          <Description>
            I started building my portfolio, and then by chance, my cousin asked
            me if I would take some photos for one of her Studio Project. It was
            too good an opportunity for experience to turn down, so I did helped
            her. Things went well, but I still had some things to learn and
            smooth out. Then I practiced and tried to experience places, other
            events, people and bildings. I invested in a top of the line camera
            (Sony A7iii) and decided to put myself out there. So you can see
            more details in my portofolio or in special projects!
          </Description>
        </Main>
      </Container>
    </Layout>
  );
};
