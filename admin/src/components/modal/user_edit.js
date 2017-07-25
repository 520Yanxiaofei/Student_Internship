import React, {
	Component,
	PropTypes
} from 'react';
import {
	Modal,
	Button,
	Spin,
	Icon,
	Col,
	Row,
	Form,
	Input,
	Breadcrumb,
	Select
} from 'antd';
import styles from './new_detai.less'
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 6
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 14
		},
	},
};
const StationDetai = ({
	visible,
	handleOk,
	handleCancel,
	DetaiData,
	form: {
		getFieldDecorator,
		validateFieldsAndScroll
	}
}) => {
	function handleSubmit(e) {
		e.preventDefault();
		validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	return (
		<Modal
          title="用户编辑"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form onSubmit={handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="用户名"
	          hasFeedback
	        >
	          {getFieldDecorator('station', {
	            rules: [{
	              required: true, message: '用户名不能为空!',
	            }],
	          })(
	            <Input placeholder='请填写用户名'/>
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="权限角色"
	          hasFeedback
	        >
	          {getFieldDecorator('tag', {
	            rules: [{
	              required: true, message: '请选择权限!',
	            }],
	          })(
	            <Select
				    placeholder="请选择权限"
				    >
				    <Option value="超级管理员">超级管理员</Option>
				    <Option value="新闻管理员">新闻管理员</Option>
				    <Option value="岗位管理员">岗位管理员</Option>
				    <Option value="普通管理员">普通管理员</Option>
				  </Select>
	          )}
	        </FormItem>
	    </Form>
        </Modal>
	);

}

export default Form.create()(StationDetai)