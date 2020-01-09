import React from "react";
import axios from "axios";

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async() => { //async() : 비동기 
        //axios는 시간이 좀 걸린다
        //await : 기다려라 , es6문법, async()를 사용해야 await키워드를 사용한다
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // axios.get(url);
        //await가 끝난후 실행됨
    }
    componentDidMount(){
        /*
        setTimeout(() => {
            this.setState({isLoading: false , book: true}); //state설정
        }, 6000); // timeout 은 js임
        */

        this.getMovies();

    }
    render() {
        const {isLoading} = this.state;
        return <div>{isLoading? "Loading.." : "We are ready"}</div>;
    }
}

export default App;
