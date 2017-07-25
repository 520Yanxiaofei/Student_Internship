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
const Option = Select.Option;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 2
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


class CompanyIndex extends React.Component {
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
				    <Breadcrumb.Item>企业信息</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
		);

		return (
			<div>
			  <Localhostd name="企业信息" content={content}/>
			  <QueueAnim type="top" component="div">
				  <Row className={styles.SitausBox} key="1">
				     <Col>
				        <Form onSubmit={this.handleSubmit}>
					        <FormItem
					          {...formItemLayout}
					          label="企业名称"
					          hasFeedback
					        >
					          {getFieldDecorator('station', {
					            rules: [{
					              required: true, message: '企业名称不能为空!',
					            }],
					          })(
					            <Input placeholder='企业名称'/>
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="行业性质"
					          hasFeedback
					        >
					          {getFieldDecorator('tag', {
					            rules: [{
					              required: true, message: '请选择行业!',
					            }],
					          })(
					            <Select
								    placeholder="请选择行业"
								    >
								    <Option value="互联网IT">互联网IT</Option>
								    <Option value="金融类">金融类</Option>
								  </Select>
					          )}
					        </FormItem>
					        <FormItem wrapperCol={{ span: 10, offset: 2 }}>
					          <Button type="primary" htmlType="submit">保存</Button>
					        </FormItem>
					    </Form>
				     </Col>
				  </Row>
			  </QueueAnim>
			  
		   </div>
		);
	}
}

export default Form.create()(CompanyIndex)