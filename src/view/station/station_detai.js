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
import {
  HTTP_URL
} from '../../utils/URL';

/*详情岗位板块*/

class StationDetai extends React.Component {
  state = {
    detai_id: this.props.params.id,
    detai_data: {},
    loading: false
  }
  componentDidMount() {
    this.setState({
      loading: true
    })
    $.get(`${HTTP_URL}/biz/post/${this.state.detai_id}`, function(result) {
      this.setState({
        detai_data: result.content,
        loading: false
      })
    }.bind(this));
    // this.props.dispatch({
    //   type: 'StationManage/StationDetai',
    //   payload: {
    //     id: this.state.detai_id,
    //   }
    // })

  }
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      detai_data,
      loading
    } = this.state;
    console.log(detai_data)
    return (
      <div>
      <div className={styles.StationDetaiCations}>
          <div className={styles.StationCationAuto}>
             <Row className={styles.StationDetaiBox}>
               <Col span={16} >
               <Spin spinning={loading}>
                  <div className={styles.StationDetaiUser}>
                   <div>乐意网络平台招聘公司</div>
                   <h1>{detai_data.station_name}</h1>
                   <div><span className={styles.StationLabelColor}>面议</span> / 湖北武汉 /  本科以上 /  全职</div>
                   <div><Tag>互联网IT</Tag><Tag>大数据</Tag><Tag>上市公司</Tag></div>
                   <div>发布日期：2017.08.22</div>
                  </div>
                </Spin>
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
           <Spin spinning={loading}>
            <div className={styles.StationDetaiContent} dangerouslySetInnerHTML={{__html:detai_data.htmlBody}}>
            </div>
            </Spin>
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

function mapStateToProps(props) {
  return {
    StationManage: props.StationManage,
  };
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(StationDetai);