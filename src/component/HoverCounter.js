import React, {Component} from "react";
import UpdatedComponent from "./WithCounter";

class HigherOrderComponent2 extends Component{
    
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
                <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
              {/* <h2 onMouseOver={this.incrementCount}> {this.props.name} Hovered {count} times</h2> */}
            </div>
        )
    }
}

// the 10 is for the incrementNumber , which can be removed
export default UpdatedComponent(HigherOrderComponent2, 10)