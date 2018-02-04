import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { get as _get, filter as _filter } from 'lodash';
import ListItem from './ListItem';

const List = ({ allIds, byId }) => {
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
        allIds.map((id) => {
          return (
            <ListItem key={id} message={byId[id]} />
          )
        })
      }
    </ListStyle>
  );
}

function mapStateToProps(state) {
  const selectedType = _get(state, 'visiable');
  const selectedId = _get(state, 'message.selectedId', []);
  let allIds = _get(state, 'message.allIds', []);
  const byId = _get(state, 'message.byId', {});
  if (selectedType !== 'All') {
    allIds = _filter(allIds, (id) => {
      const messageType = _get(byId, `${id}.msg_type`);
      return messageType && messageType === selectedType.toUpperCase();
    })
  }
  
  return {
    allIds,
    byId
  };
}

export default connect(mapStateToProps)(List);
