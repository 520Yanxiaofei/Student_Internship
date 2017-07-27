import React from 'react'
import PropTypes from 'prop-types'
import {
	Router
} from 'dva/router'
import Index from './view/Index';

const registerModel = (app, model) => {
	if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
		app.model(model)
	}
}

const Routers = function({
	history,
	app
}) {
	const routes = [{
		path: '/',
		component: Index,
		getIndexRoute(nextState, cb) {
			require.ensure([], require => {
				cb(null, {
					component: require('./view/new/')
				})
			}, 'new_index')
		},
		childRoutes: [{
			path: '/new_index',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./view/new/'))
				}, 'new_index')
			},
		}, {
			path: '/new_detai',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./view/new/new_detai'))
				}, 'new_detai')
			},
		}, {
			path: '/station_index',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./view/station/'))
				}, 'station_index')
			},
		}, {
			path: '/station_detai',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./view/station/station_detai'))
				}, 'station_detai')
			},
		}, {
			path: '/user_index',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./view/user/'))
				}, 'user_index')
			},
		}, {
			path: 'reminder',
			getComponent(nextState, cb) {
				require.ensure([], require => {
					cb(null, require('./view/404/Reminder'))
				}, 'reminder')
			},
		}],
	}, {
		path: '/login/:status',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./view/login/login'))
			}, 'login')
		},
	}, {
		path: '/register/:status',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./view/login/register'))
			}, 'register')
		},
	}];

	return <Router history={history} routes={routes} />
};

Routers.propTypes = {
	history: PropTypes.object,
	app: PropTypes.object,
}

export default Routers