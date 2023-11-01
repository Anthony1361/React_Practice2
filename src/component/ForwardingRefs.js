import React from "react";

// function ForwardingRefs() {
//     return(
//         <div>
//           <input type="text"></input>
//         </div>
//     )
// }

// React.forwardRef forwards the ref
const ForwardingRefs = React.forwardRef(
    (props, ref) => {
        return(
            <div>
                {/* this ref is being forwarding from parent to native input element,
                   or this ref will point to the value of the ref attribute from the parent component */}
                <input type="text" ref={ref}></input>
            </div>
        )
    }
) 

export default ForwardingRefs