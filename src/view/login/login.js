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
import cookie from 'react-cookie';
import styles from './index.less';
import Footer from '../../components/footer/footer';
import {
  HTTP_URL
} from '../../utils/URL';
const FormItem = Form.Item;

const Code = cookie.load('CodeTimes');
const Codec = cookie.load('CodeTimec');

/*验证码组件*/
class Codeimg extends React.Component {
  componentDidMount() {
    this.codeValue()
  };
  /*获取验证码*/
  ajaxcode() {
    $.get(this.props.url, function(result) {
      document.getElementById('codeImg').src = this.props.url;
    }.bind(this));
  };
  codeValue() {
    this.ajaxcode()
  }

  render() {
    return (
      <div style={{cursor:'pointer',width:130}}><img alt='换一个' onClick={()=>this.codeValue()} style={{height:32}} id="codeImg" src=''/></div>
    )
  }
}


class LoginForm extends React.Component {
  componentWillUnmount() {
    this.props.form.resetFields()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return false;
      }
      /*请求登录*/
      this.props.handleSubmit(values)
    })
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem hasFeedback>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入手机号或者账户名!' }],
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
                       { 
                        this.props.codeStatus?
                        <Row gutter={8}>
                          <Col span={12}>
                          <FormItem
                            hasFeedback
                            className="codeInput"
                          >
                            {getFieldDecorator('captcha', {
                              rules: [{
                                required: true, message: '验证码不能为空!',
                              }],
                            })(
                              <Input placeholder="请输入验证码"/>
                            )}
                             </FormItem>
                            </Col>
                            <Col span={12}>
                              <Codeimg url={this.props.url}/>
                            </Col>
                          </Row>
                        :null
                      }
                        <FormItem>
                          <Button type="primary" loading={this.props.loading} htmlType="submit" size='large' className="login-form-button">
                            立即登录
                          </Button>
                        </FormItem>
                        <FormItem style={{marginBottom:0}}>
                          <Button size='large' className="login-form-buttonDe">
                            {(()=>{
                              switch(this.props.userType){
                                case '1':return <Link to='/register/1'>还没有账号</Link>
                                case '2':return <Link to='/register/2'>还没有账号？企业注册</Link>
                                default:return <div>页面错误</div>
                              }
                            })()}
                          </Button>
                        </FormItem>
                      </Form>
    )
  }
}
const Logincom = Form.create()(LoginForm)


class LoginIndex extends React.Component {
    state = {
      userType: this.props.params.status,
      codeStatus: false
    }
    componentDidMount() {
      this.codeValue()
    };

    /*检验本地登录次数，初始化*/
    codeValue() {
      if (this.state.userType == '1') {
        if (Code && Code.Usercode != '' && Code.Usercode >= 3) {
          this.props.dispatch({
            type: 'LoginUser/showloading',
            payload: {
              Usercode: Code.Usercode
            }
          })
        } else {
          this.setState({
            codeStatus: false,
          })
          this.props.dispatch({
            type: 'LoginUser/showloading',
            payload: {
              Usercode: 0
            }
          })
        }
      }


      if (this.state.userType == '2') {
        if (Codec && Codec.Compcode != '' && Codec.Compcode >= 3) {
          this.props.dispatch({
            type: 'LoginUser/showloading',
            payload: {
              Compcode: Codec.Compcode
            }
          })
        } else {
          this.setState({
            codeStatus: false,
          })
          this.props.dispatch({
            type: 'LoginUser/showloading',
            payload: {
              Compcode: 0
            }
          })
        }
      }

    };
    componentWillUnmount() {
      window.scrollTo(0, 0);
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps) {
        this.setState({
          userType: nextProps.params.status
        })
      }
      /*超过三次登陆失败，调用验证码*/
      const {
        Usercode,
        Compcode,
        loading,
      } = nextProps.LoginUser;
      if (nextProps.params.status == '1') {
        if (Usercode >= 3 && !loading) {
          this.setState({
            codeStatus: true
          })
        } else {
          this.setState({
            codeStatus: false
          })
        }
      }
      if (nextProps.params.status == '2') {
        if (Compcode >= 3 && !loading) {
          this.setState({
            codeStatus: true
          })
        } else {
          this.setState({
            codeStatus: false
          })
        }
      }
    }
    callback() {
      this.props.form.resetFields()
    }
    render() {
        const {
          loading
        } = this.props.LoginUser
        const {
          userType,
          codeStatus
        } = this.state
        const LoginData = {
          loading,
          codeStatus,
          userType,
          handleSubmit: (values) => {
            this.props.dispatch({
              type: 'LoginUser/Userlogin',
              payload: {
                ...values,
                userType: this.state.userType,
              }
            })
          },
          url: `${HTTP_URL}/captcha/`,
        }
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
                     <Logincom {...LoginData}/>
              </div>  
            </Col>
          </Row>
          </div> <Footer footerBj='default' />
      < /div>
    )
  }
}

function mapStateToProps(props) {
  return {
    LoginUser: props.LoginUser,
  };
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(LoginIndex);