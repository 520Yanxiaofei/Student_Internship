import request from '../utils/request';
/*登陆*/
export async function UserPersonal(params) {
	console.log(params)

	return request(`/biz/applier/list`, {
		method: 'GET',
		body: params
	});
}