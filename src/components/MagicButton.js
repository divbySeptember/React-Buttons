import React from "react";

import "./buttonStyles.css";

function MagicButton(props) {
  return <button>Hello {props.firstName}</button>;
}

export default MagicButton;
