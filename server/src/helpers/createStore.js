import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import reducers from '../client/reducers'

export default (req) => {
  const api = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get('cookie') || '' }
  })

  return createStore(
    reducers, 
    {},
    applyMiddleware(thunk.withExtraArgument(api))
  )
}