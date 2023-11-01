import React from "react";
import "./compo.css";

function Compohead() {
  return (
    <div>
      <header>
        <nav>
          <img src="./img/butterfly.png"></img>
          <ul>
            <li>
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Services</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Dropdown</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Compohead;
