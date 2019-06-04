/**
 * Created by pc on 2017/9/27.
 */
class TopN{
  constructor(elem){
    this.elem = elem;
  }
  set chart(data){
    this.data = data.sort((a,b)=>{
        return b.count- a.count;
  });
    if(this.data.length<=0) {
      this.max = 0;
    }else {
      this.max = this.data[0].count;
    }
  }
  load(){
    this.elem = this.elem instanceof jQuery ? this.elem : $(this.elem);
    let html = '';
    let i=0;
    let delay = 0;
    let animal;
    let nameContent; //判断是文字还是ip地址
    let nameLength; //文字长度
    this.data.forEach((item)=>{
      i++;
    delay+=0.2;
    if(i <= 5) {
      animal = "animation-delay:" + delay + "s;";
    } else {
      animal = "";
    }
    let width = (item.count/this.max)*100 +'%';
    nameContent = item.name.indexOf('.');
    if(item.name !== null) {
      nameLength = item.name.length;
    }else {
      nameLength = 4;
    }
    // if(nameContent == -1 && nameLength > 16) {
    //   item.name = item.name.substr(0, 15);
    // }
    // if(nameContent !== -1 && nameLength > 30) {
    //   item.name = item.name.substr(0, 29);
    // }
    let href = item.href;
    html += ` <div class="Top-rank-item">
                                          <div style="width: 100%;height: 70%;font-size: 0.14rem;position: relative;top: 0.03rem;">
                                              <div class="` + (i <= 5 ? "ani" : "") + `" style="float: left; ` + animal + `"><span style="color: rgb(214,224,226);">NO.`+i+`</span></div>
                                              <div class="marq ` + (nameContent !== -1 && nameLength > 30 || nameContent == -1 && nameLength > 16 ? "marquee" : "") + ` ` + (i <= 5 ? "ani" : "") + ` Top-goto" style="float: left;` + animal + `"><span style="color: rgb(214,224,226);"><a target="_blank" href= '` + (href == undefined? "javascript:void(0):;" : href) + `'>${item.name}</a></span></div>
                                              <span class="Top-items-num ` + (i <= 5 ? "ani" : "") + `" style="right: 1%;` + animal + `"><i class="Top-count Top-areaCount Top-timer">${item.count}</i></span>
                                          </div>
                                          <div style="position: relative;overflow: hidden;left: 0;top: 0.1rem;width: 100%;height:0.04rem;"><div class="` + (i <= 5 ? "light" : "nolight") + `" style="` + animal + `"></div></div>
                                          <div class="Top-items-progress">
                                              <span class="Top-items-bar" style="width:`+width+`"></span>
                                          </div>

                                      </div>`
  });
    this.elem.html(html);
  }
}


