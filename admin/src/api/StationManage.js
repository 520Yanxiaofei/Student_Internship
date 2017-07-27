import request from '../utils/request';

/*添加*/
export async function StationAdd(params) {
	return request(`/biz/post/add`, {
		method: 'POST',
		body: params
	});
}
/*查询*/
export async function StationList(params) {
	return request(`/biz/post/list`, {
		method: 'PUT',
		body: params
	});
}
/*单条删除*/
export async function StationDel(params) {
	return request(`/biz/post/${params.id}`, {
		method: 'DELETE',
		body: params
	});
}
/*多条删除*/
export async function StationDelMore(params) {
	return request(`/biz/post/delete`, {
		method: 'PUT',
		body: params
	});
}