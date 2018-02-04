import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { get as _get } from 'lodash';
import { onSelectList } from '../../actions';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);

    this.onHandleSelect = this.onHandleSelect.bind(this);
  }

  onHandleSelect(e) {
    const { dispatch } = this.props;
    const selectId = e.target.value;
    dispatch(onSelectList(selectId));
  }

  render() {
    const { message, selectedId } = this.props;
    
    const selected = ~selectedId.indexOf(message.msg_id.toString());

    const ListCheckboxDiv = Styled.div`
      width: 40px;
      text-align: center;
    `;

    return (
      <ListCheckboxDiv>
        <input 
          type="checkbox" 
          name="" 
          id={message.msg_id} 
          value={message.msg_id} 
          onChange={this.onHandleSelect}
          checked={selected}
        />
      </ListCheckboxDiv>
    );
  }
}

function mapStateToProps(state) {
  const selectedId = _get(state, 'message.selectedId', []);
  return {
    selectedId
  }
}

export default connect(mapStateToProps)(CheckBox);
