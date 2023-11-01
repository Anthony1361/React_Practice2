import React from "react";
import Columns from "./Columns";

function Table() {
    return(
        <div>
          <table>
            <tbody>
              <tr>
                <Columns></Columns>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default Table