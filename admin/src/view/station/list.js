import React, {
	Component,
	PropTypes
} from 'react';
import {
	connect
} from 'dva';
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
import {
	HTTP_URL
} from '../../utils/URL';


class StationList extends React.Component {
	state = {
		selectedRowKeys: [], // Check here to configure the default column
	}
	start = () => {

	}
	componentDidMount() {
		this.props.dispatch({
			type: 'StationManage/StationList',
			payload: {
				size: 10,
				page: 1
			}
		})
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	onSelectChange = (selectedRowKeys) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({
			selectedRowKeys
		});
	};
	/*删除职位*/
	StationDel(id, key) {
		$.ajax({
			url: `${HTTP_URL}/biz/post/${id}`,
			type: 'DELETE',
			success: function(result) {
				console.log(result)
			}
		});
		// this.props.dispatch({
		// 	type: 'StationManage/StationDel',
		// 	payload: {
		// 		id: id,
		// 		index: key
		// 	}
		// })
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
			selectedRowKeys
		} = this.state;
		const {
			StationListData,
			loading
		} = this.props.StationManage
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		const hasSelected = selectedRowKeys.length > 0;
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
			dataIndex: 'station_name',
			key: 'station_name',
			width: '20%'
		}, {
			title: '岗位分类',
			dataIndex: 'station_category',
			key: 'station_category',
			width: '20%'
		}, {
			title: '工作城市',
			dataIndex: 'station_address',
			key: 'station_address',
			width: '10%',
		}, {
			title: '岗位标签',
			dataIndex: 'station_tag',
			key: 'station_tag',
			width: '20%',
			render: (text) => {
				return (
					<span>{text.split(',')}</span>
				)
			}
		}, {
			title: '发布日期',
			dataIndex: 'task_ip',
			key: 'task_ip',
			width: '10%'
		}, {
			title: '操作',
			dataIndex: 'task_port',
			key: 'task_port',
			render: (text, record) => {
				return (
					<div><Button>详情</Button> | <Button>编辑</Button> | <Button onClick={()=>this.StationDel(record.id,record.key)}>删除</Button></div>
				)
			}
		}];

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
					    <Table loading={loading} rowSelection={rowSelection} columns={columnsNetdata} loading={false} pagination={true} dataSource={StationListData.list}/>
					</Row>
				</QueueAnim>
			</div>
		);
	}
}

function mapStateToProps(props) {
	return {
		StationManage: props.StationManage,
	};
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(StationList);