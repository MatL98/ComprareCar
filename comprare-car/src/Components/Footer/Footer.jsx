import React from "react";
import { FooterStyle } from "./FooterStyles";
import IG from "../../img/instagram.png";
import LK from "../../img/linkedin.png"

export const Footer = () => {
  return (
    <FooterStyle>
      <ul className="footerNav">
        <li className="footerLink">
          <a className="footerA" href="https://www.instagram.com/">
            <img src={IG} alt="" />
          </a>
        </li>
        <h5>Desarrollado por Matias ©</h5>
        <li className="footerLink">
          <a
            className="footerA"
            href="https://www.linkedin.com/in/matias-longo-8b512b128/"
          >
            <img src={LK} alt="" />
          </a>
        </li>
      </ul>
    </FooterStyle>
  );
};
