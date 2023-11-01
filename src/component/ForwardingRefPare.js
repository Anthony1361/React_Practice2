import React, {Component} from "react";
import ForwardingRefs from "./ForwardingRefs";

class ForwardingRefPare extends Component{
    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
              <ForwardingRefs ref={this.inputRef} ></ForwardingRefs>
              <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardingRefPare