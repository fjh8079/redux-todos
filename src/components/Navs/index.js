import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { onChangeSelected } from '../../actions';

class Navs extends Component {
  constructor(props) {
    super(props);

    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(val) {
    const { dispatch } = this.props;
    dispatch(onChangeSelected(val));
  }

  render() {
    const NAV_TYPES = ['All', 'Social', 'News'];

    return (
      <nav>
        <ul>
          {
            NAV_TYPES.map(item => <li key={item} onClick={() => this.onNavClick(item)}>{item}</li>)
          }
        </ul>
      </nav>
    );
  }
}

Navs.propTypes = {
  dispatch: propTypes.func.isRequired,
}

function mapStateToProps(state) {
  const selectedType = _get(state, 'selectedType', 'All');
  return {
    selectedType,
  };
}

export default connect(mapStateToProps)(Navs);
