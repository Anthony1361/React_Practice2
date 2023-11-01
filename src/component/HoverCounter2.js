import React, {Component} from "react";

class RenderProps2 extends Component{
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
              <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default RenderProps2