import React from "react";

export default class ClubTabsComponent extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <h2 id="Clubs ">Clubs</h2>

                <ul className="nav nav-tabs wbdv-Club-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Club 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Club 2</a>
                    </li>
                </ul>
                <br/>

            </div>
        );
    }

}