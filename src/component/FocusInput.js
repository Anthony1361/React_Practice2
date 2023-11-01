import React, {Component} from "react";
import Input from "./Input";

class FocusInput extends Component{

    constructor(props){
        super(props)

        this.componentRef = React.createRef()
    }

    // instead of using componentDidMount
    focusInput(){
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        this.componentRef.current.focus()
    }

    render(){
        return(
            <div>
              <input type="text" ref={this.componentRef}></input>

              {/* we want when we click on this button on this parent component, the input element in the child 
                 component should receive the focus */}
              <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput