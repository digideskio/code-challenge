import React, { Component } from 'react';
import StateList from './TweetList';
import State from './Tweet';
import { connect } from 'react-redux';
import { fetchTweets } from '../actions/actions';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/component_styles/Container';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTweets('coryodaniel'));
  };

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
          <span>
            <div className='at'>@</div>
            <input
              className='inputBox'
              ref='twitterHandle'
              placeholder='twitter handle'
              maxLength='15'
              onKeyDown={e => {
                if(e.keyCode === 13) this.handleClick(e);
              }}
            />
          </span>
          <Button
            bsStyle='primary'
            onClick={(e) => this.handleClick(e)}>
            Click for the latest 25 tweets!
          </Button>
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
