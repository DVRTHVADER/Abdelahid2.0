import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer 💻",
          "Athlete 🏈",
          "DEVOPS 📲",
          "Cloud Developer 🌩️",
          "Nature Lover ☘️ ",
          "Cyber Security Enthusiast 📡",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
