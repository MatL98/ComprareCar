import React from "react";
import { FooterStyle } from "./FooterStyles";

export const Footer = () => {
  return (
    <FooterStyle>
      <ul className="footerNav">
        <li className="footerLink">
          <a className="footerA" href="https://www.instagram.com/">
            Instagram
          </a>
        </li>
        <li className="footerLink">
          <a
            className="footerA"
            href="https://www.linkedin.com/in/matias-longo-8b512b128/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </FooterStyle>
  );
};
