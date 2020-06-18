import React from "react";

export default class ClubEventListComponent extends React.Component{

    render() {
        return (
            <div className="container-fluid">


                        <h2>Events</h2>
                <br/>
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



                    <br/>


            </div>
        );
    }

}