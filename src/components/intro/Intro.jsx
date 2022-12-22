import "./intro.scss";
import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/saitama.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Akash James</h1>
          <h3>
            Software
            <span>
              <Typewriter
                options={{
                  strings: ["Developer", "Designer", "Engineer"],
                  autoStart: true,
                  cursor: "",
                  delay: 75,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
