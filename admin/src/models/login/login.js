import {
	Userlogin,
	Userpwd,
	Userout
}
from '../../api/LoginUser'
import {
	routerRedux
} from 'dva/router';
import cookie from 'react-cookie';
import {
	message,
} from 'antd';

export default {
	namespace: 'LoginUser',
	state: {
		loading: false,
		data: []
	},

	subscriptions: {
		setup({
			dispatch,
			history,
		}) {}
	},
	effects: {
		/*
         判断
        */
		* UserCookie({
			payload
		}, {
			call,
			put
		}) {
			const UserStatus = cookie.load('AdminUser');
			if (UserStatus && UserStatus.username != '' && UserStatus.password != '') {
				// yield put(routerRedux.push('/'));
			} else {
				yield put(routerRedux.push('/login'));
			}
		},
		/*
		 登录
		*/
		* Userlogin({
			payload,
		}, {
			put,
			call
		}) {
			yield put({
					type: 'showloading'
				})
				// setTimeout(10);
			if (payload != '' && payload.username == 'admin' && payload.password == '123') {
				message.success('登录成功')
				cookie.save('AdminUser', payload);
				yield put(routerRedux.push('/'));
				yield put({
					type: 'hideloading'
				})
			} else {
				message.success('账号或者密码错误')
				yield put(routerRedux.push('/login'));
				yield put({
					type: 'hideloading'
				})
			}
		},
		/*退出*/
		* loginOut({
			payload
		}, {
			call,
			put
		}) {
			cookie.remove('AdminUser');
			message.success('退出成功');
			yield put(routerRedux.push('/login'));
		}

	},
	reducers: {
		showloading(state, action) {
			return {
				...state,
				loading: true
			}
		},
		hideloading(state, action) {
			return {
				...state,
				loading: false
			}
		}
	},
};