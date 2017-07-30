import {
	UserPersonal,
	ApplierAdd
}
from '../../api/PersonalCenter'
import {
	routerRedux
} from 'dva/router';
import {
	message,
} from 'antd';
import cookie from 'react-cookie';
const UserStatus = cookie.load('DemoUser');

export default {
	namespace: 'PersonalCenter',
	state: {
		loading: false,
		PersonalData: [],
		data: [],

		/*向导*/
		current: 1,
		loading0:false,
		loading1:false,
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
         学生信息
        */
		// * UserPersonal({
		// 	payload
		// }, {
		// 	call,
		// 	put
		// }) {
		// 	yield put({
		// 		type: 'showloading',
		// 		payload: {
		// 			loading: true
		// 		}
		// 	})
		// 	const {
		// 		data
		// 	} = yield call(UserPersonal, {
		// 		userId: UserStatus.userId
		// 	});
		// 	if (data.status == 'SUCCESS') {
		// 		console.log(data)
		// 			// yield put({
		// 			// 	type: 'SuccessData',
		// 			// 	payload: {
		// 			// 		PersonalData: {
		// 			// 			list: data.content.rows,
		// 			// 			Total: data.content.total
		// 			// 		},
		// 			// 		loading: false
		// 			// 	}
		// 			// })
		// 	} else {
		// 		// message.success(data.message)
		// 	}
		// },
		/*
         学生报名信息
        */
		* ApplierAdd({
			payload
		}, {
			call,
			put
		}) {
			yield put({
				type: 'showloading',
				payload: {
					loading0: true
				}
			})
			const {
				data
			} = yield call(ApplierAdd, payload);
			if (data.status == 'SUCCESS') {
					yield put({
						type: 'showloading',
						payload: {
							loading0: false
						}
					})
			} else {
				// message.success(data.message)
			}
		},
	},
	reducers: {
		showloading(state, action) {
			return {
				...state,
				...action.payload
			}
		},
		// SuccessData(state, action) {
		// 	const itme = action.payload.StationListData.list;
		// 	itme.map((data, index) => {
		// 		itme[index]['key'] = index
		// 	})
		// 	return {
		// 		...state,
		// 		...action.payload,
		// 		StationListData: {
		// 			...action.payload.StationListData,
		// 			list: itme
		// 		}


		// 	}
		// },
		hideloading(state, action) {
			return {
				...state,
				...action.payload
			}
		}
	},
};