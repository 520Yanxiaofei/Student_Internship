import React, {
  PropTypes
} from 'react';
import {
  Link
} from 'react-router';
import {
  Menu,
  Icon,
  Switch,
  BackTop
} from 'antd';
import styles from './menu.less';
// import styles from './menu.less';
const SubMenudata = require('./menu.json');

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const Menulist = React.createClass({
  getInitialState() {
    return {
      theme: 'dark',
      current: '1',
      collapse: sessionStorage.getItem('MenuStatus') === 'true',
      openKeys: [],
    };
  },
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  },
  onOpenChanges(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({
      openKeys: nextOpenKeys
    });
  },
  getAncestorKeys(key) {
    const map = {};
    return map[key] || [];
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
    this.props.menuOnclick(this.state.collapse)
    sessionStorage.setItem('MenuStatus', !this.state.collapse)
  },
  componentDidMount: function() {
    switch (this.props.localtion) {
      // case '/':
      //   return this.setState({
      //     current: '1'
      //   })
      // case '/situation':
      //   return this.setState({
      //     current: '1'
      //   })
      // case '/assetstopology':
      //   return this.setState({
      //     current: '2'
      //   });
      // case '/assets':
      //   return this.setState({
      //     current: '3'
      //   });
      // case '/management':
      //   return this.setState({
      //     current: '4'
      //   });
      // case '/alarm':
      //   return this.setState({
      //     current: '5'
      //   });
      // case '/search':
      //   return this.setState({
      //     current: '6'
      //   });
      // case '/rules':
      //   return this.setState({
      //     current: '7'
      //   });
      // case '/system':
      //   return this.setState({
      //     current: '8'
      //   })
    }
  },
  // componentWillReceiveProps: function(nextProps) {},
  render() {
    const collapse = !this.state.collapse;
    return (
      <div className={collapse ? styles.menuSub : styles.menuAuto}>
        
         {
          collapse?
          <div className="headerLogo">
                <h2>后台管理系统</h2>
                <h4>湖北大学生实习实训网</h4>
                <span>版本1.1.0</span>
          </div>
          :
          <div className={styles.headerLogotext}>
               LOGO
          </div>
          }
        <Menu 
          className={styles.menuleft} 
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          onOpenChange={this.onOpenChanges}
          openKeys={this.state.openKeys}
          defaultOpenKeys={['sub1','sub2']}
          mode={collapse?"inline":"vertical"}>
           {
            this.props.SubMenudata.map((menu,index)=>{
              if(menu.menulever!='') 
              return(
                <SubMenu key={menu.key} title={<span><Icon type={menu.icon}/>{collapse?menu.name:''}</span>}>
                  {
                  menu.menulever.map((lever,index)=>{
                    return (<Menu.Item key={lever.key}><Link to={lever.router} >{lever.name}</Link></Menu.Item>)
                  })
                  }
                </SubMenu>
              )
              else 
              return(<Menu.Item key={menu.key}><Link to={menu.router} ><Icon type={menu.icon} />{collapse?menu.name:''}</Link></Menu.Item>)
            })
           }
             
        </Menu>
        <div className="menuAutoleft" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="menu-fold" />:<Icon type="menu-unfold" /> }
        </div>
        <ul className={styles.themeBox}>
           <li className={styles.themeColor1} title='绿色' onClick={()=>this.props.onChangthem('color1')}></li>
           <li className={styles.themeColor2} title='蓝色' onClick={()=>this.props.onChangthem('color2')}></li>
           <li className={styles.themeColor3} title='红色' onClick={()=>this.props.onChangthem('color3')}></li>
           <li className={styles.themeColor4} title='橙色' onClick={()=>this.props.onChangthem('color4')}></li>
          </ul>
			  <BackTop/>
        </div>
    )
  }
});

Menulist.defaultProps = {
  SubMenudata: SubMenudata
};


Menulist.propTypes = {
  // routes: PropTypes.array.isRequired,
};

export default Menulist;