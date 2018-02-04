import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { get as _get, filter as _filter } from 'lodash';
import ListItem from './ListItem';

const List = ({ messages }) => {
  const ListStyle = Styled.ul`
    margin: 0;
    padding: 1rem;
    padding-bottom: 50px;
    list-style: none;
    height: calc(100% - 54px);
    overflow-y: auto;
    box-sizing: border-box;
  `;

  return (
    <ListStyle>
      {
        messages.map((message) => {
          return (
            <ListItem key={message.msg_id} message={message} />
          )
        })
      }
    </ListStyle>
  );
}

function mapStateToProps(state) {
  const selectedType = _get(state, 'visiable', 'All');
  const selectedId = _get(state, 'message.selectedId', []);
  let messages = _get(state, 'message.AllMessages', []);
  if (selectedType !== 'All') {
    messages = _filter(messages, (item) => {
      return item.msg_type === selectedType.toUpperCase();
    })
  }
  
  return {
    messages
  };
}

export default connect(mapStateToProps)(List);
