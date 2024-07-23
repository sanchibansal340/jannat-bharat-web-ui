import actionCreator from "./helper";

export const FETCH_TRIP_DETAIL='FETCH_TRIP_DETAIL';
export const UPDATE_TRIP_DATA='UPDATE_TRIP_DATA';
export const fetchTripDetail=actionCreator(FETCH_TRIP_DETAIL,'tripId')
export const updateTripData=actionCreator(UPDATE_TRIP_DATA,'data')