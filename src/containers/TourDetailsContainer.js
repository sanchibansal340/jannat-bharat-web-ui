// src/containers/TourDetailsContainer.js
import { connect } from 'react-redux';
import { fetchTripDetail } from '../actions/masterData.js'; // Ensure this is the correct path to your action creator
import { TourDetailsSelector } from '../selectors/TourDetailsSelector.js'; // Ensure this is the correct path to your selector
import TourDetail from '../pages/tourDetail.js';

const mapStateToProps = (state) => {
    console.log('State in mapStateToProps:', state);
    return {
        tripData: TourDetailsSelector,
    };
};

const mapDispatchToProps = {
    getTripDetail: (tripId) => {
        console.log('Dispatching fetchTripDetail with tripId:', tripId);
        return fetchTripDetail(tripId);
    },
};


const TourDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TourDetail);


// TourDetailsContainer.displayName = 'TourDetailsContainer';

export default TourDetailsContainer;
