/*评分指标库*/
import request from '../utils/request';

/*告警评分指标库*/
export async function AlarmListScore(params) {
	return request(`/alarm_config/list_alarm_score`, {
		method: 'POST',
		body: params
	});
}
/*告警评分修改*/
export async function AlarmUpdScore(params) {
	return request(`/alarm_config/upd_alarm_score`, {
		method: 'POST',
		body: params
	});
}
/*告警评分删除*/
export async function AlarmDelScore(params) {
	return request(`/alarm_config/del_alarm_score`, {
		method: 'POST',
		body: params
	});
}
/*进程识别库展示*/
export async function ProcessListConfig(params) {
	return request(`/process_config/list_proc_conf`, {
		method: 'POST',
		body: params
	});
}
/*进程识别库新增*/
export async function ProcessAddConfig(params) {
	return request(`/process_config/add_proc_conf`, {
		method: 'POST',
		body: params
	});
}
/*进程识别库修改*/
export async function ProcessUpdConfig(params) {
	return request(`/process_config/upd_proc_conf`, {
		method: 'POST',
		body: params
	});
}
/*进程识别库清空*/
export async function ProcessCleanConfig(params) {
	return request(`/process_config/clean_proc_conf`, {
		method: 'POST',
		body: params
	});
}
/*进程识别库删除*/
export async function ProcessDelConfig(params) {
	return request(`/process_config/del_proc_conf`, {
		method: 'POST',
		body: params
	});
}
/*进程分类列表*/
export async function ProcessProcCategory(params) {
	return request(`/process_config/get_proc_category`, {
		method: 'POST',
		body: params
	});
}
/*操作系统列表*/
export async function ProcessSysDetails(params) {
	return request(`/process_config/get_sys_details`, {
		method: 'POST',
		body: params
	});
}
/*导出*/
export async function DownloadProConf(params) {
	return request(`/download/export_process_conf`, {
		method: 'POST',
		body: params
	});
}