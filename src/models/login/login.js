import {
	Userlogin,
	Userinfo,
	Userpwd,
	Userreg,
	Userout,
	Usercheck,
	UserCaptcha
}
from '../../api/LoginUser'
import {
	routerRedux
} from 'dva/router';
import cookie from 'react-cookie';
import {
	ADMIN_URL
} from '../../utils/URL'
import {
	message,
} from 'antd';

export default {
	namespace: 'LoginUser',
	state: {
		loading: false,
		data: [],
		/*验证次数-验证码*/
		Logincode:0,
		LogincodeImg:[],
		/*向导*/
		current: 0,
		/*注册信息-学生*/
		registData: []
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
			// }
			const UserStatus = cookie.load('DemoUser');
			if (UserStatus && UserStatus.userName) {
				// yield put(routerRedux.push('/'));
			} else {
				yield put(routerRedux.push('/'));
			}
		},
		/*
		 登录
		*/
		* Userlogin({
			payload,
		}, {
			put,
			call,
			select,
		}) {
			yield put({
				type: 'showloading',
				payload: {
					loading: true
				}
			})
			const Logincode=yield select(state => state.LoginUser.Logincode)
			const {
				data
			} = yield call(Userlogin, payload);
			if (data.status == 'SUCCESS') {
				if (payload.userType == '1') {
					yield put(routerRedux.push('/'))
					cookie.save('DemoUser', data.content);
				}
				if (payload.userType == '2') {
					cookie.save('AdminUser', data.content);
					window.location.href = ADMIN_URL
				}
				yield put({
					type: 'hideloading',
					payload: {
						loading: false
					}
				})
			} else {
				message.success(data.message)
				cookie.save('CodeTimes', {Logincode:Logincode+1});
				yield put({
					type: 'hideloading',
					payload:{
						loading:false,
						Logincode:Logincode+1,
					}
				})
			}

			// if (payload != '' && payload.username == 'admin' && payload.password == '123') {
			// 	message.success('登录成功')
			// 	cookie.save('DemoUser', payload);
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
			// 	cookie.remove('DemoUser');
			// 	yield put(routerRedux.push('/'));
			// } else {
			// 	message.success(data.message);
			// }
			yield put(routerRedux.push('/'));
			cookie.remove('DemoUser');
			// message.success('退出成功');

		},

		/*注册*/
		* UserReigst({
			payload
		}, {
			call,
			put
		}) {
			const {
				data
			} = yield call(Userreg, payload)
			if (data.status == 'SUCCESS') {
				if (payload.userType == '1') {
					message.success('注册成功')
					yield put(routerRedux.push('/'));
				}
				if (payload.userType == '2') {
					window.location.href = ADMIN_URL
				}
				// yield put(routerRedux.push('/login_index/login'));
			} else {
				message.success(data.message);
			}
			// cookie.remove('DemoUser');
			// message.success('退出成功');

		},
		/*验证用户名*/
		* Usercheck({
			payload
		}, {
			call,
			put
		}) {
			const {
				data
			} = yield call(Usercheck, payload)
			if (data.status == 'SUCCESS') {
				message.success(data.message)
					// yield put(routerRedux.push('/login_index/login'));
			} else {
				message.success(data.message);
			}
			// cookie.remove('DemoUser');
			// message.success('退出成功');

		},
		/*获取验证码*/
		* UserCaptcha({
			payload
		}, {
			call,
			put
		}) {
			const {
				data
			} = yield call(UserCaptcha, payload)
			yield put({
				LogincodeImg:data
			})
			

		},

	},
	reducers: {
		showloading(state, action) {
			return {
				...state,
				...action.payload
			}
		},
		hideloading(state, action) {
			return {
				...state,
				...action.payload
			}
		}
	},
};