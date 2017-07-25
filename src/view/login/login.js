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
  Tabs
} from 'antd';
import {
  Link
} from 'dva/router';
import styles from './index.less';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


/*登陆板块*/
function callback(key) {
  console.log(key);
}
class Login extends React.Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
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
        }
      })
    });
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const {
      loading
    } = this.props.LoginUser
    return (
      <div className={styles.LoginContent}>
      <Row>
            <Col span={24}>
              <div className={styles.LoginForm}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="学生登录" key="1">
                     <img className={styles.LoginUserimg} src="img/login_user.png"/>
                     <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem hasFeedback>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入手机号或者账号!' }],
                          })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入手机号或者账号" />
                          )}
                        </FormItem>
                        <FormItem hasFeedback>
                          {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                          )}
                        </FormItem>
                        <FormItem>
                          <Button type="primary" loading={loading} htmlType="submit" size='large' className="login-form-button">
                            立即登录
                          </Button>
                        </FormItem>
                        <FormItem style={{marginBottom:0}}>
                          <Button size='large' className="login-form-buttonDe" onClick={()=>this.props.ChangeStatus()}>
                            还没有注册？
                          </Button>
                        </FormItem>
                      </Form>
                  </TabPane>
                  <TabPane tab="企业登录" key="2">
                      <Form onSubmit={this.handleSubmit} className="login-form" style={{height:312}}>
                        <FormItem hasFeedback>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入手机号或者账号!' }],
                          })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入手机号或者账号" />
                          )}
                        </FormItem>
                        <FormItem hasFeedback>
                          {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                          )}
                        </FormItem>
                        <FormItem>
                          <Button type="primary"  htmlType="submit" size='large' className="login-form-button">
                            登录后台
                          </Button>
                        </FormItem>
                        <FormItem style={{marginBottom:0}}>
                          <Button size='large' className="login-form-buttonDe" onClick={()=>this.props.ChangeCompany()}>
                            还没有入驻？
                          </Button>
                        </FormItem>
                      </Form>
                  </TabPane>
                </Tabs>
              </div>  
            </Col>
          </Row>
          </div>
    )
  }
}

function mapStateToProps(LoginUser) {
  return {
    ...LoginUser,
  };
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(Form.create()(Login));