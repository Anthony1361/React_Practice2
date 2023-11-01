import React from "react";

// within the parenthesis distructure the name prop
function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return(
        <div>
           {name}
        </div>
    )
}

// React.memo was to avoid re-rendering this Memo functional component
export default React.memo(MemoComp)
// React.memo(MemoComp) is seen as something called a higher order component