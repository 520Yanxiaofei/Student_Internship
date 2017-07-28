import React, {
	Component,
	PropTypes
} from 'react';
import {
	Modal,
	Button
} from 'antd';
// import styles from './new_detai.less'
import Register from './register_user'

class StepsModal extends React.Component {
	state = {
		visible: true
	}
	handleOk() {

	}
	handleCancel() {

	}
	render() {
		return (
			<div>
        <Modal
          title="申请流程，请完善信息，方便企业为你安排"
          visible={this.state.visible}
          onOk={()=>this.handleOk}
          onCancel={()=>this.handleCancel}
        >
          <Register/>
        </Modal>
      </div>
		);
	}
}
export default StepsModal