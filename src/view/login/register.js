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
	Steps,
	Radio,
	Upload,
	Alert
} from 'antd';
import {
	Link
} from 'dva/router';
import styles from './index.less';
import QueueAnim from 'rc-queue-anim';
const FormItem = Form.Item;
const Step = Steps.Step;
const RadioGroup = Radio.Group;


/*注册板块*/
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
			span: 14
		},
		sm: {
			span: 18
		},
	},
};
/*基本信息*/
class UserName extends React.Component {
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
                  <h2 style={{textAlign:'center',marginBottom:15}}>填写基本信息</h2>
			      <div key="1">
                    <Form onSubmit={this.handleSubmit}>
				        <FormItem
				          {...formItemLayout}
				          label="姓名"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="性别"
				        >
				          {getFieldDecorator('radio-group')(
				            <RadioGroup>
				              <Radio value="a">男</Radio>
				              <Radio value="b">女</Radio>
				            </RadioGroup>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="年龄"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="学校"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="专业"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				         <FormItem
				          {...formItemLayout}
				          label="年级"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="邮箱"
				          hasFeedback
				        >
				          {getFieldDecorator('email', {
				            rules: [{
					              type: 'email', message: '邮箱格式如***@**.com/cn!',
					            },{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				         <FormItem
				          {...formItemLayout}
				          label="手机号"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				       </Form>
			      </div>
			   </QueueAnim>
		)
	}
}


/*证件上传*/
const fileList = [{
	uid: -1,
	name: 'xxx.png',
	status: 'done',
	url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];
class UserImg extends React.Component {
	render() {
		const props = {
			action: '//jsonplaceholder.typicode.com/posts/',
			listType: 'picture',
			defaultFileList: [...fileList],
		};
		return (
			<QueueAnim type="bottom">
			      <h2 style={{textAlign:'center',marginBottom:15}}>上传证件</h2>
                  <Alert style={{marginBottom:15}} description="请将证件原件、核验单原件清晰拍照或彩色扫描后上传，图片文件后缀支持jpg、png、jpeg格式，上传图片大小建议在4M一下。" type="warning" />
			      <div key="1">
                      <Form>
				        <FormItem
				          {...formItemLayout}
				          label="学生证"
				          hasFeedback
				        >
                         <Upload {...props}>
					      <Button>
					        <Icon type="upload" /> 上传复印件
					      </Button>
					    </Upload>
				       </FormItem>
				       <FormItem
				          {...formItemLayout}
				          label="身份证"
				          hasFeedback
				        >
                         <Upload {...props}>
					      <Button>
					        <Icon type="upload" /> 上传复印件
					      </Button>
					    </Upload>
				       </FormItem>
				       <FormItem
				          {...formItemLayout}
				          label="银行卡"
				          hasFeedback
				        >
                         <Upload {...props}>
					      <Button>
					        <Icon type="upload" /> 上传复印件
					      </Button>
					    </Upload>
				       </FormItem>
				      </Form>
			      </div>
			</QueueAnim>
		)
	}
}

/*银行卡验证*/
class BankVerification extends React.Component {
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
			      <h2 style={{textAlign:'center',marginBottom:15}}>银行卡验证</h2>
                  <Alert style={{marginBottom:15}} description="用于补贴发放、转账资金，需持本人有效银行卡提供" type="warning" />
			      <div key="1">
                      <Form onSubmit={this.handleSubmit}>
				         <FormItem
				          {...formItemLayout}
				          label="银行名称"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="银行卡号"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				         <FormItem
				          {...formItemLayout}
				          label="确认卡号"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="手机号"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input addonAfter={<div style={{cursor:'pointer'}}>发送验证码</div>}/>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="验证码"
				          hasFeedback
				        >
				          {getFieldDecorator('user', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input/>
				          )}
				        </FormItem>
				      </Form>
			      </div>
			</QueueAnim>
		)
	}
}


const Usernameform = Form.create()(UserName)
const BankVerificationform = Form.create()(BankVerification)
const steps = [{
	title: '基本信息',
	content: <Usernameform/>,
}, {
	title: '证件信息',
	content: <UserImg/>,
}, {
	title: '银行账户信息',
	content: <BankVerificationform/>
}];

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
		};
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	next() {
		const current = this.state.current + 1;
		this.setState({
			current
		});
	}
	prev() {
		const current = this.state.current - 1;
		this.setState({
			current
		});
	}
	render() {
		const {
			current
		} = this.state;
		return (
			<div className={styles.LoginContent} style={{width:800,backgroundSize:'30%'}}>
			<Row>
            <Col span={24}>
              <div className={styles.LoginForm} style={{paddingRight:0}}>
                <Row>
                  <Col span={8}>
                    <div className={styles.ResigBottom}>
			          <Button onClick={()=>this.props.ChangeStatus()}>已有账号？登录</Button>
			        </div>
                     <Steps current={current} direction="vertical" >
			          {steps.map(item => <Step key={item.title} title={item.title} />)}
			        </Steps>
                  </Col>
                  <Col span={16}>
                    <div className="steps-content">{steps[this.state.current].content}</div>
                  </Col>
                </Row>
                <Row style={{clear:'both'}}>
                 <Col span={16} push={8}>
                 <div className="steps-action">
		          {
		            this.state.current < steps.length - 0 && this.state.current !=2
		            &&
		            <Button type="primary" size='large' onClick={() => this.next()}>保存，下一步</Button>
		          }
		          {
			       this.state.current == 2
		            &&
		            <Button type="primary" size='large'>开始注册</Button>
		          }
		          {
		            this.state.current > 0
		            &&
		            <Button style={{ marginLeft:10 }} size='large' onClick={() => this.prev()}>
		              返回上一步
		            </Button>
		          }
		        </div>
                </Col>
                <Col span={8} pull={16}></Col>
                </Row>
              </div>  
            </Col>
          </Row>
          </div>
		)
	}
}