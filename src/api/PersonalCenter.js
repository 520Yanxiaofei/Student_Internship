import request from '../utils/request';
/*登陆*/
export async function UserPersonal(params) {
	console.log(params)

	return request(`/biz/applier/list`, {
		method: 'GET',
		body: params
	});
}
/*报名注册信息*/
export async function ApplierAdd(params) {
	return request(`/biz/applier/add`, {
		method: 'POST',
		body: params
	});
}