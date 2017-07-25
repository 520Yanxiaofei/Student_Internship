import request from '../utils/request';
/*系统状态*/
export async function SystemState(params) {
    return request(`/user/sys_status`, {
        method: 'GET',
        body: params
    });
}
/*日志信息*/
export async function LogInformation(params) {
    return request(`/logs/list_operate_logs`, {
        method: 'POST',
        body: params
    });
}