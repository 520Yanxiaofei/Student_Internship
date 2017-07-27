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
import Footer from '../../components/footer/footer';
const FormItem = Form.Item;
class LoginIndex extends React.Component {
  state = {
    userType: this.props.params.status,
  }
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        userType: nextProps.params.status
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
      /*请求登录*/
      this.props.dispatch({
        type: 'LoginUser/Userlogin',
        payload: {
          ...values,
          userType: this.state.userType
        }
      })
    });
  }

  callback() {
    this.props.form.resetFields()
  }

  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const {
      loading
    } = this.props.LoginUser
    const {
      userType
    } = this.state
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
	         <div className={styles.LoginContent}>
             <Row>
            <Col span={24}>
              <div className={styles.LoginForm}>
                     <ul className={styles.LoginTabsele}>
                       <li className={userType=='1'?styles.Loginactive:null}><Link to='/login/1'>学生登录</Link></li>
                       <li className={userType=='2'?styles.Loginactive:null}><Link to='/login/2'>企业登录</Link></li>
                     </ul>
                     <img className={styles.LoginUserimg} src="img/login_user.png"/>
                     <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem hasFeedback>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入手机号或者账号!' }],
                          })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入手机号或者账号" autoComplete="off"/>
                          )}
                        </FormItem>
                        <FormItem hasFeedback>
                          {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" autoComplete="off"/>
                          )}
                        </FormItem>
                        <FormItem>
                          <Button type="primary" loading={loading} htmlType="submit" size='large' className="login-form-button">
                            立即登录
                          </Button>
                        </FormItem>
                        <FormItem style={{marginBottom:0}}>
                          <Button size='large' className="login-form-buttonDe">
                            {(()=>{
                              switch(userType){
                                case '1':return <Link to='/register/1'>还没有账号</Link>
                                case '2':return <Link to='/register/2'>还没有账号？企业注册</Link>
                                default:return <div>页面错误</div>
                              }
                            })()}
                          </Button>
                        </FormItem>
                      </Form>
              </div>  
            </Col>
          </Row>
          </div>
	        <Footer footerBj='default'/>
          </div>
    )
  }
}

function mapStateToProps(props) {
  return {
    LoginUser: props.LoginUser,
  };
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(Form.create()(LoginIndex));