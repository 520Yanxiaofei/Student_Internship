import React, {
	Component,
	PropTypes
} from 'react';
import styles from './header.less';
import {
	Icon
} from 'antd'

const HeaderCookie = ({
	loginOut
}) => {
	// if (!cookieuser) return null;
	return (
		<div>
			<div className="headerRight">
			       <div className="userImg">
	                  <span><Icon type="user" /></span>
	                  欢迎您，admin@uway.com
			       </div>
			       <div className="loginGout" onClick={loginOut}>点此退出</div>
			 </div> 
		</div>
	)
}

export default HeaderCookie