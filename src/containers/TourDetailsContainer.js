// src/containers/TourDetailsContainer.js
import { connect } from 'react-redux'
import { fetchTripDetail } from '../actions/masterData.js' // Ensure this is the correct path to your action creator
import TourDetail from '../pages/tourDetail.js'
import { isNullOrUndefinedOrBlank } from '../helper/utils.js'

const mapStateToProps = (state) => {
    const masterTripData = state.masterData.tripData
    const tripData = isNullOrUndefinedOrBlank(masterTripData)
        ? null
        : masterTripData
    return {
        tripData: tripData,
    }
}

const mapDispatchToProps = {
    getTripDetail: (tripId) => {
        return fetchTripDetail(tripId)
    },
}

const TourDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TourDetail)

// TourDetailsContainer.displayName = 'TourDetailsContainer';

export default TourDetailsContainer
