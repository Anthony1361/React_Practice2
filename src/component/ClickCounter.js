import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class HigherOrderComponent extends Component{

    // Commented out to avoid the duplication of code.......//

    // constructor(props){
    //     super(props)

    //     this.state ={
    //         count : 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState (prevState => {
    //         return {count : prevState.count + 1}
    //     })
        
    // }

    render(){
        // const {count} = this.state
        const {count, incrementCount} = this.props
        return(
            <div>
                <button onClick={incrementCount}> Clicked {count} times</button>
              {/* <button onClick={this.incrementCount}> {this.props.name} Clicked {count} times</button> */}
            </div>
        )
    }
}

// the 5 is for the incrementNumber , which can be removed
export default UpdatedComponent(HigherOrderComponent, 5)