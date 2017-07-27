import React, {
	Component,
	PropTypes
} from 'react';
import styles from './header.less';
import {
	Link
} from 'dva/router';
import cookie from 'react-cookie';
import {
	Icon
} from 'antd'
export default class Header extends React.Component {
	state = {
		UserStatus: cookie.load('AdminUser')
	}
	ChangeOut() {
		this.props.loginOut()
	}
	render() {

		const {
			UserStatus
		} = this.state;
		console.log(UserStatus)
		return (
			<div>
			<div className="headerRight">
			       <div className="userImg">
	                  <span><Icon type="user" /></span>
	                  欢迎您，{UserStatus.userName}
			       </div>
			       <div className="loginGout" onClick={()=>this.ChangeOut()}>点此退出</div>
			 </div> 
		   </div>
		)
	}
}