import React from "react";
import {Link} from "react-router-dom";

export default class ClubLoginComponent extends React.Component {

    state = {
        username: '',
        password: ''
    }

    login = () => {
        fetch("http://localhost:8080/api/login", {
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(currentUser => {
                if (currentUser)
                    //todo: go to home page
                    this.props.history.push("/profile")
            })

    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Login</h1>

                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="Someone"
                               title="Use this username to login"
                               onChange={(e) => this.setState({username: e.target.value})}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword"
                           className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-field wbdv-password"
                               id="inputPassword"
                               placeholder="********"
                               onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <Link to={'./profile'}>
                            <button className="btn btn-primary form-control"
                                    onClick={this.login}
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col">
                        <a className="float-right"
                           href="./register">
                            Register
                        </a>
                    </div>
                </div>


            </div>
        )


    }
}