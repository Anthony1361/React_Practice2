import React, {Component} from "react";

class RenderProps3 extends Component{

    render(){
        return(
            <div>
              {this.props.render(false)}
            </div>
        )
    }
}

export default RenderProps3