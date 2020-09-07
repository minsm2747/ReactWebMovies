import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitle = [
//   "Avengers",
//   "Matrix",
//   "Kingdom",
//   "Aquaman"
// ]

// const movieImages = [
//   "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F416%2F2015%2F03%2F27%2F30000469541_99_20150327092605.jpg&type=sc960_832",
//   "https://upload.wikimedia.org/wikipedia/ko/2/26/%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
//   "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxOTAyMTNfMTU3%2FMDAxNTUwMDQ3NDE3Nzg4.ILt5_xmBFWFdYaXgYx9iK8xdwuFVvOs2IyRbOQO75RAg.HEgxmTQL6Ld4kmxlxho2cxDCB_GlyApeDP-svGNxY98g.JPEG%2FI-t1FSj1CY_zbOuOkqaQJ5pd7Olg.jpg&type=sc960_832",
//   "https://www.sporbiz.co.kr/news/photo/201811/289634_219257_142.jpg"
// ]

const movies = [
  {
    title: "어벤저스 (Avengers)",
    poster: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F416%2F2015%2F03%2F27%2F30000469541_99_20150327092605.jpg&type=sc960_832",
    since: "2015",
    country: "미국(USA)"
  },

  {
    title: "매트릭스 (Matrix)",
    poster: "https://upload.wikimedia.org/wikipedia/ko/2/26/%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    since: "1999",
    country: "미국(USA)"
  },

  {
    title: "킹덤 (Kingdom)",
    poster: "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxOTAyMTNfMTU3%2FMDAxNTUwMDQ3NDE3Nzg4.ILt5_xmBFWFdYaXgYx9iK8xdwuFVvOs2IyRbOQO75RAg.HEgxmTQL6Ld4kmxlxho2cxDCB_GlyApeDP-svGNxY98g.JPEG%2FI-t1FSj1CY_zbOuOkqaQJ5pd7Olg.jpg&type=sc960_832",
    since: "2019",
    country: "한국(KOR)"
  },

  {
    title: "아쿠아 맨 (Aquaman)",
    poster: "https://www.sporbiz.co.kr/news/photo/201811/289634_219257_142.jpg",
    since: "2018",
    country: "미국(USA), 호주(AUS)"
  }
]

// function App() {
//   return (
//     <div className="App">
//       {/* <Movie title={movieTitle [0]} poster={movieImages [0]} />
//       <Movie title={movieTitle [1]} poster={movieImages [1]} />
//       <Movie title={movieTitle [2]} poster={movieImages [2]} />
//       <Movie title={movieTitle [3]} poster={movieImages [3]} /> */}
//       {movies.map(movie => {
//         return ( 
//           <Movie 
//             title={movie.title} 
//             poster={movie.poster} 
//             since={movie.since} 
//             country={movie.country} 
//           />
//         )
//       })}
//     </div>
//   );
// }

class App extends Component {
  // Render: ComponentWillMount() => render() => componentDidMount()
  
  // Update: ComponentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => component()

  state = {
    greeting: 'Hello!!'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState ({
        greeting: 'Hello Again!!'
      })
    }, 5000)
  }

  render() {
    console.log('rendering now');
      return (
        <div className="App">
          {this.state.greeting}
          {movies.map((movie, index) => {
            return ( 
              <Movie
                title={movie.title} 
                poster={movie.poster} 
                since={movie.since} 
                country={movie.country}
                key={index} 
              />
            )
          })}
        </div>
      );
  }
}

export default App;
