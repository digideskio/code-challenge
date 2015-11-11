import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Animate from 'react-addons-css-transition-group';

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.parseDate = this.parseDate.bind(this);
    this.parsed = this.parsed.bind(this);
    this.encodeURL = this.encodeURL.bind(this);
  }

  parseDate(tdate) {
    const system_date = new Date(Date.parse(tdate));
    const user_date = new Date();
    const diff = Math.floor((user_date - system_date) / 1000);
    switch(true) {
      case (diff <= 1):
        return "just now";
      case (diff < 20):
        return diff + " seconds ago";
      case (diff < 40):
        return "half a minute ago";
      case (diff < 60):
        return "less than a minute ago";
      case (diff <= 90):
        return "one minute ago";
      case (diff <= 3540):
        return Math.round(diff / 60) + " minutes ago";
      case (diff <= 5400):
        return "1 hour ago";
      case (diff <= 86400):
        return Math.round(diff / 3600) + " hours ago";
      case (diff <= 129600):
        return "1 day ago";
      case (diff < 604800):
        return Math.round(diff / 86400) + " days ago";
      case (diff <= 777600):
        return "1 week ago";
      default:
        return "on " + system_date;
    }
  }

  parsed(string) {
    var split = string.split(' ');
    var parsedString = split.map((word, index) => {
        if(word[0] === '@' && word[1]) {
          return this.encodeURL(word, index);
        } else if (index !== 0 && word[0] !== '@') {
          return ' ' + word + ' ';
        }

        return word + ' ';
    });

    return parsedString;
  }

  encodeURL(term, key) {
    const cleanTerm = term.replace(/[|&;$%:"<>()+,]/g, "");

    return (
      <a href={ 'https://twitter.com/' + cleanTerm.substr(1) } key={ key }>{ cleanTerm }</a>
    );
  }

  render() {
    const time = this.parseDate(this.props.created_at);
    const tweet = this.parsed(this.props.text);
    console.log(tweet)

    return (
      <Animate
        transitionName='tweetAnimation'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <li key={ this.props.key }><Panel className='message' bsStyle='primary' header={ time }>{ tweet }</Panel></li>
      </Animate>
    );
  }
}
