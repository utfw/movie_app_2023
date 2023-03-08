import React, { Component } from 'react';
import Movie from "../components/Movie";
import axios from 'axios';
import '../styles/Home.css';

export class Home extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async() =>{
    // const {data :{data :{movies}}} 
    const {
      data :{
        data :{
          movies
        }
      }
    } =
    await axios.get('https://yts.mx/api/v2/list_movies.json?genre=animation&sort_by=like_count');
    this.setState({
      isLoading: false,
      movies, //속성:값이 같으면 한번만 써도됨 moives:movies.
    })
  }

  componentDidMount(){
    this.getMovies()
  }

  render() {
    const {isLoading,movies} = this.state;

    return (
      <>
      <section className='container'>
        {isLoading === true ?
        <div className='loader'>
          <span className='load_text'>'Loading...'</span>
        </div> 
        :
          // 정보 받아서 새로운 배열 만드는 방법. 
        <div className='movies'>
          {movies.map((movie,index) => <Movie
                key={index}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
          />
         )}
        </div>
        }
      </section>
      </>
    )
  }
}

export default Home


