import fetch from 'dva/fetch';
import {
  message,
} from 'antd';
import cookie from 'react-cookie';
import {
  HTTP_URL
} from './URL';
import {
  hashHistory
} from 'dva/router';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {

  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/*
统一501错误处理
*/
function parseDATA(response) {
  // if (response.code == 501) {
  //   location.hash = '#/login'
  // }
  const data = new Array();
  data['data'] = response;
  return data;
}
/**
 * 请求网址，返回数据
 * @param  {string} url       统一域名设置URL
 * @param  {object} [options] 要给Fetch传递选项
 * @return {object}           数据或错误的象
 */

export default function request(url, options) {
  let Token = cookie.load('userdata');
  return fetch(HTTP_URL + url, {
      //return fetch(`http://192.168.28.233:8080` + url, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        //"sid": Token ? Token.sid + " " : ''
      },
      body: JSON.stringify(options.body)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(parseDATA)
    .catch((err) => {
      message.warning(`服务器异常！请稍后再试...`);
      // location.hash = '#/reminder'
    })
}