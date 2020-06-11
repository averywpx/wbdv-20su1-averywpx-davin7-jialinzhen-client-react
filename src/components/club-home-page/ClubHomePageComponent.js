import React from "react";


export default class ClubHomePageComponent extends React.Component{

    render() {
        return (
            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">


                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="col-3">

                        <a className="navbar-brand">
                            Club Name</a>

                    </div>

                    <div className="collapse navbar-collapse col-9" id="navbarTogglerDemo03">

                        <ul className="navbar-nav mr-auto float-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="../event-helper/event-helper.template.client.html"> Add
                                    Event <span
                                        className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calendar </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Todo List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resource</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Setting</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-plus" aria-hidden="true"></i></a>
                            </li>
                        </ul>


                    </div>
                    {/*<div className="col-1 float-right">*/}
                    {/*    <button className="float-right top-right-10px btn btn-lg btn-secondary">*/}
                    {/*        <i className="fa fa-user white-icon" aria-hidden="true"></i>*/}
                    {/*    </button>*/}
                    {/*</div>*/}


                </nav>

                <div className="row">
                    <div className="col-5" id="model">

                        <h2>Upcoming Events</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <label htmlFor="event1" className="col-form-label">Event 1 at:</label>
                                <input className="form-control"
                                       id="event1"
                                       placeholder="connect to event helper"
                                       readOnly/>

                            </li>
                        </ul>

                    </div>

                    <div className="col-7">

                        <h2>Events</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <label>Event 1</label>
                            </li>
                            <li className="list-group-item">
                                <label>Event 2</label>
                            </li>
                            <li className="list-group-item">
                                <label>Event 3</label>
                            </li>
                            <li className="list-group-item">
                                <label>Event 4</label>
                            </li>
                            <li className="list-group-item">
                                <label>Event 5</label>
                            </li>
                        </ul>


                    </div>

                    <br/>


                </div>
            </div>


        )


    }
}