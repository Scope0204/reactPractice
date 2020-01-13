import React from "react";
import axios from "axios";
import Movie from "./Movie"
import "./App.css"

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async() => { //async() : 비동기 
        //axios는 시간이 좀 걸린다
        //await : 기다려라 , es6문법, async()를 사용해야 await키워드를 사용한다
        //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // axios.get(url);
        //await가 끝난후 실행됨
        //console.log(movies.data.data.movies);

        const {
            data:{
                data:{movies}
            }  
        }= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // axios.get(url);
        //await가 끝난후 실행됨
        this.setState({movies,isLoading: false}); // axios의 moives
    };

    componentDidMount(){
        /*
        setTimeout(() => {
            this.setState({isLoading: false , book: true}); //state설정
        }, 6000); // timeout 은 js임
        */

        this.getMovies();

    }
    render() {
        const {isLoading , movies} = this.state; // movies는 state로 부터 옴
        return ( //javascript class 와 component class 가 혼동 되므로 className이라 해줌(이거는 component class)
        <section className = "container"> 
            {isLoading ? (
             <div className ="loader">
                <span className ="loader_text">Loading..</span>
             </div>
            ) : (
             <div className = "movies">
                {movies.map(movie => (
                 <Movie 
                    key = {movie.id}
                    id={movie.id} 
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                />
                ))}
            </div>
            )}
        </section>
        );
    }
}

export default App;
