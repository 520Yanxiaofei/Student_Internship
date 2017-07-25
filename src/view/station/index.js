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
	Table
} from 'antd';
import {
	Link
} from 'dva/router';
import styles from './index.less';
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


/*搜索结果*/
const columns = [{
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
			<Button><Link to="">申请职位</Link></Button>
		)
	}
}];

const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		name: `前端工程师实习生 ${i}`,
		age: `某某有限公司${i}`,
		address: `湖北武汉 ${i}`,
		date: '2017.02.33'
	});
}

export default class StationIndex extends React.Component {
	state = {
		dataSource: [],
	}

	handleSearch = (value) => {
		this.setState({
			dataSource: value ? searchResult(value) : [],
		});
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	render() {
		const {
			dataSource
		} = this.state;
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
                <Row><Col span={24}><Table  columns={columns} dataSource={data} /></Col></Row>
             </div>
          </Col>
         </Row>
      </div>
      
      </div>
		)
	}

}