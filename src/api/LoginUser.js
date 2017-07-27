import request from '../utils/request';

/*登陆*/
export async function Userlogin(params) {
	return request(`/user/login?username=${params.username}&password=${params.password}&userType=${params.userType}`, {
		method: 'POST',
		body: params
	});
}
/*获取信息*/
export async function Userinfo(params) {
	return request(`/user/info`, {
		method: 'GET',
		body: params
	});
}
/*注册*/
export async function Userreg(params) {
	return request(`/user/reg `, {
		method: 'POST',
		body: params
	});
}
/*验证用户名*/
export async function Usercheck(params) {
	return request(`/user/check `, {
		method: 'POST',
		body: params
	});
}

/*登出*/
export async function Userout(params) {
	return request(`/user/logout`, {
		method: 'POST',
		body: params
	});
}