import request from '../utils/request';

/*资产盘点开始检索*/
export async function SearchEngine(params) {
    return request(`/host/search_engine`, {
        method: 'POST',
        body: params
    });
}
/*资产盘点导出Excel*/
export async function SearchExport(params) {
    return request(`/download/search_engin_export`, {
        method: 'GET',
        body: params
    });
}