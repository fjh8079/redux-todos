import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get as _get, filter as _filter } from 'lodash';
import propTypes from 'prop-types';
import Styled from 'styled-components';
import { fetchMessages } from './actions';
import Navs from './components/Navs';
import List from './components/List';
import ActionBtn from './components/ActionBtn';
import 'normalize.css';

class Message extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMessages());
  }

  render() {
    const Wrapper = Styled.div`
      position: relative;
      max-width: 600px;
      margin: 2rem auto;
      height: calc(100vh - 4rem);
      box-shadow: 1px 1px 4px rgba(0, 0, 0, .5);
    `;

    return (
      <Wrapper>
        <Navs />
        <List />
        <ActionBtn />
      </Wrapper>
    );
  }
}

Message.propTypes = {
  dispatch: propTypes.func.isRequired,
}

export default connect()(Message);