class Rank{
  constructor(elem) {
    this.elem = elem;
  }
  set chart(datas){
    this.datas = datas.sort((a,b)=>{
        return a.count - b.count;
    });
    if(this.datas.length<=0) {
      this.max = 0;
    }else {
      this.max = this.datas[0].count;
    }
  }
  load(){
    this.elem = this.elem instanceof jQuery ? this.elem : $(this.elem);
    let html = '';
    let i=0;
    let delay = 0;
    let animal;
    let areaLength;
    let ipLength;
    var __PROVINCES__=[
      '深圳','浙江','广东','山东','山西','辽宁','新疆','河北','甘肃','内蒙古','北京','广西','江苏','四川',
      '江西','福建','安徽','陕西','黑龙江','天津','西藏','云南','湖南','湖北','海南','青海','贵州','河南','重庆','宁夏','吉林','上海'
    ];
    this.datas.forEach((items)=>{
      delay+=0.2;
    i++;
    if(i <= 5) {
      animal = "animation-delay:" + delay + "s;";
    } else {
      animal = "";
    }
    var flag="default";
    var icon = items.country || items.area;
    if($.inArray(icon,__PROVINCES__)!=-1 || "中国" == icon){
      flag="中国";
    }
    if(countryReflects[icon]&&countryReflects[icon]['f']){
      flag= countryReflects[icon]['f'];
    }else if(countryReflects[icon]){
      flag=icon;
    }
    let ip = items.ip;
    // 区域信息长度
    if(items.area !== null) {
      areaLength = items.area.length;
    }else {
      areaLength = 4;
    }
    let ipContent = items.ip.indexOf('.');
    if(items.ip !== null) {
      ipLength = items.ip.length;
    }else {
      ipLength = 4;
    }
    let ipDetail = items.ip.substr(0, 15);
    let width = (items.count/this.max)*100 +'%';
    let href = items.href;
    html += ` <div class="Top-rank-item">
                <div class="Top-top" style="width: 100%;height: 70%;font-size: 0.14rem;position: relative;top: 0.07rem;">
                    <div class="` + (i <= 5 ? "ring ani" : "ring") + `" style="width: 30px; height: 17px; float: left;` + animal + `"><span style="color: rgb(214,224,226);"><span class="top-numtext">NO.</span>`+i+`</span></div>
                    <span class="` + (this.type == 1 ? "noflag" : "") + ` Top-area-icon ` + (i <= 5 ? "ani" : "") + `" style="` + animal + `"><img src="images/flag/`+flag+`.png" /></span>
                    <div class="` + (this.type == 1 ? "noflag_area" : "") + ` Top-area-text ` + (i <= 5 ? "ani" : "") + `" style="float: left;` + animal + `margin-left: 10%;"><span style="color: rgb(214,224,226);">${items.area}</span></div>
                    <div class="marRank ` + (i <= 5 ? "ani" : "") + ` ` + (this.type == 1 ? "Top-nomoreMessage" : "") + ` Top-goto ` + (ipContent !== -1 && ipLength > 30 || ipContent == -1 && ipLength > 13 ? "marquee" : "") + `" style="` + animal + `">
                    <span style=" color: rgb(214,224,226);"><a style="display: inline-block;" target="_blank" href= '` + (href == undefined? "javascript:void(0):;" : href) + `'>${items.ip}</a></span></div>
                    <span class="Top-items-num ` + (i <= 5 ? "ani" : "") + `" style="right: 0.1%;` + animal + `"><i class="Top-count Top-flow_in_count" data-decimals="2" >${items.count}</i></span>
                </div>
                <div style="position: relative;overflow: hidden;left: 0;top: 0.1rem;width: 100%;height:0.04rem;"><div class="` + (i <= 5 ? "light" : "nolight") + `" style="` + animal + `"></div></div>
                <div class="Top-items-progress">
                    <span class="Top-items-bar" style="width:`+width+`"></span>
                </div>

            </div>`
  });
    this.elem.html(html);
  }
}

class AreaN{
  constructor(elem){
    this.elem = elem;
  }
  set chart(data){
    this.data = data.sort((a,b)=>{
        return b.count- a.count;
  });
    if(this.data.length<=0) {
      this.max = 0;
    }else {
      this.max = this.data[0].count;
    }
  }
  load(){
    this.elem = this.elem instanceof jQuery ? this.elem : $(this.elem);
    let html = '';
    let i=0;
    let delay = 0;
    let animal;
    let nameContent; //判断是文字还是ip地址
    let nameLength; //文字长度
    this.data.forEach((item)=>{
      i++;
    delay+=0.2;
    if(i <= 5) {
      animal = "animation-delay:" + delay + "s;";
    } else {
      animal = "";
    }
    let high = (item.high/item.count)*100 +'%';
    let medium = (item.medium/item.count)*100 +'%';
    let low = (item.low/item.count)*100 +'%';
    if(item.count==0){
      high = medium = low = '33.3%';
    }
    let sort = item.high/this.max;
    nameContent = item.name.indexOf('.');
    if(item.name !== null) {
      nameLength = item.name.length;
    }else {
      nameLength = 4;
    }
    let href = item.href;

    html += `<div class="Top-rank-item">
                  <div class="area-rank-item" sort=`+sort+` style="width: 100%;height: 90%;font-size: 0.14rem;">
                      <div class="` + (i <= 5 ? "ani" : "") + ` rank-item-no `+ `" style="` + animal + `"><span>`+(i<10?'0'+i:i)+`</span></div>
                      <div class="` + (i <= 5 ? "ani" : "") + ` rank-item-name ` + `" style="` + animal + `"><a target="_blank" href= '` + (href == undefined? "javascript:void(0):;" : href) + `'>${item.name}</a></div>
                      <div class="` + (i <= 5 ? "ani" : "") + ` rank-item-value `+ `" style="` + animal + `">${item.count}</div>                              
                      <div class="rank-item-progress">
                        <div class="area-items-progress">
                            <span class="area-items-bar" title="高危：${item.high}" style="width:`+high+`"></span>
                            <span class="area-items-bar" title="中危：${item.medium}" style="width:`+medium+`"></span>
                            <span class="area-items-bar" title="低危：${item.low}" style="width:`+low+`"></span>
                        </div>
                      </div>
                      </div>
                  </div>`

  });
    this.elem.html(html);
  }
}
