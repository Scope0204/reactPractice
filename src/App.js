import React from "react";
import PropTypes from "prop-types";

//App은 React.Component를 참조하기 때문에 render method를 가지고 있음
class App extends React.Component{
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({count : current.count + 1})); //function방식으로 가져옴  
    };
    minus = () => {
        this.setState(current => ({ count : current.count - 1}));
    };
    render(){
        return (
            <div>
                <h1>The Number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        ); 
    } 
}

export default App;
