//资产风险评分
(function(global) {
	global.asset_score = {
    search: function(param) {
    	this.param = param;
    	if(!this.cmp) {
        this.cmp = new Rank("#asset_score");
      }
      this.cmp.startTime = this.param.startTime || "";
      this.cmp.endTime = this.param.endTime || "";
      this.req_getList(this.param);
    },
    showData: function(data) {
    	if(data && data['data'] && data['data'].length) {
    		this.cmp.type = 2 || "";
        this.cmp.chart = data['data'];
        for(let i = 0; i < data['data'].length; i++) {
          let ip = data['data'][i]['ip'];
          data['data'][i]['href'] = "/index.html#/alert_source?saveType=alert&conditions=srcAddress:" + ip + "&end=" + this.cmp.endTime + "&start=" + this.cmp.startTime;
        }
        this.cmp.load();
    	} else {
    		this.cmp.chart = [{
          "area": "暂无",
          "count": 0,
          "ip": ""
        }];
        this.cmp.load();
    	}
    },
    req_getList: function(param) {
      //攻击源ip排行
      $.ajax({
        traditional: true,
        type: 'post',
        url: '/api/miot/atips',
        dataType: 'json',
        data: param,
        success: (data) => {
        this.showData(data);
      },
      error: (data) => {
        this.showData({
        	"data":[{
      			"area" : "公安服务在线",
      			"areaKey" : "未知",
      			"percent" : 27.03,
      			"count" : 10,
      			"ip" : "172.16.100.56"
      		}, {
      			"area" : "金华财政官网",
      			"areaKey" : "未知",
      			"percent" : 15.93,
      			"count" : 22,
      			"ip" : "192.168.30.13"
      		}, {
      			"area" : "金华市政府",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 39,
      			"ip" : "172.16.100.83"
      		}, {
      			"area" : "武义县政府网站",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 62,
      			"ip" : "172.16.101.48"
      		}, {
      			"area" : "东阳市广播电视台",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 85,
      			"ip" : "172.16.101.76"
      		 }, {
      			"area" : "磐安旅游网",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 86,
      			"ip" : "172.16.101.76"
      		 }, {
      			"area" : "平安浦江",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 90,
      			"ip" : "172.16.101.76"
      		 }, {
      			"area" : "浦江广电在线",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 91,
      			"ip" : "172.16.101.76"
      		 }, {
      			"area" : "浦江公积金网站",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 96,
      			"ip" : "172.16.101.76"
      		 }, {
      			"area" : "浦江县机关党建网",
      			"areaKey" : "未知",
      			"percent" : 1.71,
      			"count" : 100,
      			"ip" : "172.16.101.76"
      		 }],
      		 "code":0,
      		 "msg":"success"
      	 });
        }
      });
    }
	};
	global.asset_score.search({
		startTime: "",
		endTime: "",
	});
})(window);