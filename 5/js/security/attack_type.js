//受攻击类型排行
(function(global){
  var attackType = {
    init: function() {
      this.bar = echarts.init(document.getElementById("attack_type"));
      //this.refresh('');
    },
    search: function(param) {
      this.refresh(param);
    },
    refresh: function(param, data) {
      /*var data = {
        name: ['xss注入攻击','可疑文件访问','目录穿越','sql注入攻击','敏感文件探测'],
        value: [4368, 3256, 2478, 1745 ,702]
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
          left: '12%',
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
              formatter : function(params){
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 8;
                if (paramsNameNumber > provideNumber) {
                    newParamsName = params.substring(0,provideNumber)+'...';
                } else {
                    newParamsName = params;
                }
                return newParamsName;
               }
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
                    	{offset: 0, color: '#14c8d4'},
                      {offset: 1, color: '#43eec6'}
                    ]
                  )
                }
                // emphasis: {
                //   color: new echarts.graphic.LinearGradient(
                //     1, 0, 0, 0,
                //     [
                //       {offset: 0, color: '#03d7ff'},
                //       {offset: 1, color: '#0b87f9'}
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
  attackType.init();
  global.attackType = attackType;
})(window);
