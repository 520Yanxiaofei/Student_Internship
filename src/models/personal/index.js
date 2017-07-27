import {
	UserPersonal,
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
         学生信息
        */
		* UserPersonal({
			payload
		}, {
			call,
			put
		}) {
			yield put({
				type: 'showloading',
				payload: {
					loading: true
				}
			})
			const {
				data
			} = yield call(UserPersonal, {
				userId: UserStatus.userId
			});
			if (data.status == 'SUCCESS') {
				console.log(data)
					// yield put({
					// 	type: 'SuccessData',
					// 	payload: {
					// 		PersonalData: {
					// 			list: data.content.rows,
					// 			Total: data.content.total
					// 		},
					// 		loading: false
					// 	}
					// })
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
				loading: false
			}
		}
	},
};