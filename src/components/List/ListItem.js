import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { get as _get } from 'lodash';
import { onSelectList } from '../../actions';
import { Btn } from '../Styles';
import CheckBox from './CheckBox';

const ListItem = ({ message }) => {
  const ListLiStyle = Styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  `;

  const ListCard = Styled.label`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 80px;
    box-sizing: border-box;
    padding: 1rem;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2);
    flex-wrap: wrap;
  `;

  const IconDiv = Styled.div`
    width: 70px;
    padding-right: 1rem;
  `;

  const IconImg = Styled.img`
    width: 100%;
  `;

  const TitleDiv = Styled.div`
    flex: 1;
    padding-right: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;

  return (
    <ListLiStyle key={message.msg_id}>
      <CheckBox message={message} />
      <ListCard htmlFor={message.msg_id}>
        <IconDiv>
          <IconImg src={message.msg_icon} />
        </IconDiv>
        <TitleDiv>{message.msg_title}</TitleDiv>
        <div>
          <Btn>View</Btn>
        </div>
      </ListCard>
    </ListLiStyle>
  );
}

export default ListItem;
