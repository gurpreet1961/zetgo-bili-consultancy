import React from "react";
import Logo from "./Logo";
function Navbar() {
  return (
    <nav>
      <div className="leftNav">
        <Logo />
        <h1 className="logoName">Zetgo</h1>
      </div>
      <div className="rightNav">
        <svg
          viewBox="404.143 196.322 49.715 27.043"
          width="49.715"
          height="27.043"
        >
          <rect
            x="0.825806"
            y="0.447632"
            width="41.1049"
            height="5.86126"
            fill="#315680"
            transform="matrix(1, 0, 0, 1, 403.31675, 195.874043)"
          ></rect>
          <rect
            x="412.753"
            y="206.667"
            width="41.105"
            height="5.861"
            fill="#315680"
          ></rect>
          <rect
            x="405.098"
            y="217.504"
            width="41.105"
            height="5.861"
            fill="#315680"
          ></rect>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
