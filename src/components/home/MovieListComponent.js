import React from "react";
import {fetchProfile} from "../../services/UserServer";
import {Link} from "react-router-dom";

export default class MovieListComponent extends React.Component{

    state={
        movies:[],
        user: {}
    }

    componentDidMount() {
        fetchProfile()
            .catch(e => {})
            .then(currentUser => {
                if(currentUser) {
                    this.setState({
                        user: currentUser,
                        movies: currentUser.movieList
                    })
                }
            })
        // fetch(`http://localhost:8080/api/users/${this.state.user.id}/films`)
        //     .then(response => response.json())
        //     .then(moviesList => {
        //         this.setState({
        //             movies: moviesList
        //         }
        //         )
        //     })
    }

    render() {
        return (
            <div className="container-fluid">
                <h2> {this.state.user.username} Favorite Movies</h2>
                <br/>
                {console.log(this.props.movieList)}
                <ul className="list-group">
                    {/*<li className="list-group-item">*/}
                    {/*    <label>Movie 1</label>*/}
                    {/*        <button className="btn float-right btn-sm white-icon  "*/}
                    {/*        // onClick={() => {*/}
                    {/*        // this.deleteMovie(movie.id);}}*/}
                    {/*        >*/}
                    {/*            X*/}
                    {/*        </button>*/}

                    {/*</li>*/}
                    {this.props.user.movieList.map(movie =>
                            <li className="list-group-item">
                                <Link to={`/movie/${movie.imdb}`}>
                                    {movie.name}</Link>
                            </li>
                        )


                    }
                </ul>
            </div>
        );
    }

}