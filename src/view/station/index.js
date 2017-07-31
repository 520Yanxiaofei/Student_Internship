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
	AutoComplete,
	Tag,
	Table,
	Pagination
} from 'antd';
import {
	Link
} from 'dva/router';
import styles from './index.less';
import Stepmodal from '../../components/modal/Steps_modal';
const Option = AutoComplete.Option;


/*实习岗位板块*/

/*搜索*/
function onSelect(value) {
	console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
	return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
	return (new Array(getRandomInt(5))).join('.').split('.')
		.map((item, idx) => ({
			query,
			category: `${query}${idx}`,
			count: getRandomInt(200, 100),
		}));
}

function renderOption(item) {
	return (
		<Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href='#'
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      区块中
      <span className="global-search-item-count">约 {item.count} 个结果</span>
    </Option>
	);
}




class StationIndex extends React.Component {
	state = {
		dataSource: [],
		visible:false,
		shenfont:0
	}

	handleSearch = (value) => {
		this.setState({
			dataSource: value ? searchResult(value) : [],
		});
	}
	handvisible(record){
       console.log(record)
		// this.setState({
		// 	visible:true
		// })
		
		this.props.dispatch({
				type:'PersonalCenter/ApplierAddsd',
				payload:{
					...record,
				}
			})
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

	render() {
		const {
			dataSource
		} = this.state;

		const {
			StationListData,
			loading
		} = this.props.StationManage
        /*搜索结果*/
		const columns = [{
			title: '岗位名称',
			dataIndex: 'station_name',
			width: '30%',
			render: (text, record) => {
				return (
					<h3><Link target="_blank" to={`/station_detai/${record.id}`}>{text}</Link></h3>
				)
			}
		}, {
			title: '企业名称',
			dataIndex: '',
			width: '30%',
		}, {
			title: '城市',
			dataIndex: '',
			width: '10%',
		}, {
			title: '发布日期',
			dataIndex: '',
			width: '10%',
		}, {
			title: '操作',
			width: '10%',
			render: (text,record) => {
				return (
					<Button onClick={()=>this.handvisible(record)}>申请职位</Button>
				)
			}
		}];
		const TableData = {
			loading,
			columns,
			dataSource: StationListData.list,
			pagination: false,
		}
		const PagintaionData = {
			onChange: (current) => {
				this.props.dispatch({
					type: 'StationManage/StationList',
					payload: {
						size: 10,
						page: current
					}
				})
			},
			current: 1,
			defaultCurrent: 10,
			total: StationListData.total,
			pageSizeOptions: ['10'],
		}


		return (
			<div>
      <div className={styles.StationCations}>
          <div className={styles.StationCationAuto}>
            <Row type="flex" justify="space-around" className={styles.StationFont}>
              <Col span={3}><label>入驻城市数（市）</label><h1>452</h1></Col>
              <Col span={3}><label>行业数（个）</label><h1>345</h1></Col>
              <Col span={3}><label>入驻企业数（家）</label><h1>128</h1></Col>
              <Col span={3}><label>岗位数（个）</label><h1>873,834</h1></Col>
              <Col span={3}><label>学生数（人）</label><h1>3484</h1></Col>
            </Row>
            <Row>
                <div className="global-search-wrapper" style={{ width:600,margin:'0 auto',marginTop:30 }}>
			        <AutoComplete
			          className="global-search"
			          size="large"
			          style={{ width: '100%' }}
			          dataSource={dataSource.map(renderOption)}
			          onSelect={onSelect}
			          onSearch={this.handleSearch}
			          placeholder="请输入岗位名称或者公司名称，关键词如：'销售'"
			          optionLabelProp="text"
			        >
			          <Input
			            suffix={(
			              <Button className="search-btn" size="large" type="primary">
			                <Icon type="search" />
			              </Button>
			            )}
			          />
			        </AutoComplete>
			      </div>
            </Row>
          </div>
      </div>
      <div className={styles.StationSelectBox}>
         <Row>
          <Col span={4}>
            <div className={styles.StationLeftTab}>
             <h2>所有城市</h2>
            <ul className={styles.StationTablabel}>
              <li>宜昌市<span>(34)</span></li>
              <li>襄樊市<span>(12)</span></li>
              <li>黄冈市<span>(8)</span></li>
              <li>咸宁市<span>(34)</span></li>
              <li>麻城市<span>(12)</span></li>
              <li>黄石市<span>(8)</span></li>
            </ul>
            <h2>相关行业</h2>
            <ul className={styles.StationTablabel}>
              <li>互联网/软件<span>(34)</span></li>
              <li>外语/民族语<span>(12)</span></li>
              <li>财税/经济<span>(8)</span></li>
              <li>互联网/软件<span>(34)</span></li>
              <li>外语/民族语<span>(12)</span></li>
              <li>财税/经济<span>(8)</span></li>
            </ul>
            <h2>企业性质</h2>
            <ul className={styles.StationTablabel}>
              <li>互联网/软件互联网<span>(34)</span></li>
              <li>大数据安全<span>(12)</span></li>
              <li>财务金融<span>(8)</span></li>
              <li>销售客服<span>(34)</span></li>
              <li>财税/经济<span>(8)</span></li>
            </ul>
            </div>
          </Col>
          <Col span={20}>
             <div className={styles.StationTag}>已选条件：<Tag color="orange" closable>宜昌市</Tag><Tag color="orange" closable>IT互联网</Tag><Tag color="orange" closable>前端工程师实习生</Tag></div>
             <div className={styles.StationTable}>
                <Row><Col span={24}><Table {...TableData} /></Col></Row>
                <div style={{marginTop:20,textAlign:'right'}}>
                <Pagination showSizeChanger {...PagintaionData}/>
                </div>
             </div>
             <Stepmodal visible={this.state.visible} handleCancel={()=>this.setState({visible:false})}/>
          </Col>
         </Row>
      </div>
      
      </div>
		)
	}

}

function mapStateToProps(props) {
	return {
		StationManage: props.StationManage,
		PersonalCenter:props.PersonalCenter
	};
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(StationIndex);