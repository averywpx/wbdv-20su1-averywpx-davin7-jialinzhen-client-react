import React from "react";
import {Link} from "react-router-dom";

//setting: about, recourse, contact info, club calendar, member list

export default class LeaderWorksiteComponent extends React.Component{
    state = {
        tabs: this.props.match.params.tabs,
    }

    setTabs = (tabs, select) => {
        this.props.history.push(`/${tabs}/leader-worksite`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.tabs !== this.props.match.params.tabs) {
            this.setState({
                tabs: this.props.match.params.tabs
            })
        }
    }

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
                            Worksite</a>

                    </div>

                    <div className="collapse navbar-collapse col-8" id="navbarTogglerDemo03">

                        <ul className="navbar-nav mr-auto float-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Assign Tasks <span
                                        className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calendar </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add Event</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./member-list/setting">Setting</a>
                            </li>
                            {/*<li className="nav-item active">*/}
                            {/*    <a className="nav-link" href="#">*/}
                            {/*        <i className="fa fa-plus" aria-hidden="true"></i></a>*/}
                            {/*</li>*/}
                        </ul>


                    </div>


                    <div className="col-1 float-right">
                        <button className="float-right btn btn-lg btn-secondary">
                            <i className="fa fa-user white-icon" aria-hidden="true"></i>
                        </button>
                    </div>


                </nav>


                <h2>Assign Tasks</h2>
                <br/>
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="card ">
                        <div className="card-header">
                            Member 1
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Task 1</li>
                            <li className="list-group-item">Task 2</li>
                            <li className="list-group-item">Task 3</li>
                        </ul>
                    </div>

                    <br/>

                    </div>
                </div>
            </div>

        );
    }

}

