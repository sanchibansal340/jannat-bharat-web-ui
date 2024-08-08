import { FETCH_TRIP_DETAIL } from '../actions/masterData'
import { takeEvery, all, put, call } from 'redux-saga/effects'
import { updateTripData } from '../actions/masterData'
import { fetchData } from '../services/TripService'

export function* getTripDetail(action) {
    const url = `/trips/tripDetail/${action.tripId}`
    try {
        const items = yield call(fetchData, url)
        yield put(updateTripData(items))
    } catch (error) {
        console.error('Failed to fetch items', error)
        // Handle error appropriately, e.g., dispatch an error action
    }
}
export default function* masterDataSaga() {
    yield all([takeEvery(FETCH_TRIP_DETAIL, getTripDetail)])
}
