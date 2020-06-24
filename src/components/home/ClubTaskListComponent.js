import React from "react";

export default class ClubTaskListComponent extends React.Component{

    render() {
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Task 1</h5>
                        </div>
                        <p className="mb-1">Task 1 description</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Task 2</h5>
                        </div>
                        <p className="mb-1">Task 2 description</p>
                    </a>
                </div>
            </div>
        );
    }

}