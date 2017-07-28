import {
	Userlogin,
	Userinfo,
	Userpwd,
	Userreg,
	Userout,
	Usercheck,
	UserCaptcha,
	Smsvcode
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
		Usercode: 0,
		Compcode: 0,
		LogincodeImg: [],
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
			const Usercode = yield select(state => state.LoginUser.Usercode)
			const {
				data
			} = yield call(Userlogin, payload);
			if (data.status == 'SUCCESS') {
				if (payload.userType == '1') {
					yield put(routerRedux.push('/'))
					cookie.save('DemoUser', data.content);
					cookie.remove('CodeTimes');
				}
				if (payload.userType == '2') {
					cookie.save('AdminUser', data.content);
					window.location.href = ADMIN_URL;
					cookie.remove('CodeTimec');
				}
				yield put({
					type: 'hideloading',
					payload: {
						loading: false
					}
				})
			} else {
				message.success(data.message)
				if (payload.userType == '1') {
					cookie.save('CodeTimes', {
						Usercode: Usercode + 1
					});
					yield put({
						type: 'hideloading',
						payload: {
							loading: false,
							Usercode: Usercode + 1,
						}
					})
				}
				if (payload.userType == '2') {
					cookie.save('CodeTimec', {
						Compcode: Compcode + 1
					});
					yield put({
						type: 'hideloading',
						payload: {
							loading: false,
							Compcode: Compcode + 1,
						}
					})
				}
			}
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
					message.success('注册成功')
					window.location.href = ADMIN_URL
				}
			} else {
				message.success(data.message);
			}

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
			} else {
				message.success(data.message);
			}

		},
		/*验证手机号*/
		* Smsvcode({
			payload
		}, {
			call,
			put
		}) {
			const {
				data
			} = yield call(Smsvcode, payload)

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