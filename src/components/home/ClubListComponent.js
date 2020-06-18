import React from "react";
import '../css/ClubListComponent.css'

export default class ClubListComponent extends React.Component{
    render() {
        return (
            <div className="container-fluid">

                <table className="table table-striped ">
                    <thead>
                    <tr className="table-dark">
                        <th>Club Name</th>
                        <th className="d-none d-lg-block">Category</th>
                        <th>President</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="../club-page/club-page.template.client.html">
                            <i className="fa  fa-file-text blue-file-icon"></i>
                            Club 1
                        </a></td>
                        <td className="d-none d-lg-block"><a
                            href="../club-page/club-page.template.client.html">
                            Computer Science
                        </a></td>
                        <td><a
                            href="../club-page/club-page.template.client.html">
                            Someone
                        </a></td>
                    </tr>


                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>

                {/*<button className="bottom-right-10px btn btn-danger">*/}
                {/*    <i className="fa fa-plus"></i>*/}
                {/*</button>*/}

            </div>
        );
    }
}
