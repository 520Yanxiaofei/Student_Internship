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
import {
	HTTP_URL
} from '../../utils/URL';
import cookie from 'react-cookie';
const LoginStatus = cookie.load('DemoUser')
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



class Register extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {
		userData: [],
		student_img: '',
		student_thuimg: [],
		identity_img: '',
		identity_thuimg: [],
		bank_img: '',
		bank_thuimg: [],
		confirmDirty: false,
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}

	next() {
		const {
			current,
		} = this.props.PersonalCenter;
		this.props.dispatch({
			type: 'PersonalCenter/showloading',
			payload: {
				current: current + 1
			}
		})
	}
	prev() {
		const {
			current,
		} = this.props.PersonalCenter;
		this.props.dispatch({
			type: 'PersonalCenter/showloading',
			payload: {
				current: current - 1
			}
		})
	}
	handleSubmit1(values) {
			this.props.form.validateFieldsAndScroll((err, values) => {
				if (err) {
					return false
				}
				this.props.dispatch({
					type: 'PersonalCenter/showloading',
					payload: {
						registData: {
							...values,
						}
					}
				})
				this.next()
			})
		}
		/*验证并提交*/
	onSubmitImg() {
		this.props.form.validateFields((err, values) => {
			if (err) {
				return false
			}
			const {
				registData
			} = this.props.PersonalCenter;
			const {
				student_img,
				identity_img,
				bank_img,
			} = this.state;
			console.log('values', values)
			this.props.dispatch({
				type: 'PersonalCenter/showloading',
				payload: {
					registData: {
						...registData,
						student_img,
						identity_img,
						bank_img
					}
				}
			})
			this.next()
		});
		// const {
		// 	student_img,
		// 	identity_img,
		// 	bank_img
		// } = this.state;
		// if (student_img == '') {
		// 	message.warning('请上传学生证复印件')
		// 	return false
		// }
		// if (identity_img == '') {
		// 	message.warning('请上传身份证复印件')
		// 	return false
		// }
		// if (bank_img == '') {
		// 	message.warning('请上传银行卡复印件')
		// 	return false
		// }
		// let value = {
		// 	student_img,
		// 	identity_img,
		// 	bank_img
		// }
	}
	normFile = (data, name) => {
			if (data.file.status == "done") {
				const keyId = data.file.response.content;
				if (name == 'student_img') this.setState({
					student_img: keyId,
					student_thuimg: [{...data.fileList[0]
					}]
				})
				if (name == 'identity_img') this.setState({
					identity_img: keyId,
					identity_thuimg: [{...data.fileList[0]
					}]
				})
				if (name == 'bank_img') this.setState({
					bank_img: keyId,
					bank_thuimg: [{...data.fileList[0]
					}]
				})
			}

			if (Array.isArray(data)) {
				return data;
			}
			return data && data.fileList;
		}
		/*删除文件*/
	onRemove(data, name) {
		console.log(data)
		if (data.status = "removed") {
			const keyid = data.response.content
			if (name == 'student_img') this.setState({
				student_img: '',
				student_thuimg: []
			})
			if (name == 'identity_img') this.setState({
				identity_img: '',
				identity_thuimg: []
			})
			if (name == 'bank_img') this.setState({
				bank_img: '',
				bank_thuimg: []
			})
			$.ajax({
				url: `${HTTP_URL}/file/${keyid}`,
				type: 'DELETE',
				success: function(result) {}
			});
		}

	}

	/*银行卡验证*/
	handleSubmit2 = () => {
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				return false;
			}
			const {
				registData
			} = this.props.PersonalCenter;
			this.props.dispatch({
				type: 'PersonalCenter/showloading',
				payload: {
					registData: {
						...registData,
						...values
					}
				}
			})
			this.props.dispatch({
				type: 'PersonalCenter/ApplierAdd',
				payload: {
					...registData,
					...values
				}
			})
		});

	}
	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({
			confirmDirty: this.state.confirmDirty || !!value
		});
	}
	checkCord = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('card_number')) {
			callback('两次卡号不一致!');
		} else {
			callback();
		}
	}
	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], {
				force: true
			});
		}
		callback();
	}
	render() {
		const {
			current,
			loading0,
			registData,
		} = this.props.PersonalCenter;
		const {
			userData
		} = this.state;
		console.log(registData)
		const {
			getFieldDecorator
		} = this.props.form;

		/*图片上传*/
		const {
			student_img,
			student_thuimg,
			identity_img,
			identity_thuimg,
			bank_img,
			bank_thuimg
		} = this.state;
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
                     {
                     	current==0?
			                    <Form>
							        <FormItem
							          {...formItemLayout}
							          label="姓名"
							          hasFeedback
							        >
							          {getFieldDecorator('username', {
							          	initialValue:registData.username,
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
							          {getFieldDecorator('sex', {
							          	initialValue:registData.sex,
							            rules: [{
							              required: true, message: '不能为空!',
							            }],
							          })(
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
							          	initialValue:registData.age,
							            rules: [{
							              required: true, message: '不能为空!',
							            }],
							          })(
							            <Input  placeholder="请输入年龄" type='number' />
							          )}
							        </FormItem>
							        <FormItem
							          {...formItemLayout}
							          label="所在城市"
							          hasFeedback
							        >
							          {getFieldDecorator('city', {
							          	initialValue:registData.city,
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
							          	initialValue:registData.school,
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
							          	initialValue:registData.major,
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
							          	initialValue:registData.grade,
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
							          	initialValue:registData.email,
							            rules: [{
								              type: 'email', message: '邮箱格式如***@**.com/cn!',
								            },{
							              required: true, message: '不能为空!',
							            }],
							          })(
							            <Input  placeholder="请输入邮箱"/>
							          )}
							        </FormItem>
							        <FormItem  wrapperCol={{ span: 18, offset: 6 }}>
							        <Button loading={loading0} type="primary" size='large' onClick={()=>this.handleSubmit1()}>保存，下一步</Button>
							        </FormItem>
							       </Form>
						     
                     	:null
                     }
                     {
                     	current==1?
                     	   <div>
			                  <Alert style={{marginBottom:15}} description="请将证件原件、核验单原件清晰拍照或彩色扫描后上传，图片文件后缀支持jpg、png、jpeg格式，上传图片大小建议在4M一下。" type="warning" />
						     
			                      <Form>
							        <FormItem
							          {...formItemLayout}
							          label="学生证"
							        >
							        {getFieldDecorator('student_img', {
							            valuePropName: 'fileList',
							            initialValue:student_thuimg,
							            rules: [{
							              required: true, message: '请上传学生证复印件!',
							            }],
							            getValueFromEvent:(file)=>this.normFile(file,'student_img'),
							          })(
							            <Upload name="file" action={`${HTTP_URL}/file/`} listType="picture" onRemove={(file)=>this.onRemove(file,'student_img')}>
										     {
									           student_img==''?
										      	<Button>
										        <Icon type="upload" /> 上传学生证复印件
										       </Button>
										       :null
										      }
									    </Upload>
							          )}
							       </FormItem>
							       <FormItem
							          {...formItemLayout}
							          label="身份证"
							        >
							        {getFieldDecorator('identity_img', {
							            valuePropName: 'fileList',
							            initialValue:identity_thuimg,
							            rules: [{
							              required: true, message: '请上传身份证复印件!',
							            }],
							            getValueFromEvent:(file)=>this.normFile(file,'identity_img'),
							          })(
							            <Upload name="file" action={`${HTTP_URL}/file/`} listType="picture" onRemove={(file)=>this.onRemove(file,'identity_img')}>
										     {
									           identity_img==''?
										      	<Button>
										        <Icon type="upload" /> 上传身份证复印件
										       </Button>
										       :null
										      }
									    </Upload>
							          )}
							       </FormItem>
							       <FormItem
							          {...formItemLayout}
							          label="银行卡"
							        >
							        {getFieldDecorator('bank_img', {
							            valuePropName: 'fileList',
							            initialValue:bank_thuimg,
							            rules: [{
							              required: true, message: '请上传银行卡复印件!',
							            }],
							            getValueFromEvent:(file)=>this.normFile(file,'bank_img'),
							          })(
							            <Upload name="file" action={`${HTTP_URL}/file/`} listType="picture" onRemove={(file)=>this.onRemove(file,'bank_img')}>
										     {
									           bank_img==''?
										      	<Button>
										        <Icon type="upload" /> 上传银行卡复印件
										       </Button>
										       :null
										      }
									    </Upload>
							          )}
							       </FormItem>
							       <FormItem  wrapperCol={{ span: 18, offset: 6 }}>
							        <Button type="primary" size='large' onClick={()=>this.onSubmitImg()}>保存，下一步</Button>
							         <Button size='large'  style={{ marginLeft:10 }} onClick={() => this.prev()}>返回上一步</Button>
							        </FormItem>
							      </Form>
						      </div>
                     	:null
                     }
                     {
                     	current==2?
                     	<Form onSubmit={this.handleSubmit2}>
                     	 <Alert style={{marginBottom:15}} description="用于补贴发放、转账资金，需持本人有效银行卡提供" type="warning" />
				         <FormItem
				          {...formItemLayout}
				          label="银行名称"
				          hasFeedback
				        >
				          {getFieldDecorator('bank_name', {
				          	initialValue:registData.bank_name,
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input placeholder='请填写银行全称'/>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="银行卡号"
				          hasFeedback
				        >
				          {getFieldDecorator('card_number', {
				          	initialValue:registData.card_number,
				            rules: [{
				              required: true, message: '不能为空!',
				            }, {
				              validator: this.checkConfirm,
				            }],
				          })(
				            <Input type='number' placeholder="请输入卡号"/>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="再次确认卡号"
				          hasFeedback
				        >
				          {getFieldDecorator('confirm', {
				          	initialValue:registData.confirm,
				            rules: [{
				              required: true, message: '确认卡号不能为空!',
				            }, {
				              validator: this.checkCord,
				            }],
				          })(
				            <Input type="number" placeholder="请输入确认卡号" onBlur={this.handleConfirmBlur} />
				          )}
				        </FormItem>
				        {/*<FormItem
				          {...formItemLayout}
				          label="手机号"
				          hasFeedback
				        >
				          {getFieldDecorator('phone', {
				          	initialValue:registData.phone,
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input type='number' placeholder='输入手机号验证' addonAfter={<div style={{cursor:'pointer'}}>发送验证码</div>}/>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="验证码"
				          hasFeedback
				        >
				          {getFieldDecorator('vcode', {
				          	initialValue:registData.vcode,
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input style={{width:160}} placeholder='请输入短信验证码'/>
				          )}
				        </FormItem>*/}
				        <FormItem  wrapperCol={{ span: 18, offset: 6 }}>
				        <Button type="primary" loading={loading0} size='large' onClick={this.handleSubmit2}>已完善，开始注册</Button>
				         <Button size='large'  style={{ marginLeft:10 }} onClick={()=>this.prev()}>返回上一步</Button>
				        </FormItem>
				      </Form>
                     	:null
                     }
                    
                    </div> < /div>
		)
	}
}


function mapStateToProps(props) {
	return {
		PersonalCenter: props.PersonalCenter
	};
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(Form.create()(Register));