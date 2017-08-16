import { combineReducers } from 'redux';
import { HOMEPAGE_UPDATE } from '../constants/HomePageConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const HomePageReducer = combineReducers({ name });

export default HomePageReducer;
