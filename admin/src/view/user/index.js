import React, {
	Component,
	PropTypes
} from 'react';
import {
	Link,
} from 'react-router';
import {
	Spin,
	Icon,
	Col,
	Row,
	Breadcrumb,
	Button,
	Table
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';
import Localhostd from '../../components/public/localhost';
import Useredit from '../../components/modal/user_edit';


const columnsNetdata = [{
	title: '序号',
	dataIndex: 'key',
	key: 'key',
	render: (text) => {
		return (
			<span className={styles.TableTag}>{text}</span>
		)
	}
}, {
	title: '用户名',
	dataIndex: 'task_pid',
	key: 'task_pid',
}, {
	title: '权限角色',
	dataIndex: 'task_name',
	key: 'task_name',
}, {
	title: '发布日期',
	dataIndex: 'task_ip',
	key: 'task_ip',
}, {
	title: '操作',
	dataIndex: 'task_port',
	key: 'task_port',
	render: () => {
		return (
			<div><Button>设置</Button> | <Button>删除</Button></div>
		)
	}
}];

const Networkdata = [{
	key: 1,
	target_ip: "",
	target_port: "-",
	task_ip: "TCP",
	task_name: "数据库",
	task_pid: "应用进程",
	task_port: "3306",
	task_protocol: "mysql",
	task_status: "1"
}, {
	key: 2,
	target_ip: "",
	target_port: "-",
	task_ip: "TCP",
	task_name: "WEB服务器",
	task_pid: "应用进程",
	task_port: "80",
	task_protocol: "IIS",
	task_status: "1"
}, {
	key: 3,
	target_ip: "",
	target_port: "-",
	task_ip: "TCP",
	task_name: "RPC",
	task_pid: "系统进程",
	task_port: "135",
	task_protocol: "svchost",
	task_status: "1"
}, {
	key: 4,
	target_ip: "",
	target_port: "-",
	task_ip: "TCP",
	task_name: "RPC",
	task_pid: "系统进程",
	task_port: "135",
	task_protocol: "svchost",
	task_status: "1"
}, {
	key: 5,
	target_ip: "",
	target_port: "-",
	task_ip: "TCP",
	task_name: "RPC",
	task_pid: "系统进程",
	task_port: "135",
	task_protocol: "svchost",
	task_status: "1"
}];


class UserList extends React.Component {
	state = {
		selectedRowKeys: [], // Check here to configure the default column
		loading: false,
		visible: false
	}
	start = () => {
		this.setState({
			loading: true
		});
		// ajax request after empty completing
		setTimeout(() => {
			this.setState({
				selectedRowKeys: [],
				loading: false,
			});
		}, 1000);
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	onSelectChange = (selectedRowKeys) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({
			selectedRowKeys
		});
	}
	onChangeUserEdit() {
		this.setState({
			visible: true
		})
	}
	render() {
		const {
			loading,
			selectedRowKeys
		} = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		const hasSelected = selectedRowKeys.length > 0;

		const ModalDetai = {
			visible: this.state.visible,
			handleOk: () => {
				this.setState({
					visible: false
				})
			},
			handleCancel: () => {
				this.setState({
					visible: false
				})
			},
			DetaiData: {
				title: '测试',
				htmlBody: this.state.html
			}
		}
		const content = (
			<Col span={24}>
                  <Breadcrumb>
                    <Breadcrumb.Item><Link to="/" >&nbsp;<Icon type="home" />&nbsp;</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>统计展示</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
		);
		return (
			<div>
				<Localhostd name="所有用户" content={content}/>
				<QueueAnim type="top" component="div">
				  <Row className={styles.SitausBox} key="1">
				    <div style={{marginBottom:15}}>
				    <Button type="primary" onClick={()=>this.onChangeUserEdit()}>新增用户</Button>&nbsp;&nbsp;
				    <Button
		            type="primary"
		            onClick={this.start}
		            disabled={!hasSelected}
		            loading={loading}
		          >
		            多选删除
		          </Button>
		          <span style={{ marginLeft: 8 }}>
		            {hasSelected ? `已选择 ${selectedRowKeys.length} 个用户` : ''}
		          </span>
				    </div>
				    <Table rowSelection={rowSelection} columns={columnsNetdata} loading={false} pagination={true} dataSource={Networkdata}/>
				  </Row>
				  </QueueAnim>
				  <Useredit {...ModalDetai}/>
			</div>
		);
	}
}

export default UserList