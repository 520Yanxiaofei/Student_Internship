import Index from './view/Index';
import LoginPage from './view/login/login';
import Userlist from './view/user/';
import Company from './view/company/';
import Statistical from './view/statistical/';
import Station from './view/station/';
import StationList from './view/station/list';
import New from './view/new/';
import NewList from './view/new/list';
import Password from './view/password/';

const Routes = {
  index: Index,
  login: LoginPage
};

const ChildRoutes = {
  statistical: Statistical,
  company: Company,
  user_list: Userlist,
  station_add: Station,
  station_list: StationList,
  new_add: New,
  new_list: NewList,
  pad_udp: Password
};

const RouteKeys = () => {
  let p = [];
  for (let k in Routes) {
    p.push(k);
  }
  return p;
};

const ChildRouteKeys = () => {
  let p = [];
  for (let k in ChildRoutes) {
    p.push(k);
  }
  return p;
};

export {
  Routes,
  RouteKeys,
  ChildRoutes,
  ChildRouteKeys
};