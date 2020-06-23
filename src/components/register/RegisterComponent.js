import React from "react";
import ClubService from "../../services/ClubService";
import ClubPageComponent from "../club-page/ClubPageComponent";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {

    //todo: if register as president, add new club. If register as member, check club name.

    state = {
        username: '',
        password: '',
        error: null
    }


    //todo: throw error when the username and password is empty
    register = () => {
        fetch("http://localhost:8080/api/register", {
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            credentials: "include"
        })
            .then(response => response.json())
            .catch(e => {
                this.setState({
                    error: 'Unable to register'
                })
            })
            .then(currentUser => {
                if(currentUser) {
                    this.props.history.push("/profile")
                }
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Register</h1>

                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                }

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
                    <label htmlFor="clubName"
                           className="col-sm-2 col-form-label">Club Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                               onChange={(event) => this.setState({
                                   newCLubName: event.target.value
                               })}
                               value={this.state.newClubName}
                               className="form-control wbdv-field wbdv-username"
                               id="clubName"
                               placeholder="Some Club"
                               title="club you want to join in"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="category"
                           className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="category"
                               placeholder="Club Type"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="role"
                           className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-10">
                        <select className="custom-select"
                                title="What's your role in a club?">
                            <option defaultValue="President">President</option>
                            <option value="Member">Member</option>
                        </select>
                    </div>
                </div>




                <div className="form-group row">
                    <label htmlFor="verifyPassword"
                           className="col-sm-2 col-form-label">Verify Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-field wbdv-password-verify"
                               id="verifyPassword"
                               placeholder="********"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Gender</label>
                    <div className="col-sm-4 custom-control custom-radio">
                        <input type="checkbox"
                               className="custom-control-input"
                               id="male"
                               name="gender"/>
                        <label htmlFor="male" className="custom-control-label">Male</label>
                    </div>
                    <div className="custom-control col-sm-5 custom-radio">
                        <input type="checkbox"
                               className="custom-control-input"
                               id="female"
                               name="gender"/>
                        <label htmlFor="female" className="custom-control-label">Female</label>
                    </div>

                </div>
                <div className="form-group row">
                    <label htmlFor="phone"
                           className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control wbdv-field wbdv-phone"
                               id="phone"
                               placeholder="(xxx)-xxx-xxxx"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="email"
                           className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control wbdv-field wbdv-email"
                               id="email"
                               placeholder="example@gmail.com"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">

                        <Link to={`/club-home-page`}>
                                <button className="btn btn-primary form-control"
                                        onClick={this.register}>
                                    Register
                                </button>
                        </Link>

                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col">
                        <a className="float-left wbdv-link wbdv-login"
                           href="./login">
                            Login
                        </a>
                    </div>

                    <div className="col">
                        <Link className="float-right"
                           to="/">
                            Cancel
                        </Link>
                    </div>
                </div>


            </div>
        );
    }

}

// onClick={
// () => this.addName(this.state.newClubName)}