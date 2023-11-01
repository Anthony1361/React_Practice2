import React, {Component} from "react";
import { UserConsumer } from "./UserContext";

// The final step is to consume the userName in the desired component //
class ContextF extends Component{
    render(){
        return(
            
              <UserConsumer>
                {username => {
                   return <div>Hello {username} </div>
                }}
              </UserConsumer>
            
        )
    }
}

export default ContextF