/**
 * Created by pc on 2017/11/24.
 */
class Scroll{
  constructor(obj){
      this.elem = obj.elem instanceof jQuery ? obj.elem :$(obj.elem);
      this.count = obj.count;
      this.cm = obj.cm;
      this.execute = obj.execute;
      this.interval = obj.interval;
      this.isMove = true;
      this.handlerEvent();
      this.createListHeader();
  }
  createListHeader(){
      let headerCells = [];
      for(let i =0 ;i<this.cm.length;i++){
          headerCells.push(`<li class="scrollList-header-item" style="${this.addCss(this.cm[i].css)}">${this.cm[i].header}</li>`);
      }
      this.elem.append('<ul class="scrollList-header">'+headerCells.join('')+'</ul>');
      this.elem.find('.scrollList-header').css('lineHeight',this.elem.find('.scrollList-header').height()+'px');
  }
  handlerEvent(){
      let e = this.elem[0];
      e.onmouseover= ()=>{
          this.isMove = false;
      };
      e.onmouseout = ()=>{
          this.isMove = true;
      };
      let transitionEvent = this.whichTransitionEvent();
      transitionEvent && e.addEventListener(transitionEvent,() => {
          this.scrollBody.find(".scroll_list:first-child").remove();
          this.scrollBody.append('<div class="scroll_list"></div>');
          this.scrollBody.find(".scroll_list:last-child").html(this.getGrid(this.data));
          this.elem.find('.scroll_row').css('lineHeight',this.elem.find('.scroll_row').height()+'px');
      });
  }
  load(data){
      this.data = data;
      this.elem.append("<div class='scrollBody'></div>");
      this.scrollBody = this.elem.find('.scrollBody');
      let scrollBody_height = this.elem.height() - this.elem.find(".scrollList-header").height();
      this.scrollBody.css("height",scrollBody_height);
      if(this.timer){
          clearInterval(this.timer);
          this.timer = null;
      }
      if(data.length<=this.count){
          this.scrollBody.html(this.getGrid(data));
          this.elem.find('.scroll_row').css('lineHeight',this.elem.find('.scroll_row').height()+'px');
      }
      else{
          this.pointer = 0;
          let html = `<div class="scroll_list"></div>
                    <div class="scroll_list"></div>`;
          this.scrollBody.html(html);
          this.elem.find(".scroll_list:first-child").html(this.getGrid(data));
          this.elem.find(".scroll_list:last-child").html(this.getGrid(data));
          this.elem.find('.scroll_row').css('lineHeight',this.elem.find('.scroll_row').height()+'px');
          this.timer = setInterval(()=>{
              if(this.isMove){
                this.animation();
              }
          },this.interval);
      }
  }
  addCss(cssObj){
      let css = '';
      for(let key in cssObj){
          css += key + ':'+ cssObj[key]+';';
      }
      return css;
  }
  whichTransitionEvent(){
      var t,
          el = document.createElement('surface'),
          transitions = {
              'transition':'transitionend',
              'OTransition':'oTransitionEnd',
              'MozTransition':'transitionend',
              'WebkitTransition':'webkitTransitionEnd'
          };
      for(t in transitions){
          if( el.style[t] !== undefined ){
              return transitions[t];
          }
      }
  }
  animation(){
      this.elem.find(".scroll_list:first-child").css({
          'transform':"scaleY(0)",
          'height': 0,
          'transform-origin': 'left top',
          'transition': this.execute
      });
  }
  getGrid(data){
      let array = [];
      if(data.length <= this.count){
          array = data;
      }
      else{
          while(array.length<this.count){
              array.push(this.data[this.pointer]);
              if(++this.pointer == this.data.length){
                  this.pointer = 0;
              }
          }
      }
      let gridHtml = '';
      let rowHeight = (1/this.count)*100 + '%';
      for(let i=0;i<array.length;i++){
          let gridRow = `<ul class='scroll_row' style="height:${rowHeight}">`;
          for(let j=0;j<this.cm.length;j++){
              if(!this.cm[j].rendFn){
                  gridRow += `<li style="${this.addCss(this.cm[j].css)}">${array[i][this.cm[j].dataStore]}</li>`
              }
              else{
                  gridRow += `<li style="${this.addCss(this.cm[j].css)}">${this.cm[j].rendFn(array[i])}</li>`
              }
          }
          gridRow += '</ul>';
          gridHtml += gridRow;
      }
      return gridHtml;
  }
}