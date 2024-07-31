import { combineReducers } from 'redux'

import masterData from '../reducers/masterData'

const appReducer = combineReducers({
    masterData,
})

export default appReducer
