//action types
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export const receiveTweets = tweets => {
  return {
    type: RECEIVE_TWEETS,
    listOfTweets: tweets,
  };
}

export const fetchTweets = user => {
  return function(dispatch) {
    fetch('/tweets', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'user': user,
      }),
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch(receiveTweets(response));
    });
  };

  return null;
}
