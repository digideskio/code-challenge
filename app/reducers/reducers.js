import { RECEIVE_TWEETS } from '../actions/actions';
import { combineReducers } from 'redux';

export const listOfTweets = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return action.listOfTweets;

  default:
    return state;
  }
}

const app = combineReducers({
  listOfTweets,
});

export default app;
