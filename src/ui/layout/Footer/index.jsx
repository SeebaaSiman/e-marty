import { Copyright, Links, StyledFooter } from "./footerStyle";

export const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </Copyright>
      <Links>
        <Copyright>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1nsiman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sebastián Siman
          </a>
        </Copyright>
        <a
          href="https://seebaasiman.github.io/Sebastian.Siman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        <a
          href="https://github.com/SeebaaSiman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="mailto:seebaasiman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </Links>
    </StyledFooter>
  );
};
