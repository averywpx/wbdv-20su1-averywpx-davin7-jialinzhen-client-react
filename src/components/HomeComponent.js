import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
        <h2>Home</h2>
        <br/>
        <div className="list-group">
            <Link className="list-group-item" to='/login'>
                Login
            </Link>
        </div>
        <div className="list-group">
            <Link className="list-group-item" to='/register'>
                Register
            </Link>
        </div>
        <div className="list-group">
            <Link className="list-group-item" to='/club-list'>
                Club List
            </Link>
        </div>
        <div className="list-group">
            <Link className="list-group-item" to='/club-home-page'>
                Club Home Page
            </Link>
        </div>

        <div className="list-group">
            <Link className="list-group-item" to='/member-list'>
                Member List
            </Link>
        </div>


    </div>

export default HomeComponent