## 滚动列表scrollList 类的用法说明
## 创建scrollList 对象
var myList = new Scroll({
        elem:'#grid-list',//滚动列表容器元素
        count:5,//列表包含的行数
        interval:5000,//列别滚动的时间间隔
        execute:'0.7s',//滚动一次的动画时间
        cm:[           //列表表头内容和相关样式
            {
                header:'时间',
                dataStore:'time',
                css:{
                   'width':'25%',
                   'text-align':'center',
                   'font-weight':'bold'
                }
            },
            {
                header:'ip',
                dataStore:'ip',
                css:{
                    width:'25%',
                    'text-align':'center'
                }
            },
            {
                header:'威胁等级',
                dataStore:'riskLevel',
                rendFn:function(obj){
                    let fontColor;
                    if(obj['riskLevel']=='高危'){
                        fontColor='high';
                    }
                    else if(obj['riskLevel']=='中危'){
                        fontColor='middle';
                    }
                    else if(obj['riskLevel']=='低危'){
                        fontColor='low';
                    }
                    return `<button class="${fontColor}">${obj.riskLevel}</button>`;
                },
                css:{
                     width:'25%',
                    'text-align':'center'
                }
            },
            {
                header:'攻击类型',
                dataStore:'attackType'
            }
        ]
    });
    ##根据对象实例加载数据
    myList.load(data);



