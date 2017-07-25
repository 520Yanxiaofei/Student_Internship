import React from 'react';
import {
  connect
} from 'dva';
import {
  Spin,
  Icon,
  message,
  Row,
  Col
} from 'antd';
import {
  Link
} from 'dva/router';
import styles from './index.less';
import InternShip from '../../components/public/Internship';


/*新闻详细板块*/
export default class NewDetai extends React.Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <div className={styles.NewSelectBox}>
        <div className={styles.ImgBarner}>
           <img src="img/banner.png"/>
        </div>
        <div className={styles.NewSelectCenter}>
          <Row>
            <Col span={16}>
              <div>首页 - 政策解读 - 内容</div>
              <div className={styles.NewDetaiTitle}><h1>学校巡视整改工作领导小组召开会议推进巡视整改工作</h1><p>2017.08.20 13:23:00</p></div>
              <div className={styles.NewDetaiNr}>
                 <p>
                  根据学校巡视整改工作的要求，学校整改工作领导小组每周召开会议，听取整改工作进展情况汇报，研究解决整改过程中的重要问题，加强对各单位整改工作的指导和协调。7月21日下午，校党委书记、领导小组组长陈旭主持召开本周的巡视整改工作领导小组会议。
                 </p>
                 <p>会议首先认真学习了7月18日中央巡视办主任黎晓宏带队来校督查巡视整改工作时的讲话，结合学校整改工作实际，交流学习心得体会。与会人员一致认为，中央巡视办来校督查，充分体现了党中央对清华大学的高度重视和亲切关怀，既对我校巡视整改工作提出了更高要求，也对我校今后的改革发展提出了新标准新要求。清华大学党委要深入学习领会习近平总书记关于巡视工作的重要讲话精神，按照“成为巡视整改标杆”的要求，认真剖析存在问题，从严从实推进整改，抓好建章立制，固化整改成果，全面深化综合改革，切实推动学校的“双一流”建设和党的建设各项事业更好的发展。</p>
                 <p>随后，会议逐项梳理了150项整改措施的进展情况，截至目前，共有111项已经“完成”或“基本完成”，其他各项整改措施均已全面启动。会上通报了全校二级单位党委（党总支）提交整改方案、清单以及召开领导班子民主生活会的基本情况，对不合格单位提出批评并责成重新召开领导班子专题民主生活会。会议按照“当下改、长久立”的要求，梳理检查了相关制度的制订和修改情况，基本在按7月底完成的时间进度有序推进。会议还结合巡视提出的问题，围绕学校财务工作、地方院派出院工作、校属产业的发展及存在的问题展开讨论，并明确了各项整改措施完成后的验收要求和审批程序，做到“完成一项、验收一项、销号一项”。</p>
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.NewDetaiRi}>
                <img src="img/img02.png"/>
                <ul>
                    <li><h3>学校巡视整改工作领导小组召开会议推进巡视整改工作</h3></li>
                    <li><h3>颜宁研究组在《细胞》发文报道电鳗激活态电压门控钠离子通道Nav1.4与β1复合物三维结构</h3></li>
                    <li><h3>工业大数据系统与应用发展研讨会在清华举行</h3></li>
                    <li><h3>工业大数据系统与应用发展研讨会在清华举行</h3></li>
                    <li><h3>清华校工会组织青年教职工赴甘肃开展暑期社会实践活动</h3></li>
                    <li><h3>工业大数据系统与应用发展研讨会在清华举行</h3></li>
                  </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      
      </div>
    )
  }

}