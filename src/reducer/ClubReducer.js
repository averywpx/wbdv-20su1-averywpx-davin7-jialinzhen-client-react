const initialState = {
    newClubTitle: 'New Club',
    clubs: [
    ]
}

const ClubReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FIND_ALL_CLUBS":
            return {
                ...state,
                clubs: action.actualClubs
            }


        case "CREATE_CLUB":
            return {
                ...state,
                clubs: [...state.clubs, action.newClub]
            }

        case "DELETE_CLUB":
            return {
                ...state,
                clubs: state.clubs.filter(club => club.id !== action.clubId)
            }

        case "UPDATE_CLUB":
            return {
                ...state,
                clubs: state.clubs.map(
                    club => club.id === action.updatedClub.id ?
                        action.updatedClub : club )
            }

        // case "UPDATE_CLUB":
        //     return {
        //         ...state,
        //         clubs: state.clubs.map(
        //             club => club._id === action.updatedclub._id ?
        //                 action.updatedclub : club )
        //     }
        default:
            return state
    }
}

export default ClubReducer
