'use strict';

const { postJSON, getData } = require('./util');


/**
 * 发送订阅消息
 * Examples:
 * ```
 * var templateId: '模板id';
 * var page: '';
 * var data = {    
          character_string1: { value: '223' },
          thing5: { value: '测试商品' },
          date3: { value: '2020年1月1日' },
          number6: { value: '2342375986' },
          character_string9: { value: 'sf686539' },
        },
 * api.sendSubscribeMessage('openid', templateId, page, data);
 * ```
 * @param {String} openid 用户的openid
 * @param {String} templateId 模板ID
 * @param {String} page 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。
 * @param {Object} data 渲染模板的数据
 */
exports.sendSubscribeMessage = async function (openid, templateId, page, data, ) {
  const { accessToken } = await this.ensureAccessToken();
  var apiUrl = this.prefix + 'message/subscribe/send?access_token=' + accessToken;
  var template = {
    touser: openid,
    template_id: templateId,
    page: page,
    data: data
  };
  return this.request(apiUrl, postJSON(template));
};

