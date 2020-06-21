import React from "react";

export default class ProfileComponent extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <h1>Profile</h1>
                    </div>
                    <div className="col-1">

                        <button className="btn btn-primary float-right add-margin3">
                            Home
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-danger float-right">
                            Delete User
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
                                       value="someone"
                                       placeholder="someone"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword"
                                   className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password"
                                       className="form-control"
                                       id="inputPassword"
                                       placeholder="******"/>
                            </div>
                        </div>

                        <div className="form-group row">

                            <label className="col-sm-3 col-form-label" htmlFor="gender">Gender</label>
                            <div className="custom-control custom-radio custom-control-inline">
                            <div className="col-sm-4 custom-control custom-radio add-margin10">
                                <input type="radio"
                                       className="custom-control-input"
                                       id="male"
                                       name="gender"/>
                                <label htmlFor="male" className="custom-control-label">Male</label>
                            </div>
                            <div className="custom-control float-right col-sm-5 custom-radio">
                                <input type="radio"
                                       className="custom-control-input"
                                       id="female"
                                       name="gender"/>
                                <label htmlFor="female" className="custom-control-label">Female</label>
                            </div>
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
                    </div>

                    <div className="col-4">
                        <ul className="list-group wbdv-Club-list d-none d-lg-block">
                            <li className="list-group-item">
                                <label>Club 1</label>
                                <button className="btn float-right btn-sm white-icon  ">
                                    X
                                </button>
                            </li>
                            <li className="list-group-item">
                                <label>Club 2</label>
                                <button className="btn float-right btn-sm grey-icon">
                                    X
                                </button>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group input-group-sm">
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Add New Club"/>
                                    <button className="btn float-right btn-sm grey-icon">
                                        <i className="fa fa-plus -add-btn"
                                           aria-hidden="true"></i>
                                    </button>

                                </div>

                            </li>
                        </ul>

                        <br/>

                        <ul className="list-group">
                            <li className="list-group-item">
                                <label>Movie 1</label>
                                <button className="btn float-right btn-sm white-icon  ">
                                    X
                                </button>
                            </li>
                            <li className="list-group-item">
                                <label>Movie 2</label>
                                <button className="btn float-right btn-sm grey-icon">
                                    X
                                </button>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group input-group-sm">
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Add New Movie"/>
                                    <button className="btn float-right btn-sm grey-icon">
                                        <i className="fa fa-plus -add-btn"
                                           aria-hidden="true"></i>
                                    </button>

                                </div>

                            </li>
                        </ul>
                        
                    </div>

                </div>

                <br/>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10 ">
                        <a className="btn btn-success form-control wbdv-button wbdv-update"
                           href="">
                            Update
                        </a>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-danger form-control wbdv-button wbdv-logout"
                           href="../course-list/course-list.template.client.html">
                            Logout
                        </a>
                    </div>
                </div>


            </div>
        );
    }

}