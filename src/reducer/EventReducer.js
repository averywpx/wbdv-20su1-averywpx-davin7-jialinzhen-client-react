const initialState = {
    newEventTitle: 'New Event',
    events: []
}

const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_EVENTS_FOR_CLUB":
            console.log(action.actualEvents)
            return {
                ...state,
                events: action.actualEvents
            }
        case "CREATE_EVENT":
            return {
                ...state,
                events: [...state.events, action.newEvent]
            }
        case "DELETE_EVENT":
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.eventId)
            }
        case "UPDATE_EVENT":
            return {
                ...state,
                events: state.events.map(
                    event => event.id === action.updatedEvent.id ?
                        action.updatedEvent : event )
            }
        default:
            return state
    }
}

export default EventReducer