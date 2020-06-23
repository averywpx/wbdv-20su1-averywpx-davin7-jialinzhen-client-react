import React from "react";
import {fetchProfile} from "../../services/UserServer";

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
                    this.setState({user: currentUser})
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
                <ul className="list-group">
                    <li className="list-group-item">
                        <label>Movie 1</label>
                            <button className="btn float-right btn-sm white-icon  "
                            // onClick={() => {
                            // this.deleteMovie(movie.id);}}
                            >
                                X
                            </button>

                    </li>
                </ul>
            </div>
        );
    }

}