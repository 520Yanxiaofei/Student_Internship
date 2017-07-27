import React from 'react';
import {
	connect
} from 'dva';
import {
	Spin,
	Icon,
	message,
	Button,
	Row,
	Col,
	Progress,
	Table,
	Badge
} from 'antd';
import {
	Link
} from 'dva/router';
import styles from './index.less';


/*个人中心板块*/


/*岗位信息*/
const columns = [{
	title: '序号',
	dataIndex: 'key',
	width: '15%',
	render: (text) => {
		return (
			<div >
			<span className={styles.TableTag}>{text}</span>
			</div>

		)
	}
}, {
	title: '岗位名称',
	dataIndex: 'name',
	width: '30%',
	render: (text) => {
		return (
			<h3><Link to="/station_detai">{text}</Link></h3>
		)
	}
}, {
	title: '申请日期',
	dataIndex: 'date',
	width: '30%',
}, {
	title: '申请状态',
	dataIndex: 'address',
	width: '20%',
	render: (text) => {
		return (
			<div><Badge status="success" text={text} /></div>
		)
	}
}, {
	title: '操作',
	width: '10%',
	render: () => {
		return (
			<Button><Link to="/station_detai">查看</Link> | <Link>删除</Link></Button>
		)
	}
}];

const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		name: `前端工程师实习生 ${i}`,
		address: `已通过 ${i}`,
		date: '2017.02.33'
	});
}



/*岗位收藏*/
const columns1 = [{
	title: '岗位名称',
	dataIndex: 'name',
	width: '30%',
	render: (text) => {
		return (
			<h3><Link to="/station_detai">{text}</Link></h3>
		)
	}
}, {
	title: '企业名称',
	dataIndex: 'age',
	width: '30%',
}, {
	title: '城市',
	dataIndex: 'address',
	width: '10%',
}, {
	title: '发布日期',
	dataIndex: 'date',
	width: '10%',
}, {
	title: '操作',
	width: '10%',
	render: () => {
		return (
			<Button><Link to="">查看</Link> | <Link to="">取消收藏</Link></Button>
		)
	}
}];

const data1 = [];
for (let i = 0; i < 46; i++) {
	data1.push({
		key: i,
		name: `前端工程师实习生 ${i}`,
		age: `某某有限公司${i}`,
		address: `湖北武汉 ${i}`,
		date: '2017.02.33'
	});
}


/*消息通知*/
const columns3 = [{
	title: '序号',
	dataIndex: 'key',
	width: '15%',
	render: (text) => {
		return (
			<div >
			<span className={styles.TableTag}>{text}</span>
			</div>

		)
	}
}, {
	title: '通知标题',
	dataIndex: 'name',
	width: '30%',
	render: (text) => {
		return (
			<h3><Link to="/station_detai">{text}</Link></h3>
		)
	}
}, {
	title: '通知日期',
	dataIndex: 'date',
	width: '30%',
}, {
	title: '操作',
	dataIndex: 'address',
	width: '20%',
	render: (text) => {
		return (
			<div><Link>删除</Link></div>
		)
	}
}];

const data3 = [];
for (let i = 0; i < 46; i++) {
	data3.push({
		key: i,
		name: `恭喜您已通过某某公司审核，符合邀请，现邀请你来贵公司面试 ${i}`,
		date: '2017.02.33'
	});
}


class UserIndex extends React.Component {
	state = {
			TabCurrent: '1',
		}
		/*意外清除cookie是否登录*/
	componentDidMount() {
		this.props.dispatch({
			type: 'LoginUser/Userinfo',
		})
		this.props.dispatch({
			type: 'PersonalCenter/UserPersonal',
		})
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	onChageTab(val) {
		console.log(val)
		this.setState({
			TabCurrent: val
		})
	}
	render() {
		const {
			TabCurrent
		} = this.state;
		// console.log(this)
		return (
			<div>
			  <div className={styles.UserContentAuto}>
			    <div className={styles.UserDetais}>
			       <div className={styles.UserDetaiImg}>
			         <span>更换头像</span>
			       </div>
			       <div className={styles.UserDetaiText}>
				        <p>欢迎来到个人中心</p>
				        <h2>颜晓飞</h2>
				        <p>基本信息：男 | 25岁 | 湖北城市建设职业技术学院 | 电子商务12级<Link to="/login_index/register">&nbsp;&nbsp;资料修改</Link></p>
				        <p>联系方式：15337238799</p>
				        <p>资料完善度：</p>
				        <div style={{width:300}}><Progress percent={30} format={percent => `${percent}%`} status="exception"/></div>
			       </div>
			    </div>
			    <div className={styles.UserTabIndex}>
			       <ul className={styles.UserTabMenu}>
			         <li onClick={()=>this.onChageTab('1')} className={TabCurrent=='1'?styles.active:''}><Icon type="switcher"/>岗位申请</li>
			         <li onClick={()=>this.onChageTab('2')} className={TabCurrent=='2'?styles.active:''}><Icon type="heart-o" />岗位收藏</li>
			         <li><Icon type="setting" /><Link to='/login_index/register'>信息设置</Link></li>
			         <li onClick={()=>this.onChageTab('3')} className={TabCurrent=='3'?styles.active:''}><Icon type="mail" />消息通知</li>
			       </ul>
			       <div>
			         <div className={styles.UserTableBox}>
			            {(()=>{
			            	switch(TabCurrent){
			            		case '1':return <Row><Col span={24}><Table  columns={columns} dataSource={data} /></Col></Row>
			            		case '2':return <Row><Col span={24}><Table  columns={columns1} dataSource={data1} /></Col></Row>
			            		case '3':return <Row><Col span={24}><Table  columns={columns3} dataSource={data3} /></Col></Row>
                                default:return <div>页面错误！</div>
			            	}
			            })()}
		                
		             </div>
			       </div>
			    </div>
			  </div>
            </div>
		)
	}

}

function mapStateToProps(props) {
	return {
		LoginUser: props.LoginUser,
		PersonalCenter: props.PersonalCenter
	};
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(UserIndex);