import React from "react";
import ClubService from "../../services/ClubService";
import ClubHomePageComponent from "../club-home-page/ClubHomePageComponent";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {

    //todo: if register as president, add new club. If register as member, check club name.

    state = {
        club: [

        ],
        newClubName: ''
    }

    //add club
    addName = (title) =>
        ClubService.createClub({
            title: title,
            president: 'someone',
            modified: (new Date()).toDateString()
        })
            .then(theActualNewClub =>
                this.setState((prevState) => {
                    return {
                        club: [
                            ...prevState.club,
                            theActualNewClub
                        ]
                    }
                }))

    render() {
        return (
            <div className="container-fluid">
                <h1>Register</h1>

                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="Someone"
                               title="Use this username to login"/>
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
                    <label htmlFor="inputPassword"
                           className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-field wbdv-password"
                               id="inputPassword"
                               placeholder="********"/>
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
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">

                            <Link to={`/club-home-page`}>
                                <button className="btn btn-primary form-control">
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
                        <a className="float-right"
                           href="../course-list/course-list.template.client.html">
                            Cancel
                        </a>
                    </div>
                </div>


            </div>
        );
    }

}

// onClick={
// () => this.addName(this.state.newClubName)}