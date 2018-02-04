import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { fetchMessages } from '../actions';
import Styled from 'styled-components';

class Detail extends PureComponent {
  componentDidMount() {
    const { dispatch, allIds } = this.props;
    if (allIds.length === 0) {
      dispatch(fetchMessages());
    }
  }
  render() {
    const { byId, match } = this.props;
    const messageId = _get(match, 'params.messageId');
    const DetailStyle = Styled.section`
      position: relative;
      text-align: center;
      max-width: 600px;
      margin: 2rem auto;
    `;

    if (byId[messageId]) {
      const { msg_title, msg_icon } = byId[messageId];
      return (
        <DetailStyle>
          <h1>{msg_title}</h1>
          <img src={msg_icon} />
        </DetailStyle>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  const allIds = _get(state, 'message.allIds', []);
  const byId = _get(state, 'message.byId', {});
  return {
    allIds,
    byId
  }
}

export default withRouter(connect(mapStateToProps)(Detail));