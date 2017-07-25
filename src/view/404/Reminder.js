import React, {
	Component,
	PropTypes
} from 'react';
import {
	Button,
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './reminder.less';


const Reminder = React.createClass({
	render() {
		return (
			<div className={styles.ReminderBox}>
			<img src='/img/fwq.png'/>
		     <h2>服务器异常，请稍后重试...</h2>
		     <p>温馨提示：请检查网络是否正常连接或者点击按钮来重新加载网页</p>
		     <br/>
		     <h4><Button type="primary" onClick={()=>history.go(-1)}>重新加载</Button></h4>
		</div>
		)
	}
})

export default Reminder;