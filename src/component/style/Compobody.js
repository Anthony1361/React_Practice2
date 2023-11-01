import React from "react";
import Compohead from "./Compohead";
import Compofoot from "./Compofoot";

function Compobody() {
  return (
    <div>
      <Compohead></Compohead>

      {/* <img src="./img/bg.jpg" class="im"></img> */}

      {/* <Compohead></Compohead> */}

      <main class="main">
        <form class="form">
          <input class="inpu" type="text" placeholder="Name" required></input>
          <input class="inpu" type="email" placeholder="Email" required></input>
          <input
            class="inpu"
            type="password"
            placeholder="Password"
            required
          ></input>

          <button class="but">Submit</button>
          <Compofoot></Compofoot>
        </form>
      </main>

      {/* <Compofoot></Compofoot> */}

      <h1>
        <p></p>
      </h1>
    </div>
  );
}

export default Compobody;
