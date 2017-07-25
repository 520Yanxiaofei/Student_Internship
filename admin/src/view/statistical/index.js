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
import styles from './situation.less';
import Localhostd from '../../components/public/localhost';
import SituationCountup from './countup';
const Index1 = React.createClass({
			render() {
				const content = (
					<Col span={12}>
                  <Breadcrumb>
                    <Breadcrumb.Item><Link to="/" >&nbsp;<Icon type="home" />&nbsp;</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>统计展示</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
				);
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
					width: '15%'
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
				return (
						<div>
							<Localhostd name="统计图" content={content}/> < SituationCountup / >
							<QueueAnim type="top" component="div">
							  <Row className={styles.SitausBox} key="1">
							   图表展示，待定业务
							    {/*<Table columns={columnsNetdata} loading={false} pagination={true} dataSource={Networkdata}/>*/}
							  </Row>
							  </QueueAnim>
						< /div>
		);
	},
})
export default Index1