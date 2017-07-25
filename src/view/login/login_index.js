import React from 'react';
import {
	Link
} from 'dva/router';
import {
	Button
} from 'antd';
import styles from './index.less';
import Login from './login';
import Register from './register';
import Registercompany from './register_company';
import Footer from '../../components/footer/footer';

export default class LoginIndex extends React.Component {
	state = {
		Status: this.props.params.status,
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
	        <div className={styles.LoginTop}>
	           <div className={styles.LoginTitle}>
	             <Link to='/'>
	             <h1>LOGO</h1>
	             <h1>湖北大学生实习实训网</h1>
	             <h3>全省统一大学生实习实训公共服务网络平台</h3>
	             </Link>
	           </div>
	        </div>
	          {(()=>{
	          	switch(this.state.Status){
	          		//学生登陆-注册切换
	          		case 'login':return <Login ChangeStatus={()=>this.setState({Status: 'register'})} ChangeCompany={()=>this.setState({Status:'company'})}></Login>
	          		case 'register':return <Register ChangeStatus={()=>this.setState({Status: 'login'})}></Register>
	          		case 'company':return <Registercompany ChangeStatus={()=>this.setState({Status: 'login'})}></Registercompany>
	          		default:<div>页面错误</div>
	          	}
	          })()}
	        <Footer footerBj='default'/>
          </div>
		)
	}
}