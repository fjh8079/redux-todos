import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { clearSelected, deleteSelected } from '../../actions';
import { Btn } from '../Styles';

class ActionBtn extends PureComponent {
  constructor(props) {
    super(props);

    this.onHandleCancel = this.onHandleCancel.bind(this)
    this.onHandleDelete = this.onHandleDelete.bind(this)
  }

  onHandleCancel() {
    const { dispatch } = this.props;
    dispatch(clearSelected());
  }

  onHandleDelete() {
    const { dispatch } = this.props;
    dispatch(deleteSelected());
  }

  render() {
    const { showActiveBtns } = this.props;
    const ActionBtnGroupStyle = Styled.div`
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(225, 225, 225, .6);
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
    `;

    const ActionBtnStyle = Btn.extend`
      padding: .5rem .7rem;
      border-radius: 2px;
      box-shadow: 1px 1px 4px rgba(0,0,0,.2);
    `;

    const DeleteBtnStyle = ActionBtnStyle.extend`
      background-color: #E71A1D;
      margin-right: 2rem;
    `;

    const CancelBtnStyle = ActionBtnStyle.extend`
      background-color: #FFF;
      color: #333;
    `;

    if (showActiveBtns) {
      return (
        <ActionBtnGroupStyle>
          <DeleteBtnStyle onClick={this.onHandleDelete}>DELETE</DeleteBtnStyle>
          <CancelBtnStyle onClick={this.onHandleCancel}>CANCEL</CancelBtnStyle>
        </ActionBtnGroupStyle>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  const selectedId = _get(state, 'message.selectedId', []);
  const showActiveBtns = selectedId.length > 0;
  return {
    showActiveBtns
  }
}

export default connect(mapStateToProps)(ActionBtn);
