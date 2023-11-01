import React from "react";

// The OriginalComponent refers to ClickCounter and HoverCounter Component or known as WrappedComponent

// The incrementNumber parenthesis is just to increase count instead of by 1, u can remove it to count from 1
const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {

    // Inserted at the parent HOC to avoid the duplication of code.......//
    constructor(props){
        super(props)

        this.state ={
            count : 0
        }
    }

    incrementCount = () => {
        this.setState (prevState => {
            // return {count : prevState.count + 1}
            return {count : prevState.count + incrementNumber}
        })
        
    }

    render(){
        console.log(this.props.name)
        return <OriginalComponent
         count = {this.state.count}
         incrementCount = {this.incrementCount}></OriginalComponent>
        // return <OriginalComponent name = 'Vishwas'></OriginalComponent>
    }
  } 
  return NewComponent
}

export default UpdatedComponent