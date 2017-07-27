import request from '../utils/request';

/*登陆*/
export async function Userlogin(params) {
	return request(`/user/login?username=${params.username}&password=${params.password}&userType=${params.userType}`, {
		method: 'POST',
		body: params
	});
}