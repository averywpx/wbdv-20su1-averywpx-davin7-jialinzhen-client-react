import React from "react";
import {Link} from "react-router-dom";

export default class ClubEventListComponent extends React.Component {
    state = {
       // event: this.props.event,
        newEventName: 'New Event',
        // newEventTime: '',
        // newEventLocation: '',
        // newEventContent: '',
        editingEvent: {}
    }

    componentDidMount() {
        console.log(this.props.match.params.clubId)
        console.log(this.state)
        this.props.findEventsForClub(this.props.match.params.clubId)
        console.log(this.props)
    }

    updateEventName = (newName) =>
        this.setState(prevState => ({
            event: {
                ...prevState.event,
                name: newName
            }
        }))

    updateEventTime = (newTime) =>
        this.setState(prevState => ({
            event: {
                ...prevState.event,
                time: newTime
            }
        }))

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevProps)
    //     console.log(this.props)
    //     console.log(prevProps.clubId !== this.props.clubId)
    //     //todo: may cause update issue
    //     // if (prevProps.match.params !== this.props.match.params) {
    //     if (false) {
    //         this.props.findEventsForClub(this.props.match.params.clubId)
    //     }
    // }

    render() {
        return (
            <div className="container-fluid">

                <h2>Events</h2>
                <br/>
                <ul className="list-group">
                    {/*<li className="list-group-item">*/}
                    {/*    <h4>Event 1</h4>*/}
                    {/*<p>am</p>*/}
                    {/*<p>1111</p>*/}
                    {/*<p>test</p>*/}
                    {/*</li>*/}

                    {
                        //use input date for where
                        this.props.events.map(event =>
                            <li className="list-group-item"
                                key={event.id}>
                                <div>
                                    {
                                        this.state.editingEvent.id !== event.id &&
                                        <div>
                                            <h4>{event.name}</h4>
                                            <p>When: {event.time}</p>
                                            <p>Location: {event.location}</p>
                                            <p>{event.content}</p>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => this.setState({editingEvent: event})}>
                                                Edit
                                            </button>
                                        </div>
                                    }
                                    {this.state.editingEvent.id === event.id &&
                                    <div>
                                        <div>
                                            <label htmlFor="eventName"
                                                   className="col-sm-2 col-form-label">
                                                Event:
                                            </label>
                                            <input
                                                onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        editingEvent: {
                                                            ...prevState.editingEvent,
                                                            name: e.target.value
                                                        }
                                                    }))
                                                }}
                                                   className="form-control font-italic"
                                                   defaultValue={this.state.editingEvent.name}
                                                   id="eventName"
                                                   type={'text'}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="eventTime"
                                                   className="col-sm-2 col-form-label">
                                                When:
                                            </label>
                                            <input onChange={(e) => {
                                                this.setState(prevState => ({
                                                    editingEvent: {
                                                        ...prevState.editingEvent,
                                                        time: e.target.value
                                                    }
                                                }))
                                            }}
                                                   className="form-control font-italic"
                                                   defaultValue={this.state.editingEvent.time}
                                                   id="eventTime"
                                                   type={'date'}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="eventLocation"
                                                   className="col-sm-2 col-form-label">
                                                Location:
                                            </label>
                                            <input onChange={(e) => {
                                                this.setState(prevState => ({
                                                    editingEvent: {
                                                        ...prevState.editingEvent,
                                                        location: e.target.value
                                                    }
                                                }))
                                            }}
                                                   className="form-control font-italic"
                                                   defaultValue={this.state.editingEvent.location}
                                                   id="eventLocation"
                                                   type={'text'}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="eventContent"
                                                   className="col-sm-2 col-form-label">
                                                Location:
                                            </label>
                                            <input onChange={(e) => {
                                                this.setState(prevState => ({
                                                    editingEvent: {
                                                        ...prevState.editingEvent,
                                                        content: e.target.value
                                                    }
                                                }))
                                            }}
                                                   className="form-control font-italic"
                                                   defaultValue={this.state.editingEvent.content}
                                                   id="eventContent"
                                                   type={'text'}
                                            />
                                        </div>


                                        <button className="btn btn-success add-margin3"
                                                onClick={() => {
                                                    //this.props.updateClub(this.state.club.id, this.state.club)
                                                    this.setState({editingEvent: {}})
                                                }}>
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                        </button>

                                        <button className="btn btn-danger"
                                                onClick={() => this.props.deleteEvent(event.id)}
                                        >
                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>


                                    </div>

                                    }
                                </div>
                            </li>
                        )
                    }
                    <li className="list-group-item">
                        <h4>New Event</h4>
                        <div>
                            <label htmlFor="eventName"
                                   className="col-sm-2 col-form-label">
                                Event:
                            </label>
                            <input onChange={(event) => this.setState({
                                newEventName: event.target.value
                            })}
                                   className="form-control font-italic"
                                   defaultValue={this.state.newEventName}
                                   placeholder="New Name"
                                   id="eventName"
                                   type={'text'}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventTime"
                                   className="col-sm-2 col-form-label">
                                When:
                            </label>
                            <input onChange={(event) => this.setState({
                                newEventTime: event.target.value
                            })}
                                   className="form-control font-italic"
                                   defaultValue={this.state.newEventTime}
                                   id="eventTime"
                                   type={'date'}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventLocation"
                                   className="col-sm-2 col-form-label">
                                Location:
                            </label>
                            <input onChange={(event) => this.setState({
                                newEventLocation: event.target.value
                            })}
                                   className="form-control font-italic"
                                   defaultValue={this.state.newEventLocation}
                                   placeholder="New Address"
                                   id="eventLocation"
                                   type={'text'}
                            />
                        </div>
                        <div>
                            <label htmlFor="eventContent"
                                   className="col-sm-2 col-form-label">
                                Location:
                            </label>
                            <input onChange={(event) => this.setState({
                                newEventContent: event.target.value
                            })}
                                   className="form-control font-italic"
                                   defaultValue={this.state.newEventContent}
                                   placeholder="New Content"
                                   id="eventContent"
                                   type={'text'}
                            />
                        </div>
                        <br/>
                        <div>
                            <button className="btn btn-danger float-right"
                                    onClick={() => this.props.createEvent(
                                        this.props.match.params.clubId,
                                        {
                                            name: this.state.newEventName,
                                            time: this.state.newEventTime,
                                            location: this.state.newEventLocation,
                                            content: this.state.newEventContent
                                        })}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </li>
                </ul>


                <br/>


            </div>
        );
    }

}

//update: onChange={(event) => this.updateClubName(event.target.value)}

