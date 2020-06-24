import React from "react";
import {fetchProfile} from "../services/UserServer";

export default class MovieDetailsComponent extends React.Component {

    // http://www.omdbapi.com/?i=tt3896198&apikey=68d96315
    state = {
        movie: {},
        liked: false,
        user: {},
        username: ''
    }

    componentDidMount() {
        const imdbID = this.props.match.params.imdbID
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=68d96315`)
            .then(response => response.json())
            .then(movie => {
                console.log(typeof movie.Actors)
                this.setState({
                    movie: movie
                })
            })

        fetchProfile()
            .catch(e => {
            })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({user: currentUser})
                }
            })
    }

    addMovie = (userid, newMovie) => {
        this.props.history.push(`/search/${newMovie.name}`)
            fetch(`http://localhost:8080/api/users/${userid}/films`, {
                method: 'POST',
                body: JSON.stringify(newMovie),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => response.json())
    }

    // searchMovies = (title) => {
    //     this.props.history.push(`/search/${title}`)
    //     fetch(`http://www.omdbapi.com/?s=${title}&apikey=68d96315`)
    //         .then(response => response.json())
    //         .then(results => {
    //                 this.setState({
    //                     movies: results.Search
    //                 })
    //                 if (results !== null) {
    //                     this.setState({
    //                         error: 'Unable to find movie'
    //                     })
    //                 }
    //             }
    //         )
    //
    // }



    render() {
        return(
            <div>
               <button
               onClick={() => {
                   this.addMovie(
                       this.state.user.id,
                       {
                           name: this.state.movie.Title
                       })
               }}>
                   Add to Favorite Movie List
               </button>
                <h2>
                    Movie Details {this.props.match.params.imdbID} {this.state.user.username}
                </h2>
                <h3>{this.state.movie.Title}</h3>
                <p>Directed by: {this.state.movie.Director}</p>
                <p>{this.state.movie.Plot}</p>
                <h4>Cast</h4>
                {this.state.movie.Actors}
                <ul>
                    {
                        this.state.movie.Actors && this.state.movie.Actors.split(',').map((actor, index) =>
                            <li key={index}>{actor}</li>
                        )
                    }
                </ul>
                <img src={this.state.movie.Poster}/>
            </div>
        )
    }
}