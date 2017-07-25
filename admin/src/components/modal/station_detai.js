import React, {
	Component,
	PropTypes
} from 'react';
import {
	Modal,
	Button
} from 'antd';
import styles from './station_detai.less'

const StationDetai = ({
	visible,
	handleOk,
	handleCancel,
	DetaiData
}) => {
	return (
		<div>
        <Modal
          title="岗位详情"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>{DetaiData.title}</div>
          <div dangerouslySetInnerHTML={{__html:DetaiData.htmlBody}}>
          </div>
        </Modal>
      </div>
	);

}

export default StationDetai