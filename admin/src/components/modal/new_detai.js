import React, {
	Component,
	PropTypes
} from 'react';
import {
	Modal,
	Button
} from 'antd';
import styles from './new_detai.less'

const StationDetai = ({
	visible,
	handleOk,
	handleCancel,
	DetaiData
}) => {
	return (
		<div>
        <Modal
          title="文章详情"
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