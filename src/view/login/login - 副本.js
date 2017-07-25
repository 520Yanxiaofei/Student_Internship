import React from 'react';
import {
  connect
} from 'dva';
import {
  Spin,
  Icon,
  message,
  Form,
  Switch,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
} from 'antd';
import styles from './login.less';

const FormItem = Form.Item;

/*登陆*/
const Login = React.createClass({
  getInitialState() {
    return {
      error: false,
      loginloading: false,
      checkbox: false,
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      /*请求登录*/
      this.props.dispatch({
        type: 'LoginUser/Userlogin',
        payload: {
          ...values,
        }
      })
    });
  },
  onChange(e) {
    // console.log(`checked = ${e.target.checked}`);
    this.setState({
      checkbox: e.target.checked
    })
    this.props.dispatch({
      type: 'LoginUser/showloading',
      payload: {
        cookieExpires: new Date(new Date().valueOf() + 1 * 24 * 60 * 60 * 1000),
      }
    })

  },
  render() {
    const {
      loginloading
    } = this.props.LoginUser
    const formItemLayout = {
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 22
      },
    };
    const {
      getFieldDecorator
    } = this.props.form;
    console.log()
    return (
      <Spin spinning={loginloading}>
      <div className ={styles.loginCaioner} style={{height:document.body.offsetHeight}}>
      
        <Form  onSubmit={this.handleSubmit} className={styles.loginFrom} style={{marginTop:document.body.offsetHeight/2-300}}>
         <h1 className={styles.loginword}>Guard-守卫者</h1> 
         <h3 className={styles.loginTisd}>RIG资产安全管理系统</h3>
        <FormItem hasFeedback>
          {getFieldDecorator('user_name', {
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input className={styles.Gropinput} addonBefore={<Icon type="user" />} placeholder="请输入用户名" autoComplete="off" />
          )}
        </FormItem>
        <FormItem  hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空!' }],
          })(
            <Input className={styles.Gropinput} addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码" autoComplete="off"/>
          )}
        </FormItem>
        {/*<Row style={{marginBottom:10}}>
         <Col span={24}><Checkbox onChange={this.onChange} style={{marginTop:0}}>记住密码</Checkbox></Col>
        </Row>*/}
        <FormItem style={{marginBottom:0}}>
           <Button type="primary" loading={loginloading} htmlType="submit" className="login-form-button">
            登录
           </Button>
        </FormItem>
      </Form>
      
     </div>
     </Spin>
    )
  }
})


function mapStateToProps(ManageDetai) {
  return {
    ...ManageDetai,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const LoginUser = Form.create()(Login)
  /*建立数据关联关系*/
export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);