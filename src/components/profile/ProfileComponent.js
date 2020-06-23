import React from "react";
import {updateUser} from "../../services/UserServer";
import {Link} from "react-router-dom";

export default class ProfileComponent extends React.Component {
    state = {
        user: {
            username: '',
            password: '',
            email: '',
            gender: '',
            phone: '',
            movieList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/profile", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .catch(e => {
                //todo: go to home page
                this.props.history.push("/")
            })
            .then(user => {
                    this.setState({
                        user: user
                        // username: user.username,
                        // password: user.password,
                        // email: user.email,
                        // phone: user.phone,
                        // gender: user.gender
                    })
            })
    }

    update = () => {
        fetch("http://localhost:8080/api/profile", {
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            credentials: "include"
        })
            .then(response => response.json())
            .then(user => this.setState({
                username: user.username,
                password: user.password,
                email: user.email,
                phone: user.phone,
                gender: user.gender
                //todo: set successful state like register do
            }))

    }

    deleteMovie = (mid) =>{
        //this.props.history.push(`/profile`)
        fetch(`http://localhost:8080/api/films/${mid}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    }

    logout = () => {
        fetch("http://localhost:8080/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))

    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        {console.log(this.state.user)}
                        <h1>Profile {this.state.user.username}</h1>
                    </div>
                    <div className="col-1">
                        <Link to={'/home/clubpage'}>
                            <button className="btn btn-primary float-right add-margin3">
                                Home
                            </button>
                        </Link>
                    </div>
                <div className="col-2">
                    <button className="btn btn-danger"
                            onClick={this.logout}>
                        Logout
                    </button>
                </div>
            </div>

        <br/>
        <div className="alert alert-success wbdv-message" role="alert">
            Profile successfully saved
        </div>
        <div className="row">
            <div className="col-8">
                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               readOnly
                               className="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="someone"
                               defaultValue={this.state.user.username}
                               onChange={(e) => this.setState({
                                   user: {
                                       username: e.target.value
                                   }
                               })
                               }/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword"
                           className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control"
                               id="inputPassword"
                               placeholder="******"
                               defaultValue={this.state.user.password}
                               onChange={(e) => this.setState({
                                   user: {password: e.target.value}
                               })}
                        />
                    </div>
                </div>

                <div className="form-group row">

                    <label className="col-sm-3 col-form-label" htmlFor="gender">Gender</label>
                    <div className="custom-control custom-radio custom-control-inline">
                        <div className="col-sm-4 custom-control custom-radio add-margin10">
                            <input type="radio"
                                   className="custom-control-input"
                                   id="male"
                                   name="gender"
                                   checked={this.state.user.gender === 'male'}
                                   onChange={(e) => this.setState({
                                       user: {password: e.target.value}
                                   })}
                                   defaultValue={'male'}
                            />
                            <label htmlFor="male" className="custom-control-label">Male</label>
                        </div>
                        <div className="custom-control float-right col-sm-5 custom-radio">
                            <input type="radio"
                                   className="custom-control-input"
                                   id="female"
                                   name="gender"
                                   checked={this.state.user.gender === 'female'}
                                   onChange={(e) => this.setState({
                                       user: {password: e.target.value}
                                   })}
                                   defaultValue={'female'}/>
                            <label htmlFor="female" className="custom-control-label">Female</label>
                        </div>
                    </div>
                </div>

                {  this.state.user.username &&
                    <div className="form-group row">
                        <label htmlFor="phone"
                               className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control wbdv-field wbdv-phone"
                                   id="phone"
                                   placeholder="(xxx)-xxx-xxxx"
                                   defaultValue={this.state.user.phone}
                                   onChange={(e) => this.setState({
                                       user: {
                                           phone: e.target.value
                                       }
                                   })}/>
                        </div>
                    </div>
                }

                <div className="form-group row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control wbdv-field wbdv-email"
                               id="email"
                               placeholder="example@gmail.com"
                               defaultValue={this.state.user.email}
                               onChange={(e) => this.setState({
                                   user: {
                                       email: e.target.value
                                   }
                               })}/>
                    </div>
                </div>
            </div>

            <div className="col-4">
                {/*<ul className="list-group wbdv-Club-list d-none d-lg-block">*/}
                {/*    <li className="list-group-item">*/}
                {/*        <label>Club 1</label>*/}
                {/*        <button className="btn float-right btn-sm white-icon  ">*/}
                {/*            X*/}
                {/*        </button>*/}
                {/*    </li>*/}
                {/*    <li className="list-group-item">*/}
                {/*        <label>Club 2</label>*/}
                {/*        <button className="btn float-right btn-sm grey-icon">*/}
                {/*            X*/}
                {/*        </button>*/}
                {/*    </li>*/}
                {/*    <li className="list-group-item">*/}
                {/*        <div className="input-group input-group-sm">*/}
                {/*            <input type="text"*/}
                {/*                   className="form-control"*/}
                {/*                   placeholder="Add New Club"/>*/}
                {/*            <button className="btn float-right btn-sm grey-icon">*/}
                {/*                <i className="fa fa-plus -add-btn"*/}
                {/*                   aria-hidden="true"></i>*/}
                {/*            </button>*/}

                {/*        </div>*/}

                {/*    </li>*/}
                {/*</ul>*/}

                {/*<br/>*/}
                <h2>Favorite Movies</h2>
                <ul className="list-group">
                    {
                        this.state.user.movieList.map(movie =>
                        <li className="list-group-item">
                            <label>{movie.name}</label>
                        {/*    <button className="btn float-right btn-sm white-icon  "*/}
                        {/*    onClick={() => {*/}
                        {/*    this.deleteMovie(movie.id);*/}
                        {/*}}>*/}
                        {/*        X*/}
                        {/*    </button>*/}
                        </li>
                        )
                    }
                    <li className="list-group-item">
                            <Link to={'search'}>
                            <button className="btn btn-primary float-right btn-sm ">
                                Search and add New Movie
                            </button>
                            </Link>
                    </li>
                </ul>

            </div>

        </div>

        <br/>

        <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10 ">
                <button className="btn btn-success form-control"
                       // onClick={this.update()}
                >
                    Update
                </button>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-danger form-control">
                    Delete User
                </button>
            </div>
        </div>


    </div>
    );
    }

    }


