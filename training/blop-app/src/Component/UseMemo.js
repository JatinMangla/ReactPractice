import React, { Component } from 'react'
import MemoComp from '../index'
class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Mangla'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Jatin'
            })
        }, 2000)
    }
    render() {
        console.log('*********Parent Comp render************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}
export default ParentComp