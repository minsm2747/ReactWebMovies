import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
                    <h2>{this.props.since}</h2>
                        <h3>{this.props.country}</h3>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSKHfpHDXXBd4SeYfoiMo0Q0ivn5WGtvwPiw&usqp=CAU" />
            <img src={this.props.poster} />
        );
    }
}

export default Movie;