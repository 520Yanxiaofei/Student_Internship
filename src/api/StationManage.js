import request from '../utils/request';

/*查询*/
export async function StationList(params) {
	return request(`/biz/post/list`, {
		method: 'PUT',
		body: params
	});
}