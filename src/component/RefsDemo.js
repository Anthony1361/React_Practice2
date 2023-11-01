import React, {Component} from "react";

class RefsDemo extends Component{

    constructor(props){
        super(props)
        // one way to create and access Ref
        this.inputRef = React.createRef()

        // this second approach is the older approach, just in case u see it in the future, this.callbackRef
        // this.cbRef = null
        // this.setCbRef = (element) => {
        //     this.cbRef = element
        // }
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)

        // for the second approach
        // if (this.cbRef){
        //     this.cbRef.focus()
        // }
    }

    // Accessing the value property of the input Dom node which is available as the current property
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <div>
              <input type="text" ref={this.inputRef}></input> 

              {/* this.setcbRef is the second approach */}
              {/* <input type="text" ref={this.setCbRef}></input>  */}
              <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo