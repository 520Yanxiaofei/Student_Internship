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
	Breadcrumb
} from 'antd';
import CountUp from 'react-countup';
import styles from './situation.less';
import Localhostd from '../../components/public/localhost';

/**/


function Situation() {
	const SituationCountup = (props) => {
		const CountpData = {
			start: 0,
			end: props.end,
			duration: 5,
			useEasing: true,
		};
		return (
			<CountUp {...CountpData}/>
		)
	}
	return (
		<div>
			  <Row gutter={16}>
				  <Col span={8} className={styles.SitauRadius}>
				    <Row>
				      <Col span={8} className={styles.SitatusIcon01}>
                           <div></div>
				      </Col>
				      <Col span={16} className={styles.SitatusTitle01}>
				        <h1><SituationCountup end={586}/><font>（次）</font></h1>
				        <h3>实习岗位发布</h3>
				      </Col>
				    </Row>
				  </Col>
				  <Col span={8} className={styles.SitauRadius}>
				   <Row>
				      <Col span={8} className={styles.SitatusIcon02}>
                           <div></div>
				      </Col>
				      <Col span={16} className={styles.SitatusTitle02}>
				        <h1><SituationCountup end={240}/><font>（次）</font></h1>
				        <h3>申请通过</h3>
				      </Col>
				    </Row>
				  </Col>
				   <Col span={8} className={styles.SitauRadius}>
				    <Row>
				      <Col span={8} className={styles.SitatusIcon03}>
                           <div></div>
				      </Col>
				      <Col span={16} className={styles.SitatusTitle03}>
				        <h1><SituationCountup end={87}/><font>（人）</font></h1>
				        <h3>学生人数</h3>
				      </Col>
				    </Row>
				  </Col>
			  </Row>
		   </div>
	);
}

export default Situation