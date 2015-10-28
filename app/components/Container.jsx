import React, { Component } from 'react';
import StateList from './TweetList';
import State from './Tweet';
import { connect } from 'react-redux';
import { fetchTweets } from '../actions/actions';
import ReactDOM from 'react-dom';

// Styling
import '../styles/component_styles/Container';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault;
    const { dispatch } = this.props;
    const node = ReactDOM.findDOMNode(this.refs.twitterHandle);
    const user = this.refs.twitterHandle.value;
    dispatch(fetchTweets(user));
    node.value = '';
    node.focus();
  }

  render() {
    const { listOfTweets } = this.props;
      return (
        <div className='container'>
            <input
              className='inputBox'
              ref='twitterHandle'
              placeholder='enter a twitter handle'
              onKeyDown={e => {
                if(e.keyCode === 13) this.handleClick(e);
              }}
            />
        <button
          className='chatButton'
          onClick={(e) => this.handleClick(e)}>Click for the latest 25 tweets!</button>
          <div className='messageList'>
            {React.cloneElement(this.props.children, {
              listOfTweets,
            })}
          </div>
        </div>
      )
  }
}

export default connect(state => state)(Container);
