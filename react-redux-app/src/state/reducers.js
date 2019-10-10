// import { combineReducers } from 'redux';
import * as actions from './actions';

const initialState = {
  loading: false,
  error: null,
  data: {},
}

export const weatherReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
        error: null
      }

    case actions.FETCH_WEATHER_FAIL:
      return {
        ...state,
        error: action.payload
      }

    case action.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    default:
      return state;
  }
}

