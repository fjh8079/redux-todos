import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import propTypes from 'prop-types';
import Styled from 'styled-components';
import { fetchMessages, onChangeSelected } from '../actions';
import Navs from '../components/Navs';
import List from '../components/List';
import ActionBtn from '../components/ActionBtn';
import 'normalize.css';

class Pages extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const height = document.getElementById('list').clientHeight;
    const listHeight = document.getElementsByClassName('list-wrappr')[0].clientHeight;
    const scrollTop = document.getElementById('list').scrollTop;
    if ((scrollTop + height) >= (listHeight + 86) ) {
      this.loadMore();
    }
  }

  loadMore() {
    const { dispatch, nextPageKey } = this.props;
    if (nextPageKey) {
      dispatch(fetchMessages(nextPageKey));
    }
  }

  componentDidMount() {

    const { dispatch, allIds, match } = this.props;

    switch(match.path) {
      case '/':
      case '/All':
        dispatch(onChangeSelected('All'));
        break;
      case '/social': 
        dispatch(onChangeSelected('Social'));
        break;
      case '/news': 
        dispatch(onChangeSelected('News'));
        break;
      
    }

    if (allIds.length === 0) {
      dispatch(fetchMessages());
    }

    window.addEventListener('scroll', this.handleScroll, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
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
        <List/>
        <ActionBtn />
      </Wrapper>
    );
  }
}

Pages.propTypes = {
  dispatch: propTypes.func.isRequired,
}

function mapStateToProps(state) {
  const allIds = _get(state, 'message.allIds', []);
  const nextPageKey = _get(state, 'message.nextPageKey');
  return {
    allIds,
    nextPageKey
  }
}

export default connect(mapStateToProps)(Pages);
