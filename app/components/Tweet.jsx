import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Animate from 'react-addons-css-transition-group';

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.parseDate = this.parseDate.bind(this);
    this.parsed = this.parsed.bind(this);
    this.flatten = this.flatten.bind(this);
    this.encodeURL = this.encodeURL.bind(this);
    this.encodeTwitterURL = this.encodeTwitterURL.bind(this);
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

// Temporary methods for parsing and flattening
// TODO: split all characters to preserve all characters and parse it instead
// of splitting on whitespace
// TODO: get hashtags to work
// TODO: other types of URLs (http, www, etc)

  flatten(array) {
    var result = [];

    array.forEach(word => {
      if(Array.isArray(word)) {
        word.forEach(nested => {
          result.push(nested);
        })
      }

      result.push(word);
    })

    return result;
  }

  parsed(string) {
    const split = string.split(/\s/);
    const parsedStrings = split.map((word, index) => {
        if(word[0] === '@' && word[1]) {
          let newWord = word.match(/@(\w+)|([$&+,:;=?@#|'<>.^*()%!-])/g);
          if(newWord.length > 1) {
            return [this.encodeTwitterURL(newWord[0]), ...newWord.slice(1)];
          } else {
            return this.encodeTwitterURL(newWord[0]);
          }
        }

        if(word.substr(0, 8) === 'https://') {
          let newWord = word.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
            return this.encodeURL(newWord[0]);
        }

        return ' ' + word + ' ';
    });

    const hello = this.flatten(parsedStrings);
    return hello;
  }

  encodeTwitterURL(term) {
    return React.createElement('a', {href: 'https://twitter.com/' + term}, ' ' + term + ' ');
  }

  encodeURL(term) {
    return React.createElement('a', {href: term}, ' ' + term + ' ');
  }

  render() {
    const time = this.parseDate(this.props.created_at);
    const tweet = this.parsed(this.props.text);

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
