import React, {Component, PureComponent} from 'react'
// This purecomponent was included to prevent unnecessary re-render, only component was initially there //
import RegularComp from './RegularComponent'
import PureComp from './PureComponent'
import MemoComp from './MemoComp'

// component and not purecomponent is needed for Memo
class ParentComp extends Component{
    // extents purecomponent also replaced component
    
    constructor(props){
        super(props)

        this.state = {
            name: 'Vishwas'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Vishwas'
            })
        }, 2000)
    }

    render(){
        console.log('parent comp render')
        return(
            <div>
              <h1>Parent Component</h1>
              <MemoComp name={this.state.name}></MemoComp>
              {/* <RegularComp name={this.state.name}></RegularComp>
              <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp