import React, { Component } from 'react';

class ClassComponent extends Component {
 constructor(){
     super();
     this.state={
         x : 0,
         y : 0
     }
 }
 
 Position = e =>{
     this.setState({x: e.clientX , y: e.clientY})
 }

 componentDidMount(){
    window.addEventListener('mousemove',this.Position)
 }

 componentDidUpdate(){
    window.addEventListener('mousemove',this.Position)
 }

 componentWillUnmount(){
     window.removeEventListener('mousemove',this.P)
 }
 

    render() {
        return (
            <div>
               X-axis -{this.state.x}  Y-axis -{this.state.y}
            </div>
        );
    }
}

export default ClassComponent;