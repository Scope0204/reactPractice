import React from "react";

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false , book: true}); //state설정
        }, 6000); // timeout 은 js임
    }
    render() {
        const {isLoading} = this.state;
        return <div>{isLoading? "Loading.." : "We are ready"}</div>;
    }
}

export default App;
