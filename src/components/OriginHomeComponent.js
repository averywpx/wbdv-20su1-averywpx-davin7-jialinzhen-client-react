import React from "react";
import {Link} from "react-router-dom";

const OriginHomeComponent = () =>
    <div>
        <h2>Origin</h2>
        <br/>

        <div className="list-group">
            <Link className="list-group-item" to='/home/introduction'>
                Home
            </Link>
        </div>

        <div className="list-group">
            <Link className="list-group-item" to='/profile'>
                Profile
            </Link>
        </div>

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
            <Link className="list-group-item" to='/club-page/events'>
                Club Page
            </Link>
        </div>

        <div className="list-group">
            <Link className="list-group-item" to='/member-list'>
                Member List
            </Link>
        </div>

        <div className="list-group">
            <Link className="list-group-item" to='/leader-worksite'>
                Leader Worksite
            </Link>
        </div>

        <div className="list-group">
            <Link className="list-group-item" to='/member-list/setting'>
                Club Setting
            </Link>
        </div>


    </div>

export default OriginHomeComponent