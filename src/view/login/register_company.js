import React from 'react';
import {
	connect
} from 'dva';
import {
	Spin,
	Icon,
	message,
	Form,
	Input,
	Button,
	Row,
	Col,
	Select
} from 'antd';
import {
	Link
} from 'dva/router';
import styles from './index.less';
import QueueAnim from 'rc-queue-anim';
const FormItem = Form.Item;
const Option = Select.Option;

/*注册板块*/
const formItemLayout = {
	labelCol: {
		xs: {
			span: 6
		},
		sm: {
			span: 6
		},
	},
	wrapperCol: {
		xs: {
			span: 18
		},
		sm: {
			span: 18
		},
	},
};
/*基本信息*/
class Company extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<QueueAnim type="bottom">
                  <h2 style={{textAlign:'center',marginBottom:15}}>企业信息填写</h2>
			      <div key="1">
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
					        <FormItem wrapperCol={{ span: 10, offset:6 }}>
					          <Button type="primary" htmlType="submit">确认入驻</Button>
					        </FormItem>
				       </Form>
			      </div>
			   </QueueAnim>
		)
	}
}

const Companyform = Form.create()(Company)
export default class RegisterCompany extends React.Component {
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className={styles.LoginContent} style={{width:800,backgroundSize:'30%'}}>
			<Row>
            <Col span={24}>
              <div className={styles.LoginForm} style={{paddingRight:0}}>
                <Row>
                <Col span={6}>
                <div className={styles.ResigBottom}>
			          <Button onClick={()=>this.props.ChangeStatus()}>已有账号？登录</Button>
			        </div>
			        </Col>
                 <Col span={18}><Companyform/></Col>
                </Row>
              </div>  
            </Col>
          </Row>
          </div>
		)
	}
}