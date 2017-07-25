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
	Tag,
} from 'antd';
import {
	Link
} from 'dva/router';
import styles from './index.less';
import InternShip from '../../components/public/Internship';


/*详情岗位板块*/

export default class StationIndex extends React.Component {

	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	render() {

		return (
			<div>
      <div className={styles.StationDetaiCations}>
          <div className={styles.StationCationAuto}>
             <Row className={styles.StationDetaiBox}>
               <Col span={16} >
                  <div className={styles.StationDetaiUser}>
                   <div>乐意网络平台招聘公司</div>
                   <h1>前端工程师实习生</h1>
                   <div><span className={styles.StationLabelColor}>面议</span> / 湖北武汉 /  本科以上 /  全职</div>
                   <div><Tag>互联网IT</Tag><Tag>大数据</Tag><Tag>上市公司</Tag></div>
                   <div>发布日期：2017.08.22</div>
                  </div>
               </Col>
               <Col  span={8} >
                   <Row type="flex" justify="space-around" align="middle" className={styles.StationDetaiText}>
				      <Col span={4}>
				       <Button type="primary" icon="laptop" className={styles.StationBtnBj} size='large' style={{background:'#539ce6',borderColor:'#539ce6'}}>申请岗位</Button><br/><br/>
	                   <Button type="primary" icon="heart-o" className={styles.StationBtnDe} size='large'>收藏岗位</Button>
	                   </Col>
                   </Row>
               </Col>
             </Row>
          </div>
      </div>
      <div className={styles.StationDetaiBoxLeft}>
         <Row>
          <Col span={16}>
            <div className={styles.StationDetaiContent}>
                <h3>职位诱惑：</h3>
				<p>出国机会,年底双薪</p>
				<h3>职位描述：</h3>
				<br/>
				<p>岗位职责：</p>

				<p>1、负责web前端、手机、html5 响应式页面设计, JS (JQM )；</p>

				<p>2、配合UI设计师实现其设计风格与理念，同时保证系统的高响应及易用性；</p>

				<p>3、负责CSS3/Javascript等前台框架，制定Web开发中涉及的各种书写规范；</p>

				<p>4、根据产品需求，分析并给出最优的页面前端结构解决方案；</p>

				<p>5、与项目组其他成员一起配合完成开发任务。</p>
				<br/>


				<p>任职资格：</p>

				<p>1、具备页面制作经验，精通各种 web 前端技术 HTML/H5/CSS3/javascript 等，并对符合 web 标准的网站重构有丰富经验 ；</p>

				<p>2、熟练应用bootstrap、EsayUI等自适应框架，有电商网站项目经验；</p>

				<p>3、了解asp.net MVC开发流程，有一定asp.net 开发经验；</p>

				<p>4、接受学习能力强、 代码风格良好；能熟练使用SVN等团队协作工具；</p>

				<p>5、经验3年以上，大专以上学历。.具备英文读写说能力（开发团队有外国员工）。</p>
				<br/>
				<h3>工作地址</h3>

				<p>深圳 - 福田区 - 上步 - 深南中路电子科技大厦C座12G</p>
            </div>
            <Row type="flex" justify="space-around" align="middle" className={styles.StationDetaiBottom}>
                  <Col span={3}></Col>
			      <Col span={3}>
                   <Button type="primary" icon="heart-o" className={styles.StationBtnDe} size='large'>收藏岗位</Button>
                   </Col>
                   <Col span={3}>
                   <Button type="primary" icon="laptop" className={styles.StationBtnBj} size='large' style={{background:'#539ce6',borderColor:'#539ce6'}}>申请岗位</Button>
                   </Col>
                   <Col span={3}></Col>
            </Row>
          </Col>
          <Col span={8}>
             <InternShip/>
          </Col>
         </Row>
      </div>
      <div className={styles.ClearBoth}></div>
      </div>
		)
	}

}