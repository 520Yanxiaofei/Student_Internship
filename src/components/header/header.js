import React, {
	Component,
	PropTypes
} from 'react';
import styles from './header.less';
import {
	Link
} from 'dva/router';
import cookie from 'react-cookie';
export default class Header extends React.Component {
	state = {
		UserStatus: cookie.load('DemoUser')
	}
	ChangeOut() {
		this.props.loginOut()
		this.setState({
			UserStatus: cookie.load('DemoUser')
		})
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			UserStatus: cookie.load('DemoUser')
		})
	}
	render() {
		const {
			UserStatus
		} = this.state;
		return (
			<div className={styles.HeaderTop}>
			  <div className={styles.HeaderAuto}>
			    <div className={styles.HeaderLogo}>
                     <h1>湖北大学生实习实训网</h1>
                     <ul>
                      <li><Link to="/" >首页</Link></li>
                      <li><Link to="/station_index">实习岗位</Link></li>
                     </ul>
			    </div>
			    <div className={styles.HeaderUser}>
			          {
			          	  UserStatus && UserStatus.userName != ''?
			          	<div className={styles.HeaderUserOk}>欢迎你，{UserStatus.userName}<span><Link to="/user_index">个人中心</Link></span>&nbsp;<span onClick={()=>this.ChangeOut()}>退出</span></div>
			          	:
			          	<div className={styles.HeaderLogin}>
			          	<span><Link to="/login/1">登录</Link></span>
			          	<span><Link to="/register/1">注册</Link></span>
			          	<span><Link to="/register/2">企业入驻</Link></span>
			          	</div>
			          }
			    </div>
			  </div>
			</div>
		)
	}
}