import {connect} from "react-redux";
import ClubEventListComponent from "../components/club-page/ClubEventListComponent";
import {findEventsForClub, createAEvent, deleteEvent, updateEvent} from "../services/EventService";
import {createClub} from "../services/ClubService";


const stateToPropertyMapper = (state, ownProps) => {
   // console.log(this.params)
    console.log(ownProps)
    return {
        events: state.EventReducer.events,
        newEventTitle: state.EventReducer.newEventTitle,
        params: ownProps.params
        // ownProps: ownProps
    }
}

const dispatchToPropertyMapper = (dispatch) => ({
    findEventsForClub: (clubId) => {
        findEventsForClub(clubId)
            .then(actualEvents => dispatch({
                type: "FIND_EVENTS_FOR_CLUB",
                actualEvents
            }))
    },
    createEvent: (cid, newEvent) =>
        createAEvent(cid, newEvent)
            .then(actualEvent => dispatch({
                type: 'CREATE_EVENT',
                newEvent: actualEvent
            })),
    deleteEvent: (eventId) =>
        deleteEvent(eventId)
            .then(status => dispatch({
                type: "DELETE_EVENT",
                eventId: eventId
            })),
    updateEvent: (eventId, newEventData) => {
        updateEvent(eventId, newEventData)
            .then(status => dispatch({
                type: 'UPDATE_EVENT',
                updatedEvent: newEventData
            }))
    }
})

const EventListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ClubEventListComponent)

export default EventListContainer