//攻击源IP排行
(function(global){
  var sourceIp = {
    init: function() {
      this.bar = echarts.init(document.getElementById("source_ip"));
      //this.refresh('');
    },
    search: function(param) {
      this.refresh(param);
    },
    refresh: function(param, data) {
      /*var data = {
        name: ['香港(119.28.1.227)','美国(23.83.87.138)','浙江(183.129.218.237)','美国(204.152.218.50)','韩国(1.19.252.123)'],
        value: [3701, 991, 738, 497 ,457]
      };*/
      this.bar.setOption(this.getOption(data));
      // $.ajax({
			// 	type: 'post',
			// 	url: base.getAction('api/ddos_attack/type_statistics'),
			// 	dataType: 'json',
			// 	data: $.extend({}, param,{top:5}),
			// 	success: data => {
      //     $('.type .noData').hide();
			// 		if(data['code'] >= 0 && data['data']['attackTypes'].length > 0 && data['data']['counts'].length > 0) {
      //       this.pie.setOption(this.getOption(data['data']));
			// 		}
			// 		else {
      //       $('.type .noData').show();
			// 		}
			// 	}
			// })
    },
    getOption: function(d) {
      return {
        grid: {
          left: '3%',
          right: '10%',
          bottom: '-2%',
          top: '6%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              width: 0
            }
          },
          formatter: function(p) {
            return p[0]['axisValue'] + '<span style="color: #46c0d7"> : '+ p[0]['value'] + '</span>';
          }
        },
        xAxis : [
          {
            show: false,
            type : 'value'
          }
        ],
        yAxis : [
          {
            type : 'category',
            data : d['name'].reverse(),
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              textStyle: {color: '#D6E0E2', fontSize: 14},
              // formatter : function(params){
              //   var newParamsName = "";
              //   var paramsNameNumber = params.length;
              //   var provideNumber = 8;
              //   if (paramsNameNumber > provideNumber) {
              //       newParamsName = params.substring(0,provideNumber)+'...';
              //   } else {
              //       newParamsName = params;
              //   }
              //   return newParamsName;
              //  }
            }
          }
        ],
        series : [
            {
            	type: 'pictorialBar',
            	symbol: 'rect',
            	symbolRepeat: true,
            	symbolSize: [4, 8],
              symbolMargin: 1,
              barWidth: '25%',
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      {offset: 0, color: '#f72937'},
                      {offset: 1, color: '#6d0404'}
                    ]
                  )
                }
                // emphasis: {
                //   color: new echarts.graphic.LinearGradient(
                //     1, 0, 0, 0,
                //     [
                //       {offset: 0, color: '#03d7ff'},
                //       {offset: 1, color: '#77060e'}
                //     ]
                //   )
                // }
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  color: '#fff',
                  fontSize: 14
                }
              },
              data: d['value'].reverse()
            }
        ]
      }
    }
  };
  sourceIp.init();
  global.sourceIp = sourceIp;
})(window);

