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
		* Userinfo({
			payload
		}, {
			call,
			put
		}) {

			// const {
			// 	data
			// } = yield call(Userinfo, payload);
			// if (data.status == 'SUCCESS') {
			// 	yield put(routerRedux.push('/'));
			// } else {
			// 	message.success(data.message)
			// 	yield put(routerRedux.push('/login'));
			// }
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
				type: 'showloading',
				payload: {
					loading: true
				}
			})
			const {
				data
			} = yield call(Userlogin, payload);
			if (data.status == 'SUCCESS') {

				// if (payload.userType == '1') {
				// 	yield put(routerRedux.push('/'))
				// 	cookie.save('AdminUser', payload);
				// }
				console.log(data)
				if (payload.userType == '2') {
					cookie.save('AdminUser', data.content);
					yield put(routerRedux.push('/'))
				}

				yield put({
					type: 'hideloading',
					payload: {
						loading: false
					}
				})
			} else {
				message.success(data.message)
				yield put({
					type: 'hideloading'
				})
			}

			// if (payload != '' && payload.username == 'admin' && payload.password == '123') {
			// 	message.success('登录成功')
			// 	cookie.save('AdminUser', payload);
			// 	yield put(routerRedux.push('/'));
			// 	yield put({
			// 		type: 'hideloading'
			// 	})
			// } else {
			// 	message.success('账号或者密码错误')
			// 		// yield put(routerRedux.push('/login'));
			// 	yield put({
			// 		type: 'hideloading'
			// 	})
			// }
		},
		/*退出*/
		* loginOut({
			payload
		}, {
			call,
			put
		}) {
			// const {
			// 	data
			// } = yield call(Userout, payload)
			// if (data.status == 'SUCCESS') {
			// 	cookie.remove('AdminUser');
			// 	yield put(routerRedux.push('/'));
			// } else {
			// 	message.success(data.message);
			// }
			cookie.remove('AdminUser');
			yield put(routerRedux.push('/login'));
			// message.success('退出成功');
		},

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