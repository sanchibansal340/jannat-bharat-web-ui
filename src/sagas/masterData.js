import {FETCH_TRIP_DETAIL} from "../actions/masterData";
import { takeEvery,all,put,call,loader } from "redux-saga/effects";
import { updateTripData } from "../actions/masterData";

import { fetchData } from "../helper/fetch";


export function* getTripDetail(action) {
    const url=`http://127.0.0.1:8000/trips/tripDetail/${action.tripId}`
    try {
        const items = yield call(fetchData,url);
        yield put(updateTripData(items));
      } catch (error) {
        console.error('Failed to fetch items', error);
        // Handle error appropriately, e.g., dispatch an error action
      }


}
export default function* masterDataSaga() {
    yield all([
        takeEvery(FETCH_TRIP_DETAIL, getTripDetail),
    ])
}