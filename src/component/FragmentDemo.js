import React from "react";

function FragmentDemo(){
    return(
        // This react.fragment prevents extra div when you inspect the component, that is extra nodes//
        <React.Fragment>
          <h1>Fragment Demo</h1>
          <p>This describes the fragment demo component</p>
        </React.Fragment>
    )
}

export default FragmentDemo