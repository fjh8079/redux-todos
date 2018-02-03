import React, { Component } from 'react';
import Navs from './components/Navs';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="message">
        <Navs />
        <div>

        </div>
      </div>
    );
  }
}

export default Message;
