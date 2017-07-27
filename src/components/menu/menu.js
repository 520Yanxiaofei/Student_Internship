import React, {
  PropTypes
} from 'react';
import {
  Link
}
from 'dva/router';
import {
  Menu,
  Icon,
  Switch,
  BackTop
} from 'antd';
import styles from './menu.less';

const SubMenu = Menu.SubMenu;

const Menulist = React.createClass({
  getInitialState() {

    return {
      theme: 'dark',
      current: '1',
      collapse: true
    };
  },
  handleClick(e) {

    this.setState({
      current: e.key,
    });
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  componentDidMount: function() {
    this.componetMenuloation(this.props.localtion)

  },
  componetMenuloation: function(localtion) {
    switch (localtion) {
      case '/':
        return this.setState({
          current: '1'
        })
      case '/situation':
        return this.setState({
          current: '1'
        })
      case '/assetscan':
        return this.setState({
          current: '2'
        });
      case '/assetgraph':
        return this.setState({
          current: '3'
        });
      case '/management':
        return this.setState({
          current: '4'
        });
      case '/managesound':
        return this.setState({
          current: '4'
        });
      case '/alarm':
        return this.setState({
          current: '5'
        });
      case '/search':
        return this.setState({
          current: '6'
        });
      case '/rules':
        return this.setState({
          current: '7'
        });
      case '/rules/2':
        return this.setState({
          current: '7'
        });
      case '/system':
        return this.setState({
          current: '8'
        })
    }
    /*二级子页面选中项*/
    let localtext = localtion.substring(0, 12)
    if (localtext === '/managedetai' || localtext === '/managesound') {
      this.setState({
        current: '4'
      });
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.componetMenuloation(nextProps.localtion)
  },
  componentWillMount: function() {
    window.scrollTo(0, 0);
  },
  render() {
    const collapse = this.state.collapse;

    return (
      <div className={collapse ? styles.menuauto : styles.menuAuto}>
          <div className={styles.headerLogo}>
             <img className={styles.headerLogoImg} src='logo.png'/>
             <h2>Guard-守卫者</h2>
             <h4>RIG资产安全管理系统</h4>

             <span>L4&nbsp;Beta</span>
          </div>
        <Menu 
          className={styles.menuleft} 
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="inline">
             <Menu.Item key="1"><Link to="/situation" ><Icon type="cloud" />安全态势</Link></Menu.Item>
             <Menu.Item key="2"><Link to="/assetscan" ><Icon type="windows-o" />资产扫描</Link></Menu.Item>
             <Menu.Item key="3"><Link to="/assetgraph" ><Icon type="share-alt" />拓扑图</Link></Menu.Item>
             <Menu.Item key="4"><Link to="/management"><Icon type="scan" />安全管理</Link></Menu.Item>
             <Menu.Item key="5"><Link to="/alarm"><Icon type="folder-open" />安全告警</Link></Menu.Item>
             <Menu.Item key="6"><Link to="/search"><Icon type="pay-circle-o" />资产盘点</Link></Menu.Item>
             <Menu.Item key="7"><Link to="/rules/1"><Icon type="setting" />规则库管理</Link></Menu.Item>
             <Menu.Item key="8"><Link to="/system"><Icon type="pay-circle-o" />系统管理</Link></Menu.Item>
        </Menu>
         {/* <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>*/}
        <BackTop visibilityHeight={200}/>
        </div>
    )
  }
});



Menulist.propTypes = {
  // routes: PropTypes.array.isRequired,
};

export default Menulist;