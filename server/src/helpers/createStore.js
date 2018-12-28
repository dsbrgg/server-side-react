import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

export default () => createStore(reducers, {}, applyMiddleware(thunk))