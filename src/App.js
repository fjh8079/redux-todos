import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import propTypes from 'prop-types';
import Styled from 'styled-components';
import { fetchMessages } from './actions';
import Navs from './components/Navs';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMessages());
  }

  render() {
    const Wrapper = Styled.div`
      max-width: 600px;
      margin: 2rem auto;
      height: calc(100vh - 4rem);
    `;

    return (
      <Wrapper>
        <Navs />
        <div>

        </div>
      </Wrapper>
    );
  }
}

Message.propTypes = {
  dispatch: propTypes.func.isRequired,
}

function mapStateToProps(state) {
  const messages = _get(state, 'message.AllMessages', [])
  return {
    messages
  };
}

export default connect(mapStateToProps)(Message);
