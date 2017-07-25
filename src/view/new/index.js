import React from 'react';
import {
  connect
} from 'dva';
import {
  Spin,
  Icon,
  message,
  Form,
  Switch,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Carousel
} from 'antd';
import {
  Link
} from 'dva/router';
import styles from './index.less';
import InternShip from '../../components/public/Internship';


/*新闻首页板块*/
export default class NewIndex extends React.Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>

      <div className={styles.NewCations}>
        <div className={styles.NewCationAuto}>
           <Row>
             <Col span={16}>
                <Carousel effect="fade" autoplay>
                  <div>
                    <img src="img/banner01.png"/>
                    <div className={styles.BannerTitle}>
                      <h2>学校巡视整改工作领导小组召开会议推进巡视整改工作</h2>
                    </div>
                  </div>
                  <div>
                    <img src="img/banner02.png"/>
                    <div className={styles.BannerTitle}>
                      <h2>清华校工会组织青年教职工赴甘肃开展暑期社会实践活动</h2>
                    </div>
                  </div>
                </Carousel>
             </Col>
             <Col span={8}>
               <div className={styles.NewCotent}>
                  <h2>热点新闻<span>Hot News</span></h2>
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
      <div className={styles.NewSelectBox}>
        <div className={styles.ImgBarner}>
           <img src="img/banner.png"/>
        </div>
        <div className={styles.NewSelectCenter}>
          <Row>
            <Col span={16}>
              <ul className={styles.NewTab}>
                <li className={styles.NewTabActive}><h2>即时新闻</h2><p>Instant News</p></li>
                <li><h2>政策解读</h2><p>Policy Interpretation</p></li>
                <li><h2>市州动态</h2><p>City State Dynamics</p></li>
                <li><h2>经验交流</h2><p>Experience Exchange</p></li>
              </ul>
              <div className={styles.NewList}>
                <ul>
                  <li>
                   <Link to="/new_detai">
                    <div className={styles.NewDate}>
                      <h1>23</h1>
                      2017-02
                    </div>
                    <div className={styles.NewDetai}>
                       <h2>启迪之星向清华全球创新学院捐赠发展基金</h2>
                      <p className={styles.NewNrtext}>7月12日，启迪之星捐赠清华全球创新学院发展基金签约仪式在清华大学近春园举行。清华大学副校长、教育基金会理事长杨斌，启迪控股总裁袁桅、董事长张金生，全球创新学院中方院长史元春出席捐赠仪式。</p>
                      <span><Icon type="clock-circle-o" />&nbsp;2017-02-14</span>
                    </div>
                    </Link>
                  </li>
                 <li>
                   <Link to="/new_detai">
                    <div className={styles.NewDate}>
                      <h1>23</h1>
                      2017-02
                    </div>
                    <div className={styles.NewDetai}>
                       <h2>启迪之星向清华全球创新学院捐赠发展基金</h2>
                      <p className={styles.NewNrtext}>7月12日，启迪之星捐赠清华全球创新学院发展基金签约仪式在清华大学近春园举行。清华大学副校长、教育基金会理事长杨斌，启迪控股总裁袁桅、董事长张金生，全球创新学院中方院长史元春出席捐赠仪式。</p>
                      <span><Icon type="clock-circle-o" />&nbsp;2017-02-14</span>
                    </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="/new_detai">
                    <div className={styles.NewDate}>
                      <h1>23</h1>
                      2017-02
                    </div>
                    <div className={styles.NewDetai}>
                       <h2>启迪之星向清华全球创新学院捐赠发展基金</h2>
                      <p className={styles.NewNrtext}>7月12日，启迪之星捐赠清华全球创新学院发展基金签约仪式在清华大学近春园举行。清华大学副校长、教育基金会理事长杨斌，启迪控股总裁袁桅、董事长张金生，全球创新学院中方院长史元春出席捐赠仪式。</p>
                      <span><Icon type="clock-circle-o" />&nbsp;2017-02-14</span>
                    </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="/new_detai">
                    <div className={styles.NewDate}>
                      <h1>23</h1>
                      2017-02
                    </div>
                    <div className={styles.NewDetai}>
                       <h2>启迪之星向清华全球创新学院捐赠发展基金</h2>
                      <p className={styles.NewNrtext}>7月12日，启迪之星捐赠清华全球创新学院发展基金签约仪式在清华大学近春园举行。清华大学副校长、教育基金会理事长杨斌，启迪控股总裁袁桅、董事长张金生，全球创新学院中方院长史元春出席捐赠仪式。</p>
                      <span><Icon type="clock-circle-o" />&nbsp;2017-02-14</span>
                    </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="/new_detai">
                    <div className={styles.NewDate}>
                      <h1>23</h1>
                      2017-02
                    </div>
                    <div className={styles.NewDetai}>
                       <h2>启迪之星向清华全球创新学院捐赠发展基金</h2>
                      <p className={styles.NewNrtext}>7月12日，启迪之星捐赠清华全球创新学院发展基金签约仪式在清华大学近春园举行。清华大学副校长、教育基金会理事长杨斌，启迪控股总裁袁桅、董事长张金生，全球创新学院中方院长史元春出席捐赠仪式。</p>
                      <span><Icon type="clock-circle-o" />&nbsp;2017-02-14</span>
                    </div>
                    </Link>
                  </li>
                  <li>
                   <Link to="/new_detai">
                    <div className={styles.NewDate}>
                      <h1>23</h1>
                      2017-02
                    </div>
                    <div className={styles.NewDetai}>
                       <h2>启迪之星向清华全球创新学院捐赠发展基金</h2>
                      <p className={styles.NewNrtext}>7月12日，启迪之星捐赠清华全球创新学院发展基金签约仪式在清华大学近春园举行。清华大学副校长、教育基金会理事长杨斌，启迪控股总裁袁桅、董事长张金生，全球创新学院中方院长史元春出席捐赠仪式。</p>
                      <span><Icon type="clock-circle-o" />&nbsp;2017-02-14</span>
                    </div>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </Col>
            <Col span={8}>
             <InternShip/>
            </Col>
          </Row>
        </div>
      </div>
      
      </div>
    )
  }

}