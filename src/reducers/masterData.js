// src/reducers/masterDataReducer.js
import { createReducer } from '@reduxjs/toolkit'
import { UPDATE_TRIP_DATA } from '../actions/masterData'
import { produce } from 'immer'

const initialState = {}

const masterData = createReducer(initialState, (builder) => {
    builder.addCase(UPDATE_TRIP_DATA, (state, action) => {
        return produce(state, (draft) => {
            draft.tripData = action.data
        })
    })
})

export default masterData
