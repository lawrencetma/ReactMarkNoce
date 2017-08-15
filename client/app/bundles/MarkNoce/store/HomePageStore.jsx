import { createStore } from 'redux';
import helloWorldReducer from '../reducers/HomePageReducer';

const configureHomePage = (
  createStore(HomePageReducer)
);

export default configureHomePage;