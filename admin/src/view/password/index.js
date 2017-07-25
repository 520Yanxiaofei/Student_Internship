import React, {
	Component,
	PropTypes
} from 'react';
import {
	Link,
} from 'react-router';
import {
	Spin,
	Icon,
	Col,
	Row,
	Form,
	Input,
	Breadcrumb,
	Button,
	Select
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';
import Localhostd from '../../components/public/localhost';
const FormItem = Form.Item;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 3
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 10
		},
	},
};


class PasswordIndex extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const content = (
			<Col span={12}>
                  <Breadcrumb>
                    <Breadcrumb.Item><Link to="/" >&nbsp;<Icon type="home" />&nbsp;</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>密码修改</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
		);

		return (
			<div>
			  <Localhostd name="密码修改" content={content}/>
			  <QueueAnim type="top" component="div">
				  <Row className={styles.SitausBox} key="1">
				     <Col>
				        <Form onSubmit={this.handleSubmit}>
					        <FormItem
					          {...formItemLayout}
					          label="旧密码"
					          hasFeedback
					        >
					          {getFieldDecorator('station', {
					            rules: [{
					              required: true, message: '旧密码不能为空!',
					            }],
					          })(
					            <Input placeholder='请填输入旧密码'/>
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="新密码"
					          hasFeedback
					        >
					          {getFieldDecorator('category', {
					            rules: [{
					              required: true, message: '新密码不能为空!',
					            }],
					          })(
					            <Input placeholder='请输入新密码'/>
					          )}
					        </FormItem>
					       <FormItem
					          {...formItemLayout}
					          label="确认第二次新密码"
					          hasFeedback
					        >
					          {getFieldDecorator('category', {
					            rules: [{
					              required: true, message: '第二次新密码不能为空!',
					            }],
					          })(
					            <Input placeholder='请输入第二次新密码'/>
					          )}
					        </FormItem>
					        <FormItem wrapperCol={{ span: 10, offset: 2 }}>
					          <Button type="primary" htmlType="submit">确认修改</Button>
					        </FormItem>
					    </Form>
				     </Col>
				  </Row>
			  </QueueAnim>
			  
		   </div>
		);
	}
}

export default Form.create()(PasswordIndex)