import React from "react";
import StarfieldAnimation from "./node_modules/react-starfield-animation";

//Optional Background using StarfieldAnimation. I found this to be distracting from the application's
//functionality, but it can be placed within the App.js render() for a cool animation effect

function Background() {
  return (
    <StarfieldAnimation
      style={{
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
    />
  );
}

export default Background;
