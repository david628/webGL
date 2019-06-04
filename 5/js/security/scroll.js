(function(global){
  var scrollList = {
    init: function() {
      let self = this;
      this.grid = new Scroll({
        elem: '#grid-list',
        count: 5,
        interval: 5000,
        execute: '0.7s',
        cm: [{
          header: '时间',
          dataStore: 'time',
          css:{
            'width': '15%'
          },
          rendFn: function(obj) {
            self.aTag = self.createAtag(obj);
            return `${self.aTag}${obj['time']}`;
          }
        },{
          header: '地区/源IP',
          dataStore: 'assailant',
          css:{
            'width': '15%'
          },
          rendFn: function(obj) {
            return `${self.aTag}${obj['assailant']}`;
          }
        },{
          header: '攻击域名',
          dataStore: 'target',
          css:{
            'width':'15%'
          },
          rendFn: function(obj) {
            return `${self.aTag}${obj['target']}`;
          }
        },{
          header: '攻击URL',
          dataStore: 'type',
          css:{
            'width': '20%'
          },
          rendFn: function(obj) {
            return `${self.aTag}${obj['type']}`;
          }
        },{
          header: '攻击类型',
          dataStore: 'type',
          css:{
            'width': '20%'
          },
          rendFn: function(obj) {
            return `${self.aTag}${obj['type']}`;
          }
        },{
          header: '威胁等级',
          dataStore: 'level',
          css:{
            'width': '15%',
            'text-align': 'center'
          },
          rendFn: function(obj) {
            let fontColor;
            if(obj['level']=='高危'){
                fontColor='high';
            }
            else if(obj['level']=='中危'){
                fontColor='middle';
            }
            else if(obj['level']=='低危'){
                fontColor='low';
            }
            return `${self.aTag}<span class='${fontColor}'>${obj['level']}</span>`;
          }
        }]
      })
    },
    createAtag: function(obj) {
      if(obj['destAddress']!=='--'&&obj['target']!=='--'&&obj['destAddress'] == obj['target']) {
        return `<a target='_blank' href='/index.html#/alert_source?saveType=alert&conditions=srcAddress:${obj['srcAddress']}&conditions=destAddress:${obj['target']}&conditions=warningType:${obj['type']}&start=${this.startTime}&end=${this.endTime}'></a>`;
      }else if(obj['destAddress']!=='--'&&obj['target']!=='--'&&obj['destAddress'] !== obj['target']){
        return `<a target='_blank' href='/index.html#/alert_source?saveType=alert&conditions=srcAddress:${obj['srcAddress']}&conditions=destHostName:${obj['target']}&conditions=warningType:${obj['type']}&start=${this.startTime}&end=${this.endTime}'></a>`;
      }else {
        return `<a target='_blank' href='/index.html#/alert_source?saveType=alert&conditions=srcAddress:${obj['srcAddress']}&conditions=warningType:${obj['type']}&start=${this.startTime}&end=${this.endTime}'></a>`;
      }
    },
    search: function(param) {
      this.startTime = param['startTime'];
      this.endTime = param['endTime'];
			this.refresh(param);
    },
    refresh: function(param){
			$.ajax({
				type: 'post',
				url: '/api/miot/detail',
				dataType: 'json',
				data: param,
				error: error => {
					var data = {"data":
						[
							{"time":"2017-12-19 13:41:55","level":"高危","target":"202.96.209.6","assailant":"宁波鄄州农村合作银行","srcAddress":"10.50.128.196","type":"请求的文件名、参数名和参数包含HTTP响应分割攻击","destAddress":"202.96.209.6"},
							{"time":"2017-12-19 13:41:55","level":"高危","target":"202.96.209.6","assailant":"重庆市农村商业银行","srcAddress":"10.50.129.18","type":"请求的文件名、参数名和参数包含HTTP响应分割攻击","destAddress":"202.96.209.6"},
							{"time":"2017-12-19 13:41:55","level":"高危","target":"202.96.209.6","assailant":"中国农业发展银行","srcAddress":"10.50.0.130","type":"请求的文件名、参数名和参数包含HTTP响应分割攻击","destAddress":"202.96.209.6"},
							{"time":"2017-12-19 13:41:55","level":"高危","target":"202.96.209.6","assailant":"使用单位：陕西省国际信托股份有限公司(委托发起单位：北京网云在线通信技术有限公司 )","srcAddress":"10.50.12.64","type":"请求的文件名、参数名和参数包含HTTP响应分割攻击","destAddress":"202.96.209.6"},
							{"time":"2017-12-19 13:41:55","level":"高危","target":"202.96.209.6","assailant":"使用单位：陕西省国际信托股份有限公司(委托发起单位：北京网云在线通信技术有限公司 )","srcAddress":"10.50.12.64","type":"请求的文件名、参数名和参数包含HTTP响应分割攻击","destAddress":"202.96.209.6"},
							{"time":"2017-12-19 13:41:55","level":"高危","target":"202.96.209.6","assailant":"中国农业发展银行","srcAddress":"10.50.0.128","type":"请求的文件名、参数名和参数包含HTTP响应分割攻击","destAddress":"202.96.209.6"},
							{"time":"2017-12-19 13:41:55","level":"高危","target":"202.96.209.6","assailant":"威海市商业银行","srcAddress":"10.50.128.166","type":"请求的文件名、参数名和参数包含HTTP响应分割攻击","destAddress":"202.96.209.6"},
							{"time":"2017-12-15 21:48:15","level":"中危","target":"172.16.101.164","assailant":"192.16.101.29","srcAddress":"192.16.101.29","type":"敏感目录访问","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:48:15","level":"高危","target":"172.16.101.164","assailant":"招商银行股份有限公司","srcAddress":"10.50.0.144","type":"Apache struts2 'getclass()'方法安全限制绕过漏洞(CVE-2014-0094)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:48:15","level":"中危","target":"1.1.1.1","assailant":"星展银行（中国）有限公司上海分行","srcAddress":"10.50.0.112","type":"更改会话映射等(Apache Struts2会话篡改)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:48:15","level":"高危","target":"1.1.1.1","assailant":"192.16.101.27","srcAddress":"192.16.101.27","type":"密码认证绕过(Microsoft IIS 6.0 and 7.5认证绕过)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:48:15","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"sql注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:48:15","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"xss注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:48:15","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:48:15","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:47:10","level":"高危","target":"172.16.101.164","assailant":"招商银行股份有限公司","srcAddress":"10.50.0.144","type":"Apache struts2 'getclass()'方法安全限制绕过漏洞(CVE-2014-0094)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:47:10","level":"中危","target":"172.16.101.164","assailant":"192.16.101.29","srcAddress":"192.16.101.29","type":"敏感目录访问","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:47:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:47:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"sql注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:47:10","level":"中危","target":"1.1.1.1","assailant":"星展银行（中国）有限公司上海分行","srcAddress":"10.50.0.112","type":"更改会话映射等(Apache Struts2会话篡改)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:47:10","level":"高危","target":"1.1.1.1","assailant":"192.16.101.27","srcAddress":"192.16.101.27","type":"密码认证绕过(Microsoft IIS 6.0 and 7.5认证绕过)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:47:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"xss注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:47:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:46:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:46:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:46:10","level":"高危","target":"172.16.101.164","assailant":"招商银行股份有限公司","srcAddress":"10.50.0.144","type":"Apache struts2 'getclass()'方法安全限制绕过漏洞(CVE-2014-0094)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:46:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"xss注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:46:10","level":"中危","target":"172.16.101.164","assailant":"192.16.101.29","srcAddress":"192.16.101.29","type":"敏感目录访问","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:46:10","level":"中危","target":"1.1.1.1","assailant":"星展银行（中国）有限公司上海分行","srcAddress":"10.50.0.112","type":"更改会话映射等(Apache Struts2会话篡改)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:46:10","level":"高危","target":"1.1.1.1","assailant":"192.16.101.27","srcAddress":"192.16.101.27","type":"密码认证绕过(Microsoft IIS 6.0 and 7.5认证绕过)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:46:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"sql注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:45:10","level":"高危","target":"172.16.101.164","assailant":"招商银行股份有限公司","srcAddress":"10.50.0.144","type":"Apache struts2 'getclass()'方法安全限制绕过漏洞(CVE-2014-0094)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:45:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"xss注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:45:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:45:10","level":"中危","target":"1.1.1.1","assailant":"星展银行（中国）有限公司上海分行","srcAddress":"10.50.0.112","type":"更改会话映射等(Apache Struts2会话篡改)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:45:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"sql注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:45:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:45:10","level":"中危","target":"172.16.101.164","assailant":"192.16.101.29","srcAddress":"192.16.101.29","type":"敏感目录访问","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:45:10","level":"高危","target":"1.1.1.1","assailant":"192.16.101.27","srcAddress":"192.16.101.27","type":"密码认证绕过(Microsoft IIS 6.0 and 7.5认证绕过)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:44:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"sql注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:44:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"xss注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:44:10","level":"中危","target":"172.16.101.164","assailant":"192.16.101.29","srcAddress":"192.16.101.29","type":"敏感目录访问","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:44:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:44:10","level":"高危","target":"1.1.1.1","assailant":"192.16.101.27","srcAddress":"192.16.101.27","type":"密码认证绕过(Microsoft IIS 6.0 and 7.5认证绕过)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:44:10","level":"高危","target":"172.16.101.164","assailant":"招商银行股份有限公司","srcAddress":"10.50.0.144","type":"Apache struts2 'getclass()'方法安全限制绕过漏洞(CVE-2014-0094)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:44:10","level":"高危","target":"172.16.101.164","assailant":"中国农业发展银行","srcAddress":"10.50.0.132","type":"Struts2 S2-033 远程命令执行 (CVE-2016-3087)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:44:10","level":"中危","target":"1.1.1.1","assailant":"星展银行（中国）有限公司上海分行","srcAddress":"10.50.0.112","type":"更改会话映射等(Apache Struts2会话篡改)","destAddress":"1.1.1.1"},
							{"time":"2017-12-15 21:43:10","level":"高危","target":"172.16.101.164","assailant":"招商银行股份有限公司","srcAddress":"10.50.0.144","type":"Apache struts2 'getclass()'方法安全限制绕过漏洞(CVE-2014-0094)","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:43:10","level":"高危","target":"172.16.101.164","assailant":"光大证券股份有限公司","srcAddress":"10.50.1.100","type":"sql注入攻击","destAddress":"172.16.101.164"},
							{"time":"2017-12-15 21:43:10","level":"高危","target":"1.1.1.1","assailant":"192.16.101.27","srcAddress":"192.16.101.27","type":"密码认证绕过(Microsoft IIS 6.0 and 7.5认证绕过)","destAddress":"1.1.1.1"}
						],
						"code":0,
						"msg":"success"
					};
          //$('#grid-list .noData').hide();
					if(data['code'] >= 0) {
					  // var start = param['startTime'];
            // var end = param['endTime'];
						this.grid.load(data['data']);
					//} else {
						//$('#grid-list .noData').show();
					}
				}
			})
		}
  };
  scrollList.init();
  scrollList.refresh();
  global.realtime = scrollList;
})(window);