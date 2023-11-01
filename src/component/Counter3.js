import React, {Component} from "react";

// This RenderProps4 will be our container component where we implement the common functionality
class RenderProps4 extends Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

    render(){
        return(
            <div>
              {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default RenderProps4