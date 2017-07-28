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
	Alert,
	Cascader
} from 'antd';
import {
	Link
} from 'dva/router';
// import styles from './index.less';
import QueueAnim from 'rc-queue-anim';
import HTTP_URL from '../../utils/URL';
const cities = require('../../json/cities.json')
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
			span: 14
		},
	},
};
/*基本信息*/
class UserName extends React.Component {
	componentDidMount() {
		console.log(cities)
			// this.props.form.resetFields()
	}
	handleSubmit = () => {
		// e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return false
			}
			console.log(values)
			this.props.handleSubmit(values)
		});
		// this.props.form.resetFields()

	}
	render() {
		const {
			getFieldDecorator
		} = this.props.form;

		return (
			<QueueAnim type="bottom">
			      <div key="1">
                    <Form>
				        <FormItem
				          {...formItemLayout}
				          label="姓名"
				          hasFeedback
				        >
				          {getFieldDecorator('username', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input placeholder="请输入姓名"/>
				          )}
				        </FormItem>
				        
				        <FormItem
				          {...formItemLayout}
				          label="性别"
				        >
				          {getFieldDecorator('sex')(
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
				          {getFieldDecorator('age', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input type='number' />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="所在城市"
				          hasFeedback
				        >
				          {getFieldDecorator('city', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Cascader options={cities} placeholder="请选择意向城市" />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="学校"
				          hasFeedback
				        >
				          {getFieldDecorator('school', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input placeholder='学校全名'/>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="专业"
				          hasFeedback
				        >
				          {getFieldDecorator('major', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input placeholder='如电子商务'/>
				          )}
				        </FormItem>
				         <FormItem
				          {...formItemLayout}
				          label="年级"
				          hasFeedback
				        >
				          {getFieldDecorator('grade', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input placeholder='如大二，大三'/>
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
				          {getFieldDecorator('phone', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input type="number" />
				          )}
				        </FormItem>
				        <FormItem  wrapperCol={{ span: 18, offset: 6 }}>
				        <Button type="primary" size='large' onClick={()=>this.handleSubmit()}>保存，下一步</Button>
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
			action: `${HTTP_URL}/file/`,
			listType: 'picture',
			name: 'file',
			showUploadList: true,
			accept: 'image/jpeg,image/jpg,image/png',
			onRemove: () => {
				console.log('取消删除')
			},
			onChange: (file) => {
				// console.log(file)
			}
		};
		return (
			<QueueAnim type="bottom">
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
				       <FormItem  wrapperCol={{ span: 18, offset: 6 }}>
				        <Button type="primary" size='large' onClick={()=>this.props.handleSubmit()}>保存，下一步</Button>
				         <Button size='large'  style={{ marginLeft:10 }} onClick={() => this.props.prev()}>返回上一步</Button>
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


class Register extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	next() {
		// const current = this.state.current + 1;
		// this.setState({
		// 	current
		// });
	}
	prev() {
		// const current = this.state.current - 1;
		// this.setState({
		// 	current
		// });
	}
	render() {
		const {
			current
		} = this.props.LoginUser;
		/*基本信息*/
		const UserRegist = {
				handleSubmit: (values) => {
					this.props.dispatch({
						type: 'LoginUser/UserReigst',
						payload: {
							...values,
							userType: '1'
						}
					})
				},
				// handleUser: (values) => {
				// 	this.props.dispatch({
				// 		type: 'LoginUser/Usercheck',
				// 		payload: {
				// 			username: values,
				// 			userType: '1'
				// 		}
				// 	})
				// }
			}
			/*图片上传*/
		const UserImgData = {
			prev: () => {
				this.props.dispatch({
					type: 'LoginUser/showloading',
					payload: {
						current: current - 1
					}
				})
			}
		}
		return (

			<div> 
			      <div style={{margin:20,marginBottom:30}}>
                    <Steps current={current}>
			          <Step title='基本信息' />
			          <Step title='证件信息' />
			          <Step title='银行账户信息' />
			        </Steps>
			        </div>
                    <div className="steps-content">
                     {(()=>{
                     	switch(current){
                     		case 0:return <Usernameform {...UserRegist}/>
                     		case 1:return <UserImg {...UserImgData}/>
                     		case 2:return <BankVerificationform/>
                     		default: <div>页面错误</div>
                     	}
                     })()}
                    </div>
              </div>
		)
	}
}


function mapStateToProps(props) {
	return {
		LoginUser: props.LoginUser,
		loading: props.loading.global,
	};
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(Register);