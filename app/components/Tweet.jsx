import React, { Component } from 'react';

export default class Tweet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='message'>{this.props.created_at}: { this.props.text }</li>
    );
  }
}
