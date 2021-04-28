import React from "react";
import { Layout } from "../components";
import {
  MainContent,
  Aside,
  Sticky,
  Avatar,
  Icons,
  Para,
  Span,
  Button,
  Link,
  Ulist,
  Icon,
  Elem,
  Main,
  Title,
  Subtitle,
  Description,
  Gallery,
  Ul,
  Li,
  ImagesGallery,
  Descript,
  AsideHide,
  Desc,
} from "./Homepage.style";
import picture from "../img/photographer.jpg";
import icon1 from "../img/camara.jpg";
import icon2 from "../img/obiectiv-camara.jpg";
import icon3 from "../img/pic.jpg";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import Slider from "../components/carousel";

export const HomePage = () => {
  return (
    <Layout>
      <MainContent>
        <Aside>
          <Sticky>
            <Avatar>
              <img src={picture} alt="avatar" />
            </Avatar>
            <Icons>
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
            </Icons>
            <Para>
              <Span>What I’m good for:</Span> Photography & visual stuff.
            </Para>
            <Para>
              <Span>Photography genre:</Span> Places, experimental photography
              and other categories related to human subjects.
            </Para>
            <Button>
              <Link to="/aboutme">View My Work</Link>
            </Button>
            <Ulist>
              <Elem>
                <Icon icon={faFacebookSquare} />
              </Elem>
              <Elem>
                <Icon icon={faTwitter} />
              </Elem>
              <Elem>
                <Icon icon={faInstagram} />
              </Elem>
              <Elem>
                <Icon icon={faPinterest} />
              </Elem>
            </Ulist>
          </Sticky>
        </Aside>
        <Main>
          <Title>Captures for Life</Title>
          <Subtitle>Hello there & Welcome to my site!</Subtitle>
          <Description>
            I'm passionate about photography, travel and the world. I believe
            that most of my pictures are reflecting some informal moments I was
            able to record, within rather quite formal projects or personal
            experiences. The oldest image of the series I made in 2010, but this
            is still an ongoing project and a growing collection.
          </Description>
          <Description>
            <Span>Where did it all start? </Span>I started really thinking about
            photography more and more. I loved it, had passion for it, loved
            getting outdoors for landscape photography…. And then I thought,
            could I make this a career? However, I was up against some stiff
            competition! I started connecting with other photographers and was
            asked if I would consider to photograph various events. So I decided
            to look into it.
          </Description>

          <Gallery>
            <Ul>
              <Li>
                <ImagesGallery
                  src="https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/400x400"
                  alt=""
                />
                <Descript>Through Nature</Descript>
              </Li>
              <Li>
                <ImagesGallery
                  src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/400x400"
                  alt=""
                />
                <Descript>Through Travel</Descript>
              </Li>
              <Li>
                <ImagesGallery
                  src="https://images.pexels.com/photos/6642509/pexels-photo-6642509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/400x400"
                  alt=""
                />
                <Descript>Some Architecture</Descript>
              </Li>
            </Ul>
          </Gallery>
        </Main>
        <AsideHide>
          <Sticky>
            <Slider />
            <Desc>
              I'm Adam, traveler and photographer! This site lives to inspire
              outdoor adventure. Stay awhile and receive the best photo tips for
              your next journey.
            </Desc>
          </Sticky>
        </AsideHide>
      </MainContent>
    </Layout>
  );
};
