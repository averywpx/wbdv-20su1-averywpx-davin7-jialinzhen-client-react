import ClubReducer from "../reducer/ClubReducer";
import {connect} from "react-redux";
import {findAllClubs, createClub, deleteClub, updateClub} from "../services/ClubService";
import ClubListComponent from "../components/home/ClubListComponent";

const stateToPropertyMapper = (state) => {
    //clubs: state.clubReducer.clubs
    return {
        // clubs: state.ClubReducer.clubs,
        clubs: state.ClubReducer.clubs,
        // clubs: state.ClubReducer.clubs,
        newClubTitle: state.ClubReducer.newClubTitle,
        //params: ownProps.params
        // ownProps: ownProps
    }
}

const dispatchToPropertyMapper = (dispatch) => ({

    findAllClubs: () => {
        findAllClubs()
            .then(actualClubs => dispatch({
                type: "FIND_ALL_CLUBS",
                actualClubs
            }))
    },

    createClub: (newClub) =>
        createClub(newClub)
            .then(actualClub => dispatch({
                type: 'CREATE_CLUB',
                newClub: actualClub
            })),

    deleteClub: (clubId) =>
        deleteClub(clubId)
            .then(status => dispatch({
                type: "DELETE_CLUB",
                clubId: clubId
            })),


    updateClub: (clubId, newClubData) => {
        updateClub(clubId, newClubData)
            .then(status => dispatch({
                type: 'UPDATE_club',
                updatedClub: newClubData
            }))
    },




})

const ClubListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ClubListComponent)

export default ClubListContainer

