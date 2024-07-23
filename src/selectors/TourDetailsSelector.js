import { createSelector } from 'reselect';

const isNullOrUndefinedOrBlank=(value)=>(value===null)||(value===undefined)||(value==="")||(value.length===0)

const getTripDetails=(store)=>{

    return isNullOrUndefinedOrBlank(store) ? null : store;
}


export const TourDetailsSelector = createSelector(
    getTripDetails,

    (tripDetails) => {
        console.log("--tripDetails-----",tripDetails)
        return tripDetails;
    },
);
