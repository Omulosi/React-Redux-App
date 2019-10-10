import { combineReducers } from 'redux';
import * as actions from './actions';

const initialState = {
  loading: false,
  error: null,
  data: {},
}

const weatherReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case actions.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
        error: null
      }

    case actions.FETCH_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }


    default:
      return state;
  }
}

const updateLocationReducer = (state='Nairobi', action) => {
  switch(action.type) {
    case actions.ON_SUBMIT:
      return action.payload

    default:
      return state;
  }
}

const reducers = combineReducers({
  state: weatherReducer,
  location: updateLocationReducer
})

export default reducers;
