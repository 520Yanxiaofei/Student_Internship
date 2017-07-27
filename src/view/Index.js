import React from 'react';
import {
  connect
} from 'dva';
import QueueAnim from 'rc-queue-anim';
import styles from './Index.less';
// import Menu from '../components/menu/menu';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import cookie from 'react-cookie';
import NProgress from 'nprogress'

class Index extends React.Component {

  componentDidMount() {
    // console.log(this)
    // this.props.dispatch({
    //   type: 'LoginUser/Userinfo'
    // })
  }
  render() {
    return (
      <div>
        <Header loginOut={()=>this.props.dispatch({type:'LoginUser/loginOut'})}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(props) {
  return {
    LoginUser: props.LoginUser,
  };
}

/*建立数据关联关系*/
export default connect(mapStateToProps)(Index);