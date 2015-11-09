import React, { Component, PropTypes } from 'react';
import { PageHeader, Alert } from 'react-bootstrap';
import Tweet from './Tweet';

export default class TweetList extends Component {
  render() {
      if(this.props.listOfTweets.length) {
        if(this.props.listOfTweets[0].error) {
          return (
            <div className='doesNotExist'>
              <Alert>The Twitter handle you entered does not exist.</Alert>
            </div>
          )
        } else {
          return (
            <ul className='listStyle'>
              <PageHeader>{'@' + this.props.listOfTweets[0].user.screen_name + '\'s latest tweets'}</PageHeader>
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
