(function($){
    $.fn.numberAnimate = function (setting) {
        var self = this;
        self.addClass("number-container");
        var defaults = {
            speed : 1000,//动画速度
            num : 0, //初始化值
            symbol : '',//设置分割符号，千，万，千万；默认为无
            css:{}//设置字体的样式
        };
        setting = $.extend(defaults,setting);
        if(this.length > 1){
            alert("容器元素必须唯一！");
            return ;
        }
        var numToArray = function (number) {
            number = parseFloat(number);
            return number.toString().split('');
        };
        var numberDom = ` <div class="number-dom" data-num="0" style="float:left;position:relative;top:0;overflow:hidden;">
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">0</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">1</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">2</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">3</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">4</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">5</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">6</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">7</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">8</span>
                                           <span class="number-span" style="${addStyle()};float:left;text-align:center;">9</span>
                               </div>
                               `;
        var dotDom = `<div class="dot" style="${addStyle()};float:left;text-align:center;">.</div>`;
        var formatNumArray = function(number){
            number = parseFloat(number).toString().split('');
            var key = number.indexOf(".");
            return key==-1 ? number : number.slice(0,key).concat(number.slice(key+1));
        };
        var setNumDom = function (number){
            var numArray = numToArray(number);
            var html = '';
            if(numArray.indexOf(".") == -1){
                for(var i = 0, len = numArray.length;i<len;i++){
                    if(i != 0 && (len-i)%3 ==0 && setting.symbol){
                        html += `<div class="symbol" style="${addStyle()};float:left;text-align:center;">${setting.symbol}</div>`+numberDom;
                    }
                    else{
                        html += numberDom;
                    }
                }
            }
            else{
                var intPart = numArray.slice(0,numArray.indexOf("."));
                var floatPart = numArray.slice(numArray.indexOf(".")+1);
                for(var i = 0,len = intPart.length;i<len;i++){
                    if(i != 0 && (len-i)%3 ==0){
                        html += `<div class="symbol" style="${addStyle()};float:left;text-align:center;">${setting.symbol}</div>`+numberDom;
                    }
                    else{
                        html += numberDom;
                    }
                }
                html += dotDom;
                for(var i = 0;i<floatPart.length;i++){
                    html += numberDom;
                }
            }
            self.html(html);
            self.css({
                display:'inline-block',
                height:self.find("span.number-span:first-child").css("height"),
                overflow:'hidden',
            });
            self.find(".number-dom").css({
                width:self.find("span.number-span:first-child").css("width"),
                lineHeight:self.find("span.number-span:first-child").css("height")
            });
        };
        function addStyle(){
            if(setting.css){
                var style='';
                for(var key in setting.css){
                    style += `${key}:${setting.css[key]};`;
                }
                return style;
            }
        };
        setNumDom(setting.num);
        var moveNumber = function (array) {
            var numElements = self.find('div.number-dom');
            var spanHeight = parseFloat(self.find("span.number-span:first-child").height());
            numElements.each((index,item)=>{
                var distance = -(parseFloat($(item).attr("data-num")))*spanHeight+((parseFloat($(item).attr("data-num")))-array[index])*spanHeight;
                $(item).animate({
                    "top":distance
                },setting.speed);
                $(item).attr("data-num",array[index]);
            });
        };
        moveNumber(formatNumArray(setting.num));
        var resetIntPart = function (numberLen,numElementsLen){
            if(numberLen>numElementsLen){
                var addHtml =  '';
                for(var i = 0;i<numberLen-numElementsLen;i++){
                    addHtml += numberDom;
                }
                self.prepend(addHtml);
                self.find(".number-dom").css({
                    width:self.find("span.number-span:first-child").css("width"),
                    lineHeight:self.find("span.number-span:first-child").css("height")
                });
            }
            if(numberLen<numElementsLen){
                var removeNumDom = numElementsLen-numberLen;
                self.find('div.number-dom:lt('+removeNumDom+')').remove();
            }
            if(setting.symbol != ''){
                var elements = self.children("div.number-dom:lt("+numberLen+")");
                self.children(".symbol").remove();
                for(var i = 0;i<numberLen;i++){
                    if(i != 0 && (numberLen-i)%3 ==0){
                        if($(elements[i]).prev().html() != setting.symbol){
                            $(elements[i]).before(`<div class="symbol" style="${addStyle()};float:left;text-align:center;">${setting.symbol}</div>`)
                        }
                    }
                }
            }
        };
        var resetFloatPart = function (numberLen,numElementsLen) {
            if(numberLen>numElementsLen){
                var addHtml =  '';
                for(var i = 0;i<numberLen-numElementsLen;i++){
                    addHtml += numberDom;
                }
                self.append(addHtml);
                self.find(".number-dom").css({
                    width:self.find("span.number-span:first-child").css("width"),
                    lineHeight:self.find("span.number-span:first-child").css("height")
                });
            }
            if(numberLen<numElementsLen){
                var removeNumDom = numElementsLen-numberLen;
                self.children('div:gt('+(self.children("div").length-removeNumDom-1)+')').remove();
            }
        };
        self.resetData = function (number) {
            if(self.find(".dot").length<1){
                if(parseFloat(number).toString().indexOf(".") == -1){
                    var numberLen = formatNumArray(number).length;
                    var numElementsLen = self.find('div.number-dom').length;
                    resetIntPart(numberLen,numElementsLen);
                }
                else{
                    var intNumLen = parseFloat(number).toString().split(".")[0].length;
                    var floatNumLen = parseFloat(number).toString().split(".")[1].length;
                    var intNumElementsLen = self.find('div.number-dom').length;
                    resetIntPart(intNumLen,intNumElementsLen);
                    self.append(dotDom);
                    resetFloatPart(floatNumLen,0);
                    self.find(".number-dom").css({
                        width:self.find("span.number-span:first-child").css("width"),
                        lineHeight:self.find("span.number-span:first-child").css("height")
                    });
                }
            }
            else{
                var numElements = self.children().filter(".number-dom,.dot");
                var intNumElementLen = 0,floatNumElementLen = 0;
                for(var i = 0,len = numElements.length;i<len;i++){
                    if(!$(numElements[i]).hasClass("dot")){
                        intNumElementLen ++;
                    }
                    else{
                        floatNumElementLen = numElements.length - intNumElementLen-1;
                        break;
                    }
                }
                if(parseFloat(number).toString().indexOf(".") == -1){
                    var intNumLen = parseFloat(number).toString().length;
                    resetIntPart(intNumLen,intNumElementLen);
                    self.children("div :gt("+ (self.children().length-floatNumElementLen-2)+")").remove();
                }
                else{
                    var intNumLen = parseFloat(number).toString().split(".")[0].length;
                    var floatNumLen = parseFloat(number).toString().split(".")[1].length;
                    resetIntPart(intNumLen,intNumElementLen);
                    resetFloatPart(floatNumLen,floatNumElementLen);
                }
            }
            moveNumber(formatNumArray(number));
        };
        return self;
    }
})(jQuery);
/*
* 使用说明：
* 1 初始化
*   var test=$("#test").numberAnimate({
        "num":100,
        "css":{
            color:'red',
            "font-size":"40px",
        }
    });
 2 更新数据
   test.resetData('新的数据');
*
*
* */