import React from "react";
import {Link} from "react-router-dom";
import {fetchProfile} from "../services/UserServer";

export default class MovieSearchComponent extends React.Component {

    // http://www.omdbapi.com/?i=tt3896198&apikey=68d96315

    state = {
        movies: [
            {title: "Avatar"},
            {title: "Aliens"},
            {title: "Titanic"},
            {title: "Terminator 2"}
        ],

        searchTitle: '',
        error: null,
        user: {},
        username: ''
    }

    componentDidMount() {
        let searchTitle = this.props.match.params.searchTitle;
        console.log(searchTitle)
        if (!searchTitle)
            searchTitle = 'Titanic'
        fetch(`http://www.omdbapi.com/?s=${searchTitle}&apikey=68d96315`)
            .then(response => response.json())
            .then(results => {
                    this.setState({
                        movies: results.Search,
                        searchTitle: searchTitle
                    })
                    if (this.state.movies == null) {
                        this.setState({
                            error: 'Unable to find movie'
                        })
                    }
                }
            )
        fetchProfile()
            .catch(e => {
            })
            .then(currentUser => {
                if (currentUser) {
                    this.setState({user: currentUser})
                }
            })

    }

    searchMovies = (title) => {
        this.props.history.push(`/search/${title}`)
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=68d96315`)
            .then(response => response.json())
            .then(results => {
                    this.setState({
                        movies: results.Search
                    })
                    if (results !== null) {
                        this.setState({
                            error: 'Unable to find movie'
                        })
                    }
                }
            )

    }


    render() {
        return (
            <div>
                <Link to={'/profile'}>
                    <button className={'btn btn-primary'}>
                        Profile
                    </button>
                </Link>
                <br/>
                <h2>Search Movies {this.state.user.username}</h2>
                {console.log(this.state.movies)}
                {console.log(this.state.error)}

                {
                    this.state.movies === null &&
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                }


                <div className={'row'}>
                    <div className={'col-9'}>
                        <input
                            className={`form-control add-margin3`}
                            onChange={e => this.setState({searchTitle: e.target.value})}
                            value={this.state.searchTitle}/>
                    </div>
                    <div className={'col-3'}>
                        <button className={`btn btn-success btn-block`}
                                onClick={() => this.searchMovies(this.state.searchTitle)}>
                            Search For Movie
                        </button>
                    </div>
                </div>
                {this.state.movies !== null &&

                <ul className={`list-group`}>
                    {
                        this.state.movies.map((movie, i) =>
                            <li className={`list-group-item`} key={i}>
                                <Link to={`/movie/${movie.imdbID}`}>
                                    {movie.Title}
                                    {/*{movie.imdbID}*/}
                                </Link>
                            </li>
                        )
                    }
                </ul>
                }

            </div>
        )
    }

}