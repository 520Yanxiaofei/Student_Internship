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
	Pagination,
	Col,
	Row,
	Table,
	Breadcrumb,
	Button,
} from 'antd';
import CountUp from 'react-countup';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';
import Localhostd from '../../components/public/localhost';


const columnsNetdata = [{
	title: '序号',
	dataIndex: 'key',
	key: 'key',
	width: '5%',
	render: (text) => {
		return (
			<span className={styles.TableTag}>{text}</span>
		)
	}
}, {
	title: '岗位名称',
	dataIndex: 'task_pid',
	key: 'task_pid',
	width: '20%'
}, {
	title: '岗位分类',
	dataIndex: 'task_name',
	key: 'task_name',
	width: '20%'
}, {
	title: '岗位标签',
	dataIndex: 'task_protocol',
	key: 'task_protocol',
	width: '20%'
}, {
	title: '发布日期',
	dataIndex: 'task_ip',
	key: 'task_ip',
	width: '10%'
}, {
	title: '操作',
	dataIndex: 'task_port',
	key: 'task_port',
	render: () => {
		return (
			<div><Button>详情</Button> | <Button>编辑</Button> | <Button>删除</Button></div>
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
class StationList extends React.Component {
	state = {
		selectedRowKeys: [], // Check here to configure the default column
		loading: false,
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
	render() {
		const content = (
			<Col span={12}>
                  <Breadcrumb>
                    <Breadcrumb.Item><Link to="/" >&nbsp;<Icon type="home" />&nbsp;</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>统计展示</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
		);
		const {
			loading,
			selectedRowKeys
		} = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		const hasSelected = selectedRowKeys.length > 0;

		return (
			<div>
					<Localhostd name="所有岗位" content={content}/>
					<QueueAnim type="top" component="div">
					  <Row className={styles.SitausBox} key="1">
					    <div style={{marginBottom:15}}>
					    <Button type="primary"><Link to='/station_add'>新增岗位</Link></Button>&nbsp;&nbsp;
					    <Button
			            type="primary"
			            onClick={this.start}
			            disabled={!hasSelected}
			            loading={loading}
			          >
			            多选删除
			          </Button>
			          <span style={{ marginLeft: 8 }}>
			            {hasSelected ? `已选择 ${selectedRowKeys.length} 个岗位` : ''}
			          </span>
					    </div>
					    <Table rowSelection={rowSelection} columns={columnsNetdata} loading={false} pagination={true} dataSource={Networkdata}/>
					</Row>
				</QueueAnim>
			</div>
		);
	}
}
export default StationList