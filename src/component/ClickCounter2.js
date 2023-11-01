import React, {Component} from "react";

class RenderProps1 extends Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         count : 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count : prevState.count + 1}
    //     })
    // }

    render(){
        // Extracting count from the state and include it in the jsx
        const {count, incrementCount} = this.props
        // ..................................
        return(
            <div>
              <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default RenderProps1