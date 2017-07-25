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
  Button
} from 'antd';
import styles from './login.less';
const FormItem = Form.Item;

/*登陆*/
const Login = React.createClass({
  getInitialState() {
    return {
      error: false,
      loading: false
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

  render() {
    const {
      loading
    } = this.props.LoginUser
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 5
        },
        sm: {
          span: 5
        },
      },
      wrapperCol: {
        xs: {
          span: 19
        },
        sm: {
          span: 19
        },
      },
    };
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <div className ={styles.loginCaioner}>
       <Spin spinning={loading} >
        <Form onSubmit={this.handleSubmit} className={styles.loginFrom} >
        <div className={styles.loginBox}>
           <h1 className={styles.loginword}>企业后台管理系统</h1><br/>
           <p>大学生实习实训网</p>
          </div>
        <FormItem  {...formItemLayout} label="用户名" hasFeedback>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input placeholder="请输入用户名" autoComplete="off" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="密码" hasFeedback >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空!' }],
          })(
            <Input  type="password" placeholder="请输入密码" autoComplete="off"/>
          )}
        </FormItem>
        <FormItem>
           <Button type="primary" loading={loading} htmlType="submit" className="login-form-button">
            登录
           </Button>
        </FormItem>
      </Form>
      </Spin>
       <div className={styles.loginFooter}>
        <p>大学生实习实训网</p>
        <p>Beijing excellent netwoork Safe Technology Ltd</p>
        <p>®版权所有&nbsp;&nbsp;客服电话：00-00000</p>
       </div>
     </div>
    )
  }
})


function mapStateToProps(LoginUser) {
  return {
    ...LoginUser,
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