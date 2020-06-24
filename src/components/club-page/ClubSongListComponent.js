import React from "react";

export default class ClubSongListComponent extends React.Component{

    render() {
        return (
            <div className="container-fluid">
                <h3>Choose a song for meeting!</h3>
                <br/>
                <ul className="list-group">
                    <li className="list-group-item">Song 1</li>
                    <li className="list-group-item">Song 2</li>
                </ul>
            </div>
        );
    }

}