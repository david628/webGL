var Ajax = $.ajax;
$.ajax = function(D) {
  D.complete = function(XMLHttpRequest, textStatus) {
    var req_status = XMLHttpRequest.status;
    switch(req_status) {
      case 404: 
          parent.location.href = "#/noFound";
          break;
      case 403:
          parent.location.href = "#/noPermission";
          break;
    }
    if (XMLHttpRequest.getResponseHeader("sessionstatus") == "loginout") {
      var arr = parent.location.href.split("/");
      var loca = arr[0];
      var len = arr.length;
      var str = arr[len-1];
      if (str != "login") {
        window.location.href = "/index.html#/login";
      }
    }
  }
  Ajax(D);
}
window.base = {
  Format : function() {
    var trimRe = /^\s+|\s+$/g, stripTagsRE = /<\/?[^>]+>/gi, stripScriptsRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig, nl2brRe = /\r?\n/g;
    return {
      ellipsis : function(e, t, n) {
        if (e && e.length > t) {
          if (n) {
            var r = e.substr(0, t - 2), i = Math.max(r.lastIndexOf(" "), r.lastIndexOf("."), r.lastIndexOf("!"), r.lastIndexOf("?"));
            return i == -1 || i < t - 15 ? e.substr(0, t - 3) + "..." : r.substr(0, i) + "..."
          }
          return e.substr(0, t - 3) + "..."
        }
        return e
      },
      undef : function(e) {
        return e !== undefined ? e : ""
      },
      defaultValue : function(e, t) {
        return e !== undefined && e !== "" ? e : t
      },
      htmlEncode : function(e) {
        return e ? String(e).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : e
      },
      htmlDecode : function(e) {
        return e ? String(e).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&") : e
      },
      trim : function(e) {
        return String(e).replace(trimRe, "")
      },
      substr : function(e, t, n) {
        return String(e).substr(t, n)
      },
      lowercase : function(e) {
        return String(e).toLowerCase()
      },
      uppercase : function(e) {
        return String(e).toUpperCase()
      },
      capitalize : function(e) {
        return e ? e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() : e
      },
      call : function(value, fn) {
        if (arguments.length > 2) {
          var args = Array.prototype.slice.call(arguments, 2);
          return args.unshift(value), eval(fn).apply(window, args)
        }
        return eval(fn).call(window, value)
      },
      usMoney : function(e) {
        e = Math.round((e - 0) * 100) / 100, e = e == Math.floor(e) ? e + ".00" : e * 10 == Math.floor(e * 10) ? e + "0" : e, e = String(e);
        var t = e.split("."), n = t[0], r = t[1] ? "." + t[1] : ".00", i = /(\d+)(\d{3})/;
        while (i.test(n))
          n = n.replace(i, "$1,$2");
        return e = n + r, e.charAt(0) == "-" ? "-$" + e.substr(1) : "$" + e
      },
      date : function(e, t) {},
      dateRenderer : function(e) {},
      stripTags : function(e) {
        return e ? String(e).replace(stripTagsRE, "") : e
      },
      stripScripts : function(e) {
        return e ? String(e).replace(stripScriptsRe, "") : e
      },
      fileSize : function(e) {
        return e < 1024 ? e + " bytes" : e < 1048576 ? Math.round(e * 10 / 1024) / 10 + " KB" : e < 1048576 * 1024 ? Math.round(e * 10 / 1048576) / 10 + " MB" : e < 1048576 * 1048576 ? Math.round(e * 10 / (1048576 * 1024)) / 10 + " G" : Math.round(e * 10 / (1048576 * 1048576)) / 10 + " T"
      },
      math : function() {
        var e = {};
        return function(t, n) {
          return e[n] || (e[n] = new Function("v", "return v " + n + ";")), e[n](t)
        }
      }(),
      round : function(e, t) {
        var n = Number(e);
        return typeof t == "number" && (t = Math.pow(10, t), n = Math.round(e * t) / t), n
      },
      plural : function(e, t, n) {
        return e + " " + (e == 1 ? t : n ? n : t + "s")
      }
    }
  }(),
  power: [
    [1, '超级管理员']
  ],
  tran_Power: function (D) {
    D = parseInt(D, 10);
    var v = [];
    for (var i = 0; i < this.power.length; i++) {
      if (D & parseInt(this.power[i][0], 10)) {
        v.push(this.power[i][0]);
      }
    }
    return v;
  },
  open: function(url) {
    var rs = [], f = document.createElement('form');
    f.target = '_blank';
    f.method = 'get';
    var arr = url.split('?');
    if(arr.length) {
      //f.action = arr[0];
      var param = DBapp.urlDecode(arr[1]);
      if(param) {
        for(var n in param) {
          rs.push('<input type="hidden" name="' + n + '" value="' + param[n] + '">');
        }
      }
    }/* else {
      //f.action = url;
    }*/
    f.action = url;
    f.innerHTML = rs.join('');
    document.body.appendChild(f);
    f.submit();
    document.body.removeChild(f);
    history.go(-1);
  },
  resoleLink: function(link) {
    if(link === undefined) {
      return '';
    }
    return link.replace(/\.\w+$/, '');
  },
  getLink: function (item) {
    let url = 'javascript:;'
    if (item && item['href']) {
      url = setting['path'] + item['href'];
    }
    return url;
  },
  getAction: function (url) {
    return '/' + url + "?token=" + base.getToken();
  },
  getToken: function () {
    return '';
  },
  getSystemType: function() {
    if (DBapp.isBlank(DBapp.Cookies.get("system"))) {
      return "";
    }
    return DBapp.Cookies.get("system");
  },
  setSystemType: function(type) {
    DBapp.Cookies.set("system", type);
  },
  trim: function (str) {
    return ((str || "") + "").replace(/(^\s*)|(\s*$)/g, "");
  },
  isBlank: function (v) {
    if (v === undefined || v === null) {
      return true;
    }
    if (parseInt(v) && parseInt(v) >= 0) {
      return false;
    }
    if ($.isEmptyObject(v)) {
      return true;
    }
    return this.trim(v) == "";
  },
  isNotBlank: function (v) {
    return !this.isBlank(v);
  },
  format: function (date, format) {
    var o = {
      "M+": date.getMonth() + 1, // month
      "D+": date.getDate(), // day
      "h+": date.getHours(), // hour
      "m+": date.getMinutes(), // minute
      "s+": date.getSeconds(), // second
      "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
      "S": date.getMilliseconds()
      // millisecond
    };
    if (/(Y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  },
  transDate: function (time, format) {
    if (!time) {
      return "";
    }
    return this.format(new Date(time), format || 'YYYY-MM-DD hh:mm:ss');
  },
  checkPort: function (value) {
    if (!$.isNumeric(parseInt(value, 10)))
      return false;
    if (parseInt(value) > 65535 || parseInt(value) < 0)
      return false;
    return true;
  },
  checkEmail: function (value) {
    var regm = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (value.match(regm)) {
      return true;
    }
    return false;
  },
  checkMobile: function (value) {
    var reg0 = /^13\d{9}$/g;
    var reg1 = /^15\d{9}$/g;
    var reg2 = /^\d+$/;
    if (value.length != 11) {
      return false;
    }
    if (reg0.test(value)) {
      return true;
    }
    if (reg1.test(value)) {
      return true;
    }
    if (reg2.test(value)) {
      return true;
    }
    return false;
  },
  checkEmail: function (value) {
    var regm = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (value.match(regm)) {
      return true;
    }
    return false;
  },
  checkMobile: function (value) {
    var reg0 = /^13\d{9}$/g;
    var reg1 = /^15\d{9}$/g;
    var reg2 = /^\d+$/;
    if (value.length != 11) {
      return false;
    }
    if (reg0.test(value)) {
      return true;
    }
    if (reg1.test(value)) {
      return true;
    }
    if (reg2.test(value)) {
      return true;
    }
    return false;
  },
  vaIP: function (value) {
    var regIp = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
    if (!regIp.test(value)) return false;
    return true;
  },
  validPwd: function (value) {
    if (this.isBlank(value)) {
      /*if(D) {
       D.msg = Lang.isNotBlank;
       Dldh.ui.errorMsg(D);
       }*/
      return Lang.isNotnull;
    } else {
      if (value.length < 8 || value.length > 16) {
        /*if(D) {
         D.msg = Lang.verify_passwordForm;
         Dldh.ui.errorMsg(D);
         }*/
        return Lang.verify_passwordForm;
      } else {
        var va = new RegExp('\\d');
        var result = va.test(value);
        if (result) {
          var pattern = new RegExp("[a-zA-z`~!@#$%^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
          var rs = pattern.test(value);
          if (rs) {
            return true;
          } else {
            /*if(D) {
             D.msg = Lang.verify_passwordForm;
             Dldh.ui.errorMsg(D);
             }*/
            return Lang.verify_passwordForm;
          }
        } else {
          /*if(D) {
           D.msg = Lang.verify_passwordForm;
           Dldh.ui.errorMsg(D);
           }*/
          return Lang.verify_passwordForm;
        }
      }
    }
  },
  loginOut: function () {
    var self = this;
    DBapp.ui.Msg.Confirm(Lang.ts, "是否安全退出？", function (btn) {
      if (btn == "yes") {
        $.ajax({
          type: "post",
          url: base.getAction("logout"),
          dataType: "json",
          contentType: "application/json",
          data: {},
          success: function (data) {
            if (!data['fail']) {
              self.gotoLogin();
            } else {
              DBapp.ui.Msg.Alert(Lang.ts, data['mesg'] || Lang.operateIsError);
            }
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            DBapp.ui.Msg.Alert(Lang.ts, Lang.operateTimeout);
          }
        });
      }
    });
  },
  gotoLogin: function () {
    //sessionStorage.removeItem('user');
    window.location.href = "/#login";
  },
  showProduceInfo: function () {
    var text1 = "";
    if (OEM.VERSION_STRING) {
      text1 += OEM.VERSION_STRING;
    } else {
      if (OEM.VERSION_MAJOR && !DBapp.isBlank(OEM.VERSION_MAJOR)) {
        text1 += OEM.VERSION_MAJOR;
      }
      if (OEM.VERSION_MIN1 && !DBapp.isBlank(OEM.VERSION_MIN1)) {
        text1 += "." + OEM.VERSION_MIN1;
      }
      if (OEM.VERSION_MIN2 && !DBapp.isBlank(OEM.VERSION_MIN2)) {
        text1 += "." + OEM.VERSION_MIN2;
      }
      if (OEM.VERSION_REV && !DBapp.isBlank(OEM.VERSION_REV)) {
        text1 += "." + OEM.VERSION_REV;
      }
      if (OEM.VERSION_BUILD && !DBapp.isBlank(OEM.VERSION_BUILD)) {
        text1 += "." + OEM.VERSION_BUILD;
      }
    }
    var producename = (OEM.PRODUCT_CN || "") + (OEM.TYPE || "");
    document.title = producename + text1;
    var produce = document.getElementById("id-produce-info");
    if (produce) {
      var text2 = "";
      if (OEM.COMPANY_NAME && !DBapp.isBlank(OEM.COMPANY_NAME)) {
        text2 += OEM.COMPANY_NAME;
      }
      if (OEM.COPY_RIGHT && !DBapp.isBlank(OEM.COPY_RIGHT)) {
        text2 += "<font>" + OEM.COPY_RIGHT + "</font>";
      }
      if (OEM.COMPANY_PHONE && !DBapp.isBlank(OEM.COMPANY_PHONE)) {
        text2 += "<font>" + OEM.COMPANY_PHONE + "</font>";
      }
      if (OEM.COMPANY_EMAIL && !DBapp.isBlank(OEM.COMPANY_EMAIL)) {
        text2 += "<font>Email：" + OEM.COMPANY_EMAIL + "</font>";
      }
      if (OEM.COMPANY_URL && !DBapp.isBlank(OEM.COMPANY_URL)) {
        text2 += "<a href=\"" + OEM.COMPANY_URL + "\" target=\"_blank\">" + OEM.COMPANY_URL + "</a>";
      }
      var header = document.getElementById("id-producename");
      if (header) {
        header.innerHTML = (OEM.PRODUCT_CN || "") + (OEM.TYPE || "");
      }
      produce.innerHTML = text2;
    }
    return {
      producename: producename,
      version: text1
    };
  },
  getNodesData: function (json) {
    var categories = [],
      categories_cache = {},
      nodes = [],
      links = [],
      cache = {};
    for (var n in json) {
      categories.push({
        'name': n
      });
      for (var i = 0; i < json[n]['buckets'].length; i++) {
        this.getChildNodesData(categories, nodes, links, json[n]['buckets'][i], cache, categories_cache, 0);
      }
    }
    return {
      categories: categories,
      nodes: nodes,
      links: links,
    };
  },
  getDate: function (shortcut) {
    var current = new Date(), start, end;
    if(shortcut == 'today') {
      start = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 0, 0, 0);
      end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59);
    } else if(shortcut == 'curWeek') {
      var nowDay = current.getDay();
      if(nowDay === 0) {//周日
        start = new Date(current.getFullYear(), current.getMonth(), current.getDate() - nowDay - 6, 0, 0, 0);
        end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59);
      } else if(nowDay === 1) {
        start = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 0, 0, 0);
        end = new Date(current.getFullYear(), current.getMonth(), current.getDate() - nowDay + 7, 0, 0, 0);
      } else {
        start = new Date(current.getFullYear(), current.getMonth(), current.getDate() - nowDay + 1, 0, 0, 0);
        end = new Date(current.getFullYear(), current.getMonth(), current.getDate() - nowDay + 7, 23, 59, 59);
      }
    } else if(shortcut == 'curMonth') {
      start = new Date(current.getFullYear(), current.getMonth(), 1, 0, 0, 0);
      end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59);
    } else if(shortcut == 'curSeason') {
      var getSeason = type => {
        if(type == 1) {
          return [new Date(current.getFullYear(), 0, 1, 0, 0, 0), new Date(current.getFullYear(), 2, 31, 23, 59, 59)];
        } else if(type == 2) {
          return [new Date(current.getFullYear(), 3, 1, 0, 0, 0), new Date(current.getFullYear(), 5, 30, 23, 59, 59)];
        } else if(type == 3) {
          return [new Date(current.getFullYear(), 6, 1, 0, 0, 0), new Date(current.getFullYear(), 8, 30, 23, 59, 59)];
        } else if(type == 4) {
          return [new Date(current.getFullYear(), 9, 1, 0, 0, 0), new Date(current.getFullYear(), 11, 31, 23, 59, 59)];
        }
      }
      //start = new Date(current.getFullYear(), current.getMonth(), 1, 0, 0, 0);
      //end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59);
      if(current.getMonth() >= 0 && current.getMonth() <= 2) {
        return getSeason(1);
      } else if(current.getMonth() >= 3 && current.getMonth() <= 5) {
        return getSeason(2);
      } else if(current.getMonth() >= 6 && current.getMonth() <= 8) {
        return getSeason(3);
      } else if(current.getMonth() >= 9 && current.getMonth() <= 11) {
        return getSeason(4);
      }
    } else if (shortcut == 'lastYear') {
      start = new Date(current.getFullYear() - 1, 0, 1, 0, 0, 0);
      end = new Date(current.getFullYear() - 1, 11, 31, 23, 59, 59);
    } else if (shortcut == 'curYear') {
      start = new Date(current.getFullYear(), 0, 1, 0, 0, 0);
      end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59);
    } else if (shortcut == 'near7day') {
      start = new Date(current.getFullYear(), current.getMonth(), current.getDate() - 6, 0, 0, 0);
      end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59);
    } else if (shortcut == 'near30day') {
      start = new Date(current.getFullYear(), current.getMonth(), current.getDate() - 29, 0, 0, 0);
      end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59);
    }
    return [start, end];
  },
  getChildNodesData: function (categories, store, links, item, cache, categories_cache, num, pname) {
    if (!cache[item['name']]) {
      store.push({
        //'name': item['key'],
        'name': item['name'],
        'symbolSize': 16,
        'draggable': true,
        //'value': item['doc_count'],
        'category': num
      });
      //cache[item['key']] = true;
      cache[item['name']] = true;
    }
    if (pname !== undefined) {
      links.push({
        'source': pname,
        '_value': item['doc_count'],
        'value': 60,
        //'target': item['key']
        'target': item['name']
      });
    }
    for (var n in item) {
      if (n != 'key' && n != 'doc_count' && n != 'name') {
        if (!categories_cache[n]) {
          categories.push({
            'name': n
          });
          categories_cache[n] = true;
        }
        if (item[n]['buckets'] && item[n]['buckets'].length) {
          for (var i = 0; i < item[n]['buckets'].length; i++) {
            this.getChildNodesData(categories, store, links, item[n]['buckets'][i], cache, categories_cache, num + 1, item['name']);
          }
        }
      }
    }
  },
  IS_OK: function (code) {
    var rs = false;
    if (parseInt(code, 10) == 0 || parseInt(code, 10) == 1) {
      rs = true;
    }
    return rs;
  }
}