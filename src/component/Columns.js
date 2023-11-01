import React from "react";

function Columns() {
    const items = []
    return(
        // Here div tag cannot have td as its child, it is wrong when inspected on the console, so we use react.fragment
        <React.Fragment>
            <td>Name</td>
            <td>Vishwas</td>
        </React.Fragment>
    )
}

export default Columns