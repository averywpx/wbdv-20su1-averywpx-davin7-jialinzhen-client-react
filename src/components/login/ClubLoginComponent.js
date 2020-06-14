import React from "react";
import {Link} from "react-router-dom";

export default class ClubLoginComponent extends React.Component {

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
                               title="Use this username to login"/>
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
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-primary form-control wbdv-button wbdv-login"
                           href="./user-home-page">
                            Login
                        </a>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col">
                        <a className="float-left"
                           href="">
                            Forget Password?
                        </a>
                    </div>

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