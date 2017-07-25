import React, {
  PropTypes
} from 'react';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Redirect
} from 'react-router';
/*入口*/


import {
  Routes,
  RouteKeys,
  ChildRoutes,
  ChildRouteKeys
} from './router.data';
import {
  randomStr
} from './utils/tools';


export default function({
  history
}) {
  return (
    <Router history={history}>
      {
        RouteKeys().map((k, i) => {
          let component = Routes[k];
          if (i == 0) {
            return (
              <Route key={randomStr(10)} path="/" component={component}>
                {
                  ChildRouteKeys().map((ck, i) => {
                    let c_component = ChildRoutes[ck];
                    if (i == 0) return <IndexRoute key={randomStr(10)} component={c_component} />
                    return <Route key={randomStr(10)} path={`/${ck}`} component={c_component}/>
                  })
                }
              </Route>
            )
          }
          return <Route key={randomStr(10)} path={`/${k}`} component={component} />
        })
      }
    </Router>
  );
};