import React from 'react';
import {
  connect
} from 'dva';
import QueueAnim from 'rc-queue-anim';
import styles from './Index.less';
import Menu from '../components/menu/menu';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const IndexMain = React.createClass({
  getInitialState: function() {
    return {
      collapse: sessionStorage.getItem('MenuStatus') === 'true',
      menuThem: styles.themColor1
    }
  },
  componentDidMount: function() {
    const SeesionColor = sessionStorage.getItem('ThemColor')
    this.onChangthem(SeesionColor)
      // this.props.dispatch({
      //   type: 'LoginUser/UserCookie'
      // })
      // console.log(this)
    this.props.dispatch({
      type: 'LoginUser/Userinfo'
    })
  },
  onChangthem: function(color) {
    sessionStorage.setItem('ThemColor', color)
    switch (color) {
      case 'color1':
        this.setState({
          menuThem: styles.themColor1
        })
        break;
      case 'color2':
        this.setState({
          menuThem: styles.themColor2
        })
        break;
      case 'color3':
        this.setState({
          menuThem: styles.themColor3
        })
        break;
      case 'color4':
        this.setState({
          menuThem: styles.themColor4
        })
        break;
    }
  },

  render() {
    return (
      <QueueAnim className={`${styles.heightauto} ${this.state.menuThem}`} component="div">
            <QueueAnim type="left"><Menu key="2" localtion={this.props.location.pathname} menuOnclick={(collapse)=>this.setState({collapse: !collapse})} onChangthem={(color)=>this.onChangthem(color)}/></QueueAnim>
            <QueueAnim type="top">
               <div key="1" className={styles.headerTop}>
                 <Header loginOut={()=>this.props.dispatch({type:'LoginUser/loginOut'})}/>
               </div>
            </QueueAnim>
            <QueueAnim type="bottom" key="3" className={!this.state.collapse ? styles.container : styles.containerAuto} component="div">
               {this.props.children}
               <div className={styles.containerClear}></div>
            </QueueAnim>      
      </QueueAnim>
    )
  }
});

function mapStateToProps(LoginUser) {
  return {
    ...LoginUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

/*建立数据关联关系*/
export default connect(mapStateToProps, mapDispatchToProps)(IndexMain);