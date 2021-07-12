import React from "react";
import { ReactComponent as TellorLogoWhite } from "../assets/tellor_white.svg";
import { ReactComponent as Swoosh } from "../assets/Swoosh.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Left__Column">
        <Swoosh />
        <TellorLogoWhite />
        <p>&copy; 2021 Tellor</p>
      </div>
      <div>
        <p>Links</p>
        <a
          href="http://tellor.io"
          alt="http://docs.tellor.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          tellor.io
        </a>
        <a
          href="http://docs.tellor.io"
          alt="http://docs.tellor.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.tellor.io
        </a>
        <div>
          <p>
            Icons made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
