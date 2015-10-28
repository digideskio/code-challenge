import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';

export default class TweetList extends Component {
  render() {
      if(this.props.listOfTweets.length) {
        if(this.props.listOfTweets[0].error) {
          return (
            <div>The Twitter handle you entered does not exist.</div>
          )
        } else {
          return (
            <ul className='listStyle'>
              <div className='userName'>@{this.props.listOfTweets[0].user.screen_name}</div>
              {this.props.listOfTweets.map((tweet, index) =>
                <Tweet {...tweet} key={index} />
              )}
            </ul>
          );
        }
      } else {
        return (
          <div></div>
        );
      }
    }
}
