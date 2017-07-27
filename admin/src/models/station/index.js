import {
	StationAdd,
	StationList,
	StationDel,
	StationDelMore
}
from '../../api/StationManage'
import {
	routerRedux
} from 'dva/router';
import {
	message,
} from 'antd';

export default {
	namespace: 'StationManage',
	state: {
		loading: false,
		StationListData: [],
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
         展示
        */
		* StationList({
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
			} = yield call(StationList, payload);
			if (data.status == 'SUCCESS') {
				yield put({
					type: 'SuccessData',
					payload: {
						StationListData: {
							list: data.content.rows,
							Total: data.content.total
						},
						loading: false
					}
				})
			} else {
				// message.success(data.message)
			}
		},
		/*
         添加
        */
		* StationAdd({
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
			} = yield call(StationAdd, payload);
			if (data.status == 'SUCCESS') {
				message.success(data.message)
				yield put({
					type: 'showloading',
					payload: {
						loading: false
					}
				})
			} else {
				message.success(data.message)
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
		SuccessData(state, action) {
			const itme = action.payload.StationListData.list;
			itme.map((data, index) => {
				itme[index]['key'] = index
			})
			return {
				...state,
				...action.payload,
				StationListData: {
					...action.payload.StationListData,
					list: itme
				}


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