import React from "react";

//클래스 Secound는 React.Component를 참조하기 때문에 render method를 가지고 있음
class Secound extends React.Component{
    constructor(props){
        super(props);
        console.log("hello");
    }
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({count : current.count + 1})); //function방식으로 가져옴  
    };
    minus = () => {
        this.setState(current => ({ count : current.count - 1}));
    };
    //Mounting
    componentDidMount(){
        console.log("component rendered ");
    }
    //Update
    componentDidUpdate(){
        console.log("Update");
    }
    //Unmount
    componentWillUnmount(){
        console.log("goodbye component")
    }
    render(){
        console.log("I'm rendering");
        return (
            <div>
                <h1>The Number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        ); 
    } 
}

export default Secound;
