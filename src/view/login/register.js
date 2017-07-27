import React from 'react';
import {
	connect
} from 'dva';
import {
	Link
} from 'dva/router';
import {
	Spin,
	Icon,
	message,
	Form,
	Input,
	Button,
	Row,
	Col,
} from 'antd';
import styles from './index.less';
import Login from './login';
import Register from './register';
import Footer from '../../components/footer/footer';
const FormItem = Form.Item;


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



class RegisterIndex extends React.Component {
	state = {
		confirmDirty: false,
		userType: this.props.params.status,
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({
			confirmDirty: this.state.confirmDirty || !!value
		});
	}
	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('两次密码不一致!');
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
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (err) {
				return false;
				// console.log('Received values of form: ', values);
			}
			/*请求登录*/
			this.props.dispatch({
				type: 'LoginUser/UserReigst',
				payload: {
					username: values.username,
					password: values.password,
					userType: this.state.userType
				}
			})
		});
	}
	handleUser = (e) => {
		let values = e.target.value;
		this.props.dispatch({
			type: 'LoginUser/Usercheck',
			payload: {
				username: values,
				userType: this.state.userType
			}
		})
	}
	callback() {
		this.props.form.resetFields()
	}
	render() {
		const {
			current
		} = this.props.LoginUser;
		const {
			getFieldDecorator
		} = this.props.form;
		const {
			userType
		} = this.state
		console.log(userType)
		return (
			<div>
			   <div className={styles.LoginTop}>
	           <div className={styles.LoginTitle}>
	             <Link to='/'>
	             <h1>LOGO</h1>
	             <h1>湖北大学生实习实训网</h1>
	             <h3>全省统一大学生实习实训公共服务网络平台</h3>
	             </Link>
	           </div>
	        </div>
			<div className={styles.LoginContent} style={{width:730,backgroundSize:'26%',paddingRight:230}}>
			<Row>
            <Col span={24}>
              <div className={styles.LoginForm} style={{paddingRight:0}}>
                <Row>
                  <Col span={8}>
                    <div className={styles.ResigBottom}>
                    {(()=>{
                    	switch(userType){
                    		case '1':return <Button><Link to='/login/1'>已有账号？学生登录</Link></Button>
                    		case '2':return <Button><Link to='/login/2'>已有账号？企业登录</Link></Button>
                    		default:return <div>页面错误</div>
                    	}
                    })()
			          
                    }
			        </div>
                  </Col>
                  <Col span={16}>
                    <div className="steps-content">
                    <h2 style={{textAlign:'center',marginBottom:30}}>快速注册，抢先一步</h2>
                    <Form>
				        <FormItem
				          {...formItemLayout}
				          label="账户名"
				          hasFeedback
				        >
				          {getFieldDecorator('username', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }],
				          })(
				            <Input placeholder="请输入账户名" onBlur={(e)=>this.handleUser(e)}/>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="密码"
				          hasFeedback
				        >
				          {getFieldDecorator('password', {
				            rules: [{
				              required: true, message: '不能为空!',
				            }, {
				              validator: this.checkConfirm,
				            }],
				          })(
				            <Input type='password' placeholder="请输入密码"/>
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="确认密码"
				          hasFeedback
				        >
				          {getFieldDecorator('confirm', {
				            rules: [{
				              required: true, message: '确认密码不能为空!',
				            }, {
				              validator: this.checkPassword,
				            }],
				          })(
				            <Input type="password" onBlur={(e)=>this.handleConfirmBlur(e)} />
				          )}
				        </FormItem>
				        <FormItem  wrapperCol={{ span: 18, offset: 6 }}>
				         <Button type="primary" size='large' onClick={(e)=>this.handleSubmit(e)}>立即注册</Button>
				         <Button style={{marginLeft:15}} size='large' onClick={()=>this.callback()}>重置</Button>
				        </FormItem>
				       </Form>
                    </div>
                  </Col>
                </Row>
              </div>  
            </Col>
          </Row>
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
export default connect(mapStateToProps)(Form.create()(RegisterIndex));