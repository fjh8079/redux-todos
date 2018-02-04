import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { onChangeSelected } from '../../actions';
import Styled from 'styled-components';

import NavItems from './NavItems';

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
    const { selectedType } = this.props;
    
    const NAV_TYPES = ['All', 'Social', 'News'];
    
    const NavUlStyle = Styled.ul`
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      background-color: #2C96EC;
      color: #FFF;
    `;

    const NavLiStyle = Styled.li`
      width: calc(100% / 3);
      padding: 1rem 0;
      text-align: center;
    `;

    return (
      <nav>
        <NavUlStyle>
          {
            NAV_TYPES.map(item => {
              return (
                <NavItems 
                  key={item} 
                  item={item} 
                  isActive={item === selectedType} 
                  onNavClick={this.onNavClick} 
                />
              )
            })
          }
        </NavUlStyle>
      </nav>
    );
  }
}

Navs.propTypes = {
  dispatch: propTypes.func.isRequired,
}

function mapStateToProps(state) {
  const selectedType = _get(state, 'visiable', 'All');
  return {
    selectedType,
  };
}

export default connect(mapStateToProps)(Navs);
