import './index.html';
import './index.less';
import dva from 'dva';
import {
	message
} from 'antd';
import {
	browserHistory,
	useRouterHistory
} from 'dva/router';
import {
	createHashHistory
} from 'history';
// import createLoading from 'dva-loading'

// 1. Initialize
const app = dva({
	// ...createLoading(),
	/*抛出错误异常*/
	onError(e) {
		// console.log(e)
		// message.error(e.message, /* duration */ 3);
	},
	// history: browserHistory, //上线发布html5模式
	// history: useRouterHistory(createHashHistory)({
	// 	queryKey: false
	// }), //上线发布html5模式

});
// 2. Plugins
//app.use({});

// 3. Model
//主机信息
app.model(require('./models/login/login'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');