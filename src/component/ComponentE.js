import React, {Component, useContext} from "react";
import ContextF from "./ComponentF";

// Not necessary just for another option ..//
import UserContext from "./UserContext";

class ContextE extends Component{
   
    // use this if your application supports the public class view syntax instead of ContextE.contextType = UserContext
    static contextType = UserContext

    render(){
        return(
            <div>
                {/* // Not necessary just for another option ..// */}
                 Component E context {this.context} 
                {/* ...................... */}
                <ContextF></ContextF>
            </div>
        )
    }
}

// Not necessary just for another option .. not prefered if your application supports public class view syntax//
// ContextE.contextType = UserContext
// ................................//

export default ContextE