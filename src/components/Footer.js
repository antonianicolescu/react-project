import React from "react";
import { Wrapper, Ulist, Elem, Icon, Par, Span } from "./Footer.style";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <Wrapper>
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
      <Par>
        Photography - Atlas of Places © 2021. All rights reserved.
        <Span>Designed and Developed by Antonia Nicolescu</Span>
      </Par>
    </Wrapper>
  );
};
