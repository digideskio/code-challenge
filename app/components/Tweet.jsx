import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Animate from 'react-addons-css-transition-group';

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.parseDate = this.parseDate.bind(this);
  }

  parseDate(tdate) {
    const system_date = new Date(Date.parse(tdate));
    const user_date = new Date();
    const diff = Math.floor((user_date - system_date) / 1000);
    if (diff <= 1) {return "just now";}
    if (diff < 20) {return diff + " seconds ago";}
    if (diff < 40) {return "half a minute ago";}
    if (diff < 60) {return "less than a minute ago";}
    if (diff <= 90) {return "one minute ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
    if (diff <= 5400) {return "1 hour ago";}
    if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
    if (diff <= 129600) {return "1 day ago";}
    if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
    if (diff <= 777600) {return "1 week ago";}
    return "on " + system_date;
  }

  render() {
    const time = this.parseDate(this.props.created_at);

    return (
      <Animate
        transitionName='tweetAnimation'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <li key={ this.props.key }><Panel className='message' bsStyle='primary' header={ time }>{ this.props.text }</Panel></li>
      </Animate>
    );
  }
}
