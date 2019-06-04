//(function(global) {
  var JSON = {
    "浙江": {
    	"sourceIp": {
    		name: ['韩国(1.19.252.123)','美国(204.152.218.50)','浙江(183.129.218.237)','美国(23.83.87.138)','香港(119.28.1.227)'],
        value: [457, 497, 738, 991, 3701]
    	},
    	"attackType": {
    		name: ['敏感文件探测','sql注入攻击','目录穿越','可疑文件访问', 'xss注入攻击'],
        value: [702, 1745, 2478, 3256, 4368]
    	}
    },
    "北京": {
    	"sourceIp": {
    		name: ['美国(23.83.66.121)','美国(23.83.87.138)','美国(23.83.64.125)','美国(204.152.218.23)','浙江(115.233.22.17)'],
        value: [61, 197, 321, 1798, 3701]
    	},
    	"attackType": {
    		name: ['Web漏洞扫描探测','sql注入攻击','非法请求协议','无效请求头','目录遍历'],
        value: [302, 1645, 2418, 3486, 5398]
    	}
    },
    "美国": {
    	"sourceIp": {
    		name: ['浙江(60.182.11.233)','美国(23.83.87.138)','福建(223.24.34.57)','北京(47.92.22.11)','俄罗斯(62.5.210.17)'],
        value: [63, 904, 2302, 3467, 6792]
    	},
    	"attackType": {
    		name: ['sql注入攻击','命令注入攻击','xss注入攻击','webshell访问','恶意文件攻击'],
        value: [345, 1865, 3643, 9673, 33368]
    	}
    }
  };
  var HOTS = [["浙江省	杭州市	杭州市",	120.15,	30.28],
  //["浙江省	杭州市	上城区",120.17,	30.25],
  //["浙江省	杭州市	下城区",	120.17,	30.28],
  //["浙江省	杭州市	江干区",	120.2,	30.27],
  //["浙江省	杭州市	拱墅区",	120.13,	30.32],
  //["浙江省	杭州市	西湖区	",120.13,	30.27],
  //["浙江省	杭州市	滨江区	",120.2,	30.2],
  //["浙江省	杭州市	萧山区	",120.27,	30.17],
  //["浙江省	杭州市	余杭区	",120.3,	30.42],
  //["浙江省	杭州市	桐庐县	",119.67,	29.8],
  //["浙江省	杭州市	淳安县	",119.03,	29.6],
  //["浙江省	杭州市	建德市	",119.28,	29.48],
  //["浙江省	杭州市	富阳市	",119.95,	30.05],
  //["浙江省	杭州市	临安市	",119.72,	30.23],
  ["浙江省	宁波市	宁波市	",121.55,	29.88],
  //["浙江省	宁波市	海曙区",	121.55,	29.87],
  //["浙江省	宁波市	江东区	",121.57,	29.87],
  //["浙江省	宁波市	江北区	",121.55,	29.88],
  //["浙江省	宁波市	北仑区	",121.85,	29.93],
  //["浙江省	宁波市	镇海区	",121.72,	29.95],
  //["浙江省	宁波市	鄞州区	",121.53,	29.83],
  //["浙江省	宁波市	象山县	",121.87,	29.48],
  //["浙江省	宁波市	宁海县	",121.43,	29.28],
  //["浙江省	宁波市	余姚市	",121.15,	30.03],
  //["浙江省	宁波市	慈溪市",	121.23,	30.17],
  //["浙江省	宁波市	奉化市",	121.4,	29.65],
  ["浙江省	温州市	温州市	",120.7,	28.0],
  //["浙江省	温州市	鹿城区	",120.65,	28.02],
  //["浙江省	温州市	龙湾区	",120.82,	27.93],
  //["浙江省	温州市	洞头县	",121.15,	27.83],
  //["浙江省	温州市	永嘉县	",120.68,	28.15],
  //["浙江省	温州市	平阳县	",120.57,	27.67],
  //["浙江省	温州市	苍南县",	120.4,	27.5],
  //["浙江省	温州市	文成县",	120.08,	27.78],
  //["浙江省	温州市	泰顺县",	119.72,	27.57],
  //["浙江省	温州市	瑞安市",	120.63,	27.78],
  //["浙江省	温州市	乐清市",	120.95,	28.13],
  ["浙江省	嘉兴市	嘉兴市	",120.75,	30.75],
  //["浙江省	嘉兴市	秀洲区	",120.7,	30.77],
  //["浙江省	嘉兴市	嘉善县	",120.92,	30.85],
  //["浙江省	嘉兴市	海盐县	",120.95,	30.53],
  //["浙江省	嘉兴市	海宁市",	120.68,	30.53],
  //["浙江省	嘉兴市	平湖市	",121.02,	30.7],
  //["浙江省	嘉兴市	桐乡市",	120.57,	30.63],
  ["浙江省	湖州市	湖州市",	120.08,	30.9],
  //["浙江省	湖州市	吴兴区",	120.12,	30.87],
  //["浙江省	湖州市	南浔区	",120.43,	30.88],
  //["浙江省	湖州市	德清县	",119.97,	30.53],
  //["浙江省	湖州市	长兴县	",119.9,	31.02],
  //["浙江省	湖州市	安吉县	",119.68,	30.63],
  ["浙江省	绍兴市	绍兴市	",120.57,	30.0],
  //["浙江省	绍兴市	越城区	",120.57,	30.0],
  //["浙江省	绍兴市	绍兴县	",120.47,	30.08],
  //["浙江省	绍兴市	新昌县	",120.9,	29.5],
  //["浙江省	绍兴市	诸暨市",	120.23,	29.72],
  //["浙江省	绍兴市	上虞市",	120.87,	30.03],
  //["浙江省	绍兴市	嵊州市	",120.82,	29.58],
  ["浙江省	金华市	金华市	",119.65,	29.08],
  //["浙江省	金华市	婺城区",	119.65,	29.08],
  //["浙江省	金华市	金东区",	119.7,	29.08],
  //["浙江省	金华市	武义县	",119.82,	28.9],
  //["浙江省	金华市	浦江县",	119.88,	29.45],
  //["浙江省	金华市	磐安县	",120.43,	29.05],
  //["浙江省	金华市	兰溪市	",119.45,	29.22],
  //["浙江省	金华市	义乌市	",120.07,	29.3],
  //["浙江省	金华市	东阳市	",120.23,	29.28],
  //["浙江省	金华市	永康市	",120.03,	28.9],
  ["浙江省	衢州市	衢州市	",118.87,	28.93],
  //["浙江省	衢州市	柯城区	",118.87,	28.93],
  //["浙江省	衢州市	衢江区	",118.93,	28.98],
  //["浙江省	衢州市	常山县	",118.52,	28.9],
  //["浙江省	衢州市	开化县",	118.42,	29.13],
  //["浙江省	衢州市	龙游县	",119.17,	29.03],
  ["浙江省	衢州市	江山市",	118.62,	28.75],
  //["浙江省	舟山市	舟山市",	122.2,	30.0],
  //["浙江省	舟山市	定海区",	122.1,	30.02],
  //["浙江省	舟山市	普陀区",	122.3,	29.95],
  //["浙江省	舟山市	岱山县	",122.2,	30.25],
  //["浙江省	舟山市	嵊泗县",	122.45,	30.73],
  ["浙江省	台州市	台州市",	121.43,	28.68],
  //["浙江省	台州市	椒江区",	121.43,	28.68],
  //["浙江省	台州市	黄岩区	",121.27,	28.65],
  //["浙江省	台州市	路桥区	",121.38,	28.58],
  //["浙江省	台州市	玉环县	",121.23,	28.13],
  //["浙江省	台州市	三门县",	121.38,	29.12],
  //["浙江省	台州市	天台县	",121.03,	29.13],
  ["浙江省	台州市	仙居县",	120.73,	28.87],
  ["浙江省	台州市	温岭市	",121.37,	28.37],
  ["浙江省	台州市	临海市	",121.12,	28.85],
  ["浙江省	丽水市	丽水市	",119.92,	28.45],
  //["浙江省	丽水市	莲都区	",119.92,	28.45],
  //["浙江省	丽水市	青田县	",120.28,	28.15],
  //["浙江省	丽水市	缙云县	",120.07,	28.65],
  //["浙江省	丽水市	遂昌县",	119.27,	28.6],
  //["浙江省	丽水市	松阳县",	119.48,	28.45],
  //["浙江省	丽水市	云和县",	119.57,	28.12],
  //["浙江省	丽水市	庆元县",	119.05,	27.62],
  ///["浙江省	丽水市	景宁畲族自治县",	119.63,	27.98],
  ["浙江省	丽水市	龙泉市",	119.13,	28.08]];

  var LATLON = {
		"BD": {
			"lat": "24",
			"lon": "90"
		},
		"BE": {
			"lat": "50.8333",
			"lon": "4"
		},
		"BF": {
			"lat": "13",
			"lon": "-2"
		},
		"BG": {
			"lat": "43",
			"lon": "25"
		},
		"BA": {
			"lat": "44",
			"lon": "18"
		},
		"BB": {
			"lat": "13.1667",
			"lon": "-59.5333"
		},
		"WF": {
			"lat": "-13.3",
			"lon": "-176.2"
		},
		"BM": {
			"lat": "32.3333",
			"lon": "-64.75"
		},
		"BN": {
			"lat": "4.5",
			"lon": "114.6667"
		},
		"BO": {
			"lat": "-17",
			"lon": "-65"
		},
		"BH": {
			"lat": "26",
			"lon": "50.55"
		},
		"BI": {
			"lat": "-3.5",
			"lon": "30"
		},
		"BJ": {
			"lat": "9.5",
			"lon": "2.25"
		},
		"BT": {
			"lat": "27.5",
			"lon": "90.5"
		},
		"JM": {
			"lat": "18.25",
			"lon": "-77.5"
		},
		"BV": {
			"lat": "-54.4333",
			"lon": "3.4"
		},
		"BW": {
			"lat": "-22",
			"lon": "24"
		},
		"WS": {
			"lat": "-13.5833",
			"lon": "-172.3333"
		},
		"BR": {
			"lat": "-10",
			"lon": "-55"
		},
		"BS": {
			"lat": "24.25",
			"lon": "-76"
		},
		"JE": {
			"lat": "49.21",
			"lon": "-2.13"
		},
		"BY": {
			"lat": "53",
			"lon": "28"
		},
		"BZ": {
			"lat": "17.25",
			"lon": "-88.75"
		},
		"RU": {
			"lat": "60",
			"lon": "100"
		},
		"RW": {
			"lat": "-2",
			"lon": "30"
		},
		"RS": {
			"lat": "44",
			"lon": "21"
		},
		"TL": {
			"lat": "-8.55",
			"lon": "125.5167"
		},
		"RE": {
			"lat": "-21.1",
			"lon": "55.6"
		},
		"TM": {
			"lat": "40",
			"lon": "60"
		},
		"TJ": {
			"lat": "39",
			"lon": "71"
		},
		"RO": {
			"lat": "46",
			"lon": "25"
		},
		"TK": {
			"lat": "-9",
			"lon": "-172"
		},
		"GW": {
			"lat": "12",
			"lon": "-15"
		},
		"GU": {
			"lat": "13.4667",
			"lon": "144.7833"
		},
		"GT": {
			"lat": "15.5",
			"lon": "-90.25"
		},
		"GS": {
			"lat": "-54.5",
			"lon": "-37"
		},
		"GR": {
			"lat": "39",
			"lon": "22"
		},
		"GQ": {
			"lat": "2",
			"lon": "10"
		},
		"GP": {
			"lat": "16.25",
			"lon": "-61.5833"
		},
		"JP": {
			"lat": "36",
			"lon": "138"
		},
		"GY": {
			"lat": "5",
			"lon": "-59"
		},
		"GG": {
			"lat": "49.5",
			"lon": "-2.56"
		},
		"GF": {
			"lat": "4",
			"lon": "-53"
		},
		"GE": {
			"lat": "42",
			"lon": "43.5"
		},
		"GD": {
			"lat": "12.1167",
			"lon": "-61.6667"
		},
		"GB": {
			"lat": "54",
			"lon": "-2"
		},
		"GA": {
			"lat": "-1",
			"lon": "11.75"
		},
		"GN": {
			"lat": "11",
			"lon": "-10"
		},
		"GM": {
			"lat": "13.4667",
			"lon": "-16.5667"
		},
		"GL": {
			"lat": "72",
			"lon": "-40"
		},
		"GI": {
			"lat": "36.1833",
			"lon": "-5.3667"
		},
		"GH": {
			"lat": "8",
			"lon": "-2"
		},
		"OM": {
			"lat": "21",
			"lon": "57"
		},
		"TN": {
			"lat": "34",
			"lon": "9"
		},
		"JO": {
			"lat": "31",
			"lon": "36"
		},
		"HR": {
			"lat": "45.1667",
			"lon": "15.5"
		},
		"HT": {
			"lat": "19",
			"lon": "-72.4167"
		},
		"HU": {
			"lat": "47",
			"lon": "20"
		},
		"HK": {
			"lat": "22.25",
			"lon": "114.1667"
		},
		"HN": {
			"lat": "15",
			"lon": "-86.5"
		},
		"HM": {
			"lat": "-53.1",
			"lon": "72.5167"
		},
		"VE": {
			"lat": "8",
			"lon": "-66"
		},
		"PR": {
			"lat": "18.25",
			"lon": "-66.5"
		},
		"PS": {
			"lat": "32",
			"lon": "35.25"
		},
		"PW": {
			"lat": "7.5",
			"lon": "134.5"
		},
		"PT": {
			"lat": "39.5",
			"lon": "-8"
		},
		"KN": {
			"lat": "17.3333",
			"lon": "-62.75"
		},
		"PY": {
			"lat": "-23",
			"lon": "-58"
		},
		"IQ": {
			"lat": "33",
			"lon": "44"
		},
		"PA": {
			"lat": "9",
			"lon": "-80"
		},
		"PF": {
			"lat": "-15",
			"lon": "-140"
		},
		"PG": {
			"lat": "-6",
			"lon": "147"
		},
		"PE": {
			"lat": "-10",
			"lon": "-76"
		},
		"PK": {
			"lat": "30",
			"lon": "70"
		},
		"PH": {
			"lat": "13",
			"lon": "122"
		},
		"PN": {
			"lat": "-24.7",
			"lon": "-127.4"
		},
		"PL": {
			"lat": "52",
			"lon": "20"
		},
		"PM": {
			"lat": "46.8333",
			"lon": "-56.3333"
		},
		"ZM": {
			"lat": "-15",
			"lon": "30"
		},
		"EH": {
			"lat": "24.5",
			"lon": "-13"
		},
		"EE": {
			"lat": "59",
			"lon": "26"
		},
		"EG": {
			"lat": "27",
			"lon": "30"
		},
		"ZA": {
			"lat": "-29",
			"lon": "24"
		},
		"EC": {
			"lat": "-2",
			"lon": "-77.5"
		},
		"IT": {
			"lat": "42.8333",
			"lon": "12.8333"
		},
		"VN": {
			"lat": "16",
			"lon": "106"
		},
		"SB": {
			"lat": "-8",
			"lon": "159"
		},
		"ET": {
			"lat": "8",
			"lon": "38"
		},
		"SO": {
			"lat": "10",
			"lon": "49"
		},
		"ZW": {
			"lat": "-20",
			"lon": "30"
		},
		"SA": {
			"lat": "25",
			"lon": "45"
		},
		"ES": {
			"lat": "40",
			"lon": "-4"
		},
		"ER": {
			"lat": "15",
			"lon": "39"
		},
		"ME": {
			"lat": "42",
			"lon": "19"
		},
		"MD": {
			"lat": "47",
			"lon": "29"
		},
		"MG": {
			"lat": "-20",
			"lon": "47"
		},
		"MA": {
			"lat": "32",
			"lon": "-5"
		},
		"MC": {
			"lat": "43.7333",
			"lon": "7.4"
		},
		"UZ": {
			"lat": "41",
			"lon": "64"
		},
		"MM": {
			"lat": "22",
			"lon": "98"
		},
		"ML": {
			"lat": "17",
			"lon": "-4"
		},
		"MO": {
			"lat": "22.1667",
			"lon": "113.55"
		},
		"MN": {
			"lat": "46",
			"lon": "105"
		},
		"MH": {
			"lat": "9",
			"lon": "168"
		},
		"MK": {
			"lat": "41.8333",
			"lon": "22"
		},
		"MU": {
			"lat": "-20.2833",
			"lon": "57.55"
		},
		"MT": {
			"lat": "35.8333",
			"lon": "14.5833"
		},
		"MW": {
			"lat": "-13.5",
			"lon": "34"
		},
		"MV": {
			"lat": "3.25",
			"lon": "73"
		},
		"MQ": {
			"lat": "14.6667",
			"lon": "-61"
		},
		"MP": {
			"lat": "15.2",
			"lon": "145.75"
		},
		"MS": {
			"lat": "16.75",
			"lon": "-62.2"
		},
		"MR": {
			"lat": "20",
			"lon": "-12"
		},
		"IM": {
			"lat": "54.23",
			"lon": "-4.55"
		},
		"UG": {
			"lat": "1",
			"lon": "32"
		},
		"MY": {
			"lat": "2.5",
			"lon": "112.5"
		},
		"MX": {
			"lat": "23",
			"lon": "-102"
		},
		"IL": {
			"lat": "31.5",
			"lon": "34.75"
		},
		"FR": {
			"lat": "46",
			"lon": "2"
		},
		"AW": {
			"lat": "12.5",
			"lon": "-69.9667"
		},
		"SH": {
			"lat": "-15.9333",
			"lon": "-5.7"
		},
		"SJ": {
			"lat": "78",
			"lon": "20"
		},
		"FI": {
			"lat": "64",
			"lon": "26"
		},
		"FJ": {
			"lat": "-18",
			"lon": "175"
		},
		"FK": {
			"lat": "-51.75",
			"lon": "-59"
		},
		"FM": {
			"lat": "6.9167",
			"lon": "158.25"
		},
		"FO": {
			"lat": "62",
			"lon": "-7"
		},
		"NI": {
			"lat": "13",
			"lon": "-85"
		},
		"NL": {
			"lat": "52.5",
			"lon": "5.75"
		},
		"NO": {
			"lat": "62",
			"lon": "10"
		},
		"NA": {
			"lat": "-22",
			"lon": "17"
		},
		"VU": {
			"lat": "-16",
			"lon": "167"
		},
		"NC": {
			"lat": "-21.5",
			"lon": "165.5"
		},
		"NE": {
			"lat": "16",
			"lon": "8"
		},
		"NF": {
			"lat": "-29.0333",
			"lon": "167.95"
		},
		"NG": {
			"lat": "10",
			"lon": "8"
		},
		"NZ": {
			"lat": "-41",
			"lon": "174"
		},
		"NP": {
			"lat": "28",
			"lon": "84"
		},"NR":{"lat":"-0.5333","lon":"166.9167"},
		"NU": {
			"lat": "-19.0333",
			"lon": "-169.8667"
		},
		"CK": {
			"lat": "-21.2333",
			"lon": "-159.7667"
		},
		"CI": {
			"lat": "8",
			"lon": "-5"
		},
		"CH": {
			"lat": "47",
			"lon": "8"
		},
		"CO": {
			"lat": "4",
			"lon": "-72"
		},
		"CN": {
			"lat": "35",
			"lon": "105"
		},
		"CM": {
			"lat": "6",
			"lon": "12"
		},
		"CL": {
			"lat": "-30",
			"lon": "-71"
		},
		"CC": {
			"lat": "-12.5",
			"lon": "96.8333"
		},
		"CA": {
			"lat": "60",
			"lon": "-95"
		},
		"CG": {
			"lat": "-1",
			"lon": "15"
		},
		"CF": {
			"lat": "7",
			"lon": "21"
		},
		"CD": {
			"lat": "0",
			"lon": "25"
		},
		"CZ": {
			"lat": "49.75",
			"lon": "15.5"
		},
		"CY": {
			"lat": "35",
			"lon": "33"
		},
		"CX": {
			"lat": "-10.5",
			"lon": "105.6667"
		},
		"CR": {
			"lat": "10",
			"lon": "-84"
		},
		"CV": {
			"lat": "16",
			"lon": "-24"
		},
		"CU": {
			"lat": "21.5",
			"lon": "-80"
		},
		"SZ": {
			"lat": "-26.5",
			"lon": "31.5"
		},
		"SY": {
			"lat": "35",
			"lon": "38"
		},
		"KG": {
			"lat": "41",
			"lon": "75"
		},
		"KE": {
			"lat": "1",
			"lon": "38"
		},
		"SR": {
			"lat": "4",
			"lon": "-56"
		},
		"KI": {
			"lat": "1.4167",
			"lon": "173"
		},
		"KH": {
			"lat": "13",
			"lon": "105"
		},
		"SV": {
			"lat": "13.8333",
			"lon": "-88.9167"
		},
		"KM": {
			"lat": "-12.1667",
			"lon": "44.25"
		},
		"ST": {
			"lat": "1",
			"lon": "7"
		},
		"SK": {
			"lat": "48.6667",
			"lon": "19.5"
		},
		"KR": {
			"lat": "37",
			"lon": "127.5"
		},
		"SI": {
			"lat": "46",
			"lon": "15"
		},
		"KP": {
			"lat": "40",
			"lon": "127"
		},
		"KW": {
			"lat": "29.3375",
			"lon": "47.6581"
		},
		"SN": {
			"lat": "14",
			"lon": "-14"
		},
		"SM": {
			"lat": "43.7667",
			"lon": "12.4167"
		},
		"SL": {
			"lat": "8.5",
			"lon": "-11.5"
		},
		"SC": {
			"lat": "-4.5833",
			"lon": "55.6667"
		},
		"KZ": {
			"lat": "48",
			"lon": "68"
		},
		"KY": {
			"lat": "19.5",
			"lon": "-80.5"
		},
		"SG": {
			"lat": "1.3667",
			"lon": "103.8"
		},
		"SE": {
			"lat": "62",
			"lon": "15"
		},
		"SD": {
			"lat": "15",
			"lon": "30"
		},
		"DO": {
			"lat": "19",
			"lon": "-70.6667"
		},
		"DM": {
			"lat": "15.4167",
			"lon": "-61.3333"
		},
		"DJ": {
			"lat": "11.5",
			"lon": "43"
		},
		"DK": {
			"lat": "56",
			"lon": "10"
		},
		"VG": {
			"lat": "18.5",
			"lon": "-64.5"
		},
		"DE": {
			"lat": "51",
			"lon": "9"
		},
		"YE": {
			"lat": "15",
			"lon": "48"
		},
		"DZ": {
			"lat": "28",
			"lon": "3"
		},
		"US": {
			"lat": "38",
			"lon": "-97"
		},
		"UY": {
			"lat": "-33",
			"lon": "-56"
		},
		"YT": {
			"lat": "-12.8333",
			"lon": "45.1667"
		},
		"UM": {
			"lat": "19.2833",
			"lon": "166.6"
		},
		"LB": {
			"lat": "33.8333",
			"lon": "35.8333"
		},
		"LC": {
			"lat": "13.8833",
			"lon": "-61.1333"
		},
		"LA": {
			"lat": "18",
			"lon": "105"
		},
		"TV": {
			"lat": "-8",
			"lon": "178"
		},
		"TW": {
			"lat": "23.5",
			"lon": "121"
		},
		"TT": {
			"lat": "11",
			"lon": "-61"
		},
		"TR": {
			"lat": "39",
			"lon": "35"
		},
		"LK": {
			"lat": "7",
			"lon": "81"
		},
		"LI": {
			"lat": "47.1667",
			"lon": "9.5333"
		},
		"LV": {
			"lat": "57",
			"lon": "25"
		},
		"TO": {
			"lat": "-20",
			"lon": "-175"
		},
		"LT": {
			"lat": "56",
			"lon": "24"
		},
		"LU": {
			"lat": "49.75",
			"lon": "6.1667"
		},
		"LR": {
			"lat": "6.5",
			"lon": "-9.5"
		},
		"LS": {
			"lat": "-29.5",
			"lon": "28.5"
		},
		"TH": {
			"lat": "15",
			"lon": "100"
		},
		"TF": {
			"lat": "-43",
			"lon": "67"
		},
		"TG": {
			"lat": "8",
			"lon": "1.1667"
		},
		"TD": {
			"lat": "15",
			"lon": "19"
		},
		"TC": {
			"lat": "21.75",
			"lon": "-71.5833"
		},
		"LY": {
			"lat": "25",
			"lon": "17"
		},
		"VA": {
			"lat": "41.9",
			"lon": "12.45"
		},
		"VC": {
			"lat": "13.25",
			"lon": "-61.2"
		},
		"AE": {
			"lat": "24",
			"lon": "54"
		},
		"AD": {
			"lat": "42.5",
			"lon": "1.6"
		},
		"AG": {
			"lat": "17.05",
			"lon": "-61.8"
		},
		"AF": {
			"lat": "33",
			"lon": "65"
		},
		"AI": {
			"lat": "18.25",
			"lon": "-63.1667"
		},
		"VI": {
			"lat": "18.3333",
			"lon": "-64.8333"
		},
		"IS": {
			"lat": "65",
			"lon": "-18"
		},
		"IR": {
			"lat": "32",
			"lon": "53"
		},
		"AM": {
			"lat": "40",
			"lon": "45"
		},
		"AL": {
			"lat": "41",
			"lon": "20"
		},
		"AO": {
			"lat": "-12.5",
			"lon": "18.5"
		},
		"AN": {
			"lat": "12.25",
			"lon": "-68.75"
		},
		"AQ": {
			"lat": "-90",
			"lon": "0"
		},
		"AS": {
			"lat": "-14.3333",
			"lon": "-170"
		},
		"AR": {
			"lat": "-34",
			"lon": "-64"
		},
		"AU": {
			"lat": "-27",
			"lon": "133"
		},
		"AT": {
			"lat": "47.3333",
			"lon": "13.3333"
		},
		"IO": {
			"lat": "-6",
			"lon": "71.5"
		},
		"IN": {
			"lat": "20",
			"lon": "77"
		},
		"TZ": {
			"lat": "-6",
			"lon": "35"
		},
		"AZ": {
			"lat": "40.5",
			"lon": "47.5"
		},
		"IE": {
			"lat": "53",
			"lon": "-8"
		},
		"ID": {
			"lat": "-5",
			"lon": "120"
		},
		"UA": {
			"lat": "49",
			"lon": "32"
		},
		"QA": {
			"lat": "25.5",
			"lon": "51.25"
		},
		"MZ": {
			"lat": "-18.25",
			"lon": "35"
		}
	};
	var page = {
	  init: function() {
	  	audio.init();
	  	this.req_validattack();//总记录数/安全事件次数/安全事件处理率
	  	this.req_storage();//磁盘使用量
	  	this.req_getEarth();//中间球
	  },
	  resoleSizeUnit: function(v) {
	  	var arr = v.split(" ");
	  	return arr[0] + '<span class="unit">' + arr[1] + '</span>';
	  },
	  req_validattack: function(param) {
      //总记录数/安全事件次数/安全事件处理率
      $.ajax({
        type: 'post',
        //url: base.getAction('api/awareness/validattack'),
        url: 'http://172.16.100.65/mockjsdata/46/api/awareness/validattack',
        dataType: 'json',
        data: param,
        success: (data) => {
        	var data = {
      	    "rate": 0.0033558512651777656,
      	    "validattack": 1785836,
      	    "msg": "success",
      	    "code": 0,
      	    "dealattack": 5993
        	};
        	$("#id-validattack").html((data["validattack"] || 0).toLocaleString());
        	$("#id-dealattack").html((data["dealattack"] || 0).toLocaleString());
        	$("#id-rate").html(((data["rate"] * 100).toFixed(2) || 0));
        	/*$("#id-validattack").numberAnimate({
            "num": 0
          }).resetData((data["validattack"] || 0));
        	
        	$("#id-dealattack").numberAnimate({
            "num": 0
          }).resetData((data["dealattack"] || 0));
        	
        	$("#id-rate").numberAnimate({
            "num": 0.01
          }).resetData((data["rate"] * 100).toFixed(2) || 0);*/
        },
        error: (data) => {
        	var data = {
      	    "rate": 0.0033558512651777656,
      	    "validattack": 1785836,
      	    "msg": "success",
      	    "code": 0,
      	    "dealattack": 5993
        	};
        	$("#id-validattack").html((data["validattack"] || 0).toLocaleString());
        	$("#id-dealattack").html((data["dealattack"] || 0).toLocaleString());
        	$("#id-rate").html(((data["rate"] * 100).toFixed(2) || 0));
        }
      });
    },
	  req_storage: function(param) {
	  	//磁盘使用量
      $.ajax({
        type: 'post',
        //url: base.getAction('api/awareness/storage'),
        url: 'http://172.16.100.65/mockjsdata/46/api/awareness/storage',
        dataType: 'json',
        data: param,
        success: (data) => {
        	var data = {code: 0, message: "获取磁盘使用量该数据成功", data: 216661856788};
        	$("#id-storage").html(this.resoleSizeUnit(base.Format.fileSize(data["data"] || 0)));
        	/*$("#id-storage").numberAnimate({
            "num": 0
          }).resetData(this.resoleSizeUnit(base.Format.fileSize(data["data"] || 0)));*/
        },
        error: (data) => {
        	var data = {code: 0, message: "获取磁盘使用量该数据成功", data: 216661856788};
        	$("#id-storage").html(this.resoleSizeUnit(base.Format.fileSize(data["data"] || 0)));
        	/*$("#id-storage").numberAnimate({
            "num": 0
          }).resetData(this.resoleSizeUnit(base.Format.fileSize(data["data"] || 0)));*/
        }
      });
    },
    req_webvisit: function(param) {
    	//全球实时web访问情况
    	$.ajax({
        type: 'post',
        //url: base.getAction('api/awareness/webvisit'),
        url: 'http://172.16.100.65/mockjsdata/46/api/awareness/webvisit',
        dataType: 'json',
        data: param,
        success: (data) => {
        	
        },
        error: (data) => {
        	
        }
      });
    },
    req_globalattack: function(param) {
    	//全球实时攻击情况
    	$.ajax({
        type: 'post',
        //url: base.getAction('api/awareness/globalattack'),
        url: 'http://172.16.100.65/mockjsdata/46/api/awareness/globalattack',
        dataType: 'json',
        data: param,
        success: (data) => {
        	
        },
        error: (data) => {
        	
        }
      });
    },
    req_proviceattack: function(param) {
    	//全省攻击情况
    	$.ajax({
        type: 'post',
        //url: base.getAction('api/awareness/proviceattack'),
        url: 'http://172.16.100.65/mockjsdata/46/api/awareness/proviceattack',
        dataType: 'json',
        data: param,
        success: (data) => {
        	
        },
        error: (data) => {
        	
        }
      });
    },
    refres(attackTypeData, sourceIpData) {
    	attackType.refresh({}, attackTypeData);
    	sourceIp.refresh({}, sourceIpData);
    },
	  req_getEarth: function(param) {
	  	if(!this.earth) {
	  		this.earth = new Earth({
			    el: "webgl-content"
			  });
	  		this.earth.animate = () => {
	  			this.earth.render();
			  }
	  		this.earth.rotateCallback = (city) => {
	  			if(!this.titleDom) {
	  				this.titleDom = $("#id-title");
	  			}
	  			if(audio) {
	  				audio.playFromTo("open", 0, 1);
	  				this.titleDom.text(city.name);
		  			this.refres(JSON[city.name]["attackType"], JSON[city.name]["sourceIp"]);
	  			}
	  		}
	  	}
	  	this.req_webvisit(param);//全球实时web访问情况
	  	this.req_globalattack(param);//全球实时攻击情况
	  	this.req_proviceattack(param);//全省攻击情况
	  	this.start();
	  	//setTimeout(function() {
	  		//self.start();
	  	//}, 1000);
	  },
	  start: function() {
	  	var data = {
		    "message":"获取告警地图数据成功",
		    "data":[{
		    	"attackrout":[
		    		{"source":{"latlon":"120.153576,30.287459","name":"杭州","value":"7"},"target":{"latlon":"1.718190,46.710670","name":"法国","value":"7"}},
		    		{"source":{"latlon":"116.405285,39.904989","name":"北京","value":"6"},"target":{"latlon":"135.718933,35.098129","name":"日本","value":"6"}},
		    		{"source":{"latlon":"1.718190,46.710670","name":"法国","value":"6"},"target":{"latlon":"120.153576,30.287459","name":"杭州","value":"6"}},
		    		{"source":{"latlon":"127.850166,36.448151","name":"韩国","value":"6"},"target":{"latlon":"116.405285,39.904989","name":"北京","value":"6"}},
		    		{"source":{"latlon":"1.718190,46.710670","name":"法国","value":"6"},"target":{"latlon":"102.712251,25.040609","name":"昆明","value":"6"}},
		    		{"source":{"latlon":"135.718933,35.098129","name":"日本","value":"5"},"target":{"latlon":"1.718190,46.710670","name":"法国","value":"5"}},
		    		{"source":{"latlon":"116.507676,31.752889","name":"六安","value":"5"},"target":{"latlon":"120.153576,30.287459","name":"杭州","value":"5"}},
		    		{"source":{"latlon":"120.153576,30.287459","name":"杭州","value":"5"},"target":{"latlon":"127.850166,36.448151","name":"韩国","value":"5"}},
		    		{"source":{"latlon":"120.153576,30.287459","name":"杭州","value":"5"},"target":{"latlon":"108.830719,59.453751","name":"俄罗斯","value":"5"}},
		    		{"source":{"latlon":"109.939776,33.868319","name":"商洛","value":"5"},"target":{"latlon":"120.153576,30.287459","name":"杭州","value":"5"}},
		    		{"source":{"latlon":"135.718933,35.098129","name":"日本","value":"5"},"target":{"latlon":"116.405285,39.904989","name":"北京","value":"5"}},
		    		{"source":{"latlon":"1.718190,46.710670","name":"法国","value":"5"},"target":{"latlon":"109.939776,33.868319","name":"商洛","value":"5"}},
		    		{"source":{"latlon":"116.405285,39.904989","name":"北京","value":"5"},"target":{"latlon":"120.153576,30.287459","name":"杭州","value":"5"}},
		    		{"source":{"latlon":"120.153576,30.287459","name":"杭州","value":"5"},"target":{"latlon":"109.939776,33.868319","name":"商洛","value":"5"}},
		    		{"source":{"latlon":"1.718190,46.710670","name":"法国","value":"5"},"target":{"latlon":"127.850166,36.448151","name":"韩国","value":"5"}}]}],"code":0};
			var json = data["data"][0]["attackrout"], rs = [];
			for(var i = 0; i < json.length; i++) {
				var s = json[i]["source"], s_latlog = s["latlon"].split(","), t = json[i]["target"], t_latlog = t["latlon"].split(",");
				rs.push({
					start: {
						lon: s_latlog[0],
			      lat: s_latlog[1],
			      name: s["name"],
			      value: s["value"]
					},
					end: {
						lon: t_latlog[0],
			      lat: t_latlog[1],
			      name: t["name"],
			      value: t["value"]
					}
				});
			}
			page.rs = rs;
			//this.earth.load(rs);
			var fline = [], hots = [], n = 0;
			/*for(var i in LATLON) {
				if(n <= 180) {
					LATLON[i].value = Math.round(Math.random() * 36);
					LATLON[i]["type"] =  Math.round(Math.random() * 4);
					hots.push(LATLON[i]);
					//fline.push(LATLON[i]);
				}
				n++;
			}*/
			for(var i = 0; i < HOTS.length; i++) {
				var value = 0.1;
				if(i == 0) {
					value = 80;
				} else if(i == 3) {
					value = 20;
				} else if(i == 11) {
					value = 60;
				}
				hots.push({
					name: HOTS[i][0],
					lon: HOTS[i][1],
					lat: HOTS[i][2],
					value: value,
					type: 5
				});
			}
			HOTS = [{"lat":-34,"lon":-64},{"lat":-30,"lon":28},{"lat":-10,"lon":-76},{"lat":1,"lon":38},{"lat":6,"lon":-10},{"lat":8,"lon":-66},{"lat":8,"lon":-2},{"lat":8,"lon":1},{"lat":10,"lon":8},{"lat":16,"lon":-90},{"lat":18,"lon":-77},{"lat":18,"lon":-67},{"lat":18,"lon":-66},{"lat":18,"lon":-65},{"lat":20,"lon":-155},{"lat":21,"lon":-158},{"lat":21,"lon":-157},{"lat":22,"lon":114},{"lat":25,"lon":-82},{"lat":25,"lon":-81},{"lat":25,"lon":-80},{"lat":26,"lon":-99},{"lat":26,"lon":-98},{"lat":26,"lon":-82},{"lat":26,"lon":-80},{"lat":27,"lon":-83},{"lat":27,"lon":-82},{"lat":27,"lon":-81},{"lat":27,"lon":-80},{"lat":28,"lon":-100},{"lat":28,"lon":-99},{"lat":28,"lon":-98},{"lat":28,"lon":-97},{"lat":28,"lon":-83},{"lat":28,"lon":-82},{"lat":28,"lon":-81},{"lat":28,"lon":-80},{"lat":29,"lon":-101},{"lat":29,"lon":-100},{"lat":29,"lon":-99},{"lat":29,"lon":-98},{"lat":29,"lon":-97},{"lat":29,"lon":-96},{"lat":29,"lon":-95},{"lat":29,"lon":-91},{"lat":29,"lon":-83},{"lat":29,"lon":-82},{"lat":29,"lon":-81},{"lat":30,"lon":-99},{"lat":30,"lon":-98},{"lat":30,"lon":-97},{"lat":30,"lon":-96},{"lat":30,"lon":-95},{"lat":30,"lon":-94},{"lat":30,"lon":-93},{"lat":30,"lon":-92},{"lat":30,"lon":-91},{"lat":30,"lon":-90},{"lat":30,"lon":-89},{"lat":30,"lon":-88},{"lat":30,"lon":-87},{"lat":30,"lon":-86},{"lat":30,"lon":-84},{"lat":30,"lon":-83},{"lat":30,"lon":-82},{"lat":30,"lon":-81},{"lat":31,"lon":-111},{"lat":31,"lon":-101},{"lat":31,"lon":-100},{"lat":31,"lon":-98},{"lat":31,"lon":-97},{"lat":31,"lon":-96},{"lat":31,"lon":-95},{"lat":31,"lon":-93},{"lat":31,"lon":-92},{"lat":31,"lon":-91},{"lat":31,"lon":-90},{"lat":31,"lon":-89},{"lat":31,"lon":-88},{"lat":31,"lon":-87},{"lat":31,"lon":-86},{"lat":31,"lon":-85},{"lat":31,"lon":-84},{"lat":31,"lon":-83},{"lat":31,"lon":-82},{"lat":31,"lon":-81},{"lat":32,"lon":-111},{"lat":32,"lon":-110},{"lat":32,"lon":-108},{"lat":32,"lon":-107},{"lat":32,"lon":-106},{"lat":32,"lon":-102},{"lat":32,"lon":-100},{"lat":32,"lon":-99},{"lat":32,"lon":-98},{"lat":32,"lon":-97},{"lat":32,"lon":-96},{"lat":32,"lon":-95},{"lat":32,"lon":-94},{"lat":32,"lon":-93},{"lat":32,"lon":-92},{"lat":32,"lon":-91},{"lat":32,"lon":-90},{"lat":32,"lon":-89},{"lat":32,"lon":-88},{"lat":32,"lon":-87},{"lat":32,"lon":-86},{"lat":32,"lon":-85},{"lat":32,"lon":-84},{"lat":32,"lon":-83},{"lat":32,"lon":-82},{"lat":32,"lon":-81},{"lat":33,"lon":-118},{"lat":33,"lon":-117},{"lat":33,"lon":-116},{"lat":33,"lon":-115},{"lat":33,"lon":-112},{"lat":33,"lon":-111},{"lat":33,"lon":-110},{"lat":33,"lon":-108},{"lat":33,"lon":-106},{"lat":33,"lon":-105},{"lat":33,"lon":-104},{"lat":33,"lon":-103},{"lat":33,"lon":-102},{"lat":33,"lon":-100},{"lat":33,"lon":-99},{"lat":33,"lon":-98},{"lat":33,"lon":-97},{"lat":33,"lon":-96},{"lat":33,"lon":-95},{"lat":33,"lon":-94},{"lat":33,"lon":-93},{"lat":33,"lon":-92},{"lat":33,"lon":-91},{"lat":33,"lon":-90},{"lat":33,"lon":-89},{"lat":33,"lon":-88},{"lat":33,"lon":-87},{"lat":33,"lon":-86},{"lat":33,"lon":-85},{"lat":33,"lon":-84},{"lat":33,"lon":-83},{"lat":33,"lon":-82},{"lat":33,"lon":-81},{"lat":33,"lon":-80},{"lat":33,"lon":-79},{"lat":34,"lon":-120},{"lat":34,"lon":-119},{"lat":34,"lon":-118},{"lat":34,"lon":-117},{"lat":34,"lon":-116},{"lat":34,"lon":-115},{"lat":34,"lon":-114},{"lat":34,"lon":-112},{"lat":34,"lon":-110},{"lat":34,"lon":-109},{"lat":34,"lon":-107},{"lat":34,"lon":-102},{"lat":34,"lon":-100},{"lat":34,"lon":-99},{"lat":34,"lon":-98},{"lat":34,"lon":-97},{"lat":34,"lon":-96},{"lat":34,"lon":-94},{"lat":34,"lon":-91},{"lat":34,"lon":-90},{"lat":34,"lon":-89},{"lat":34,"lon":-87},{"lat":34,"lon":-86},{"lat":34,"lon":-85},{"lat":34,"lon":-84},{"lat":34,"lon":-83},{"lat":34,"lon":-82},{"lat":34,"lon":-81},{"lat":34,"lon":-80},{"lat":34,"lon":-79},{"lat":34,"lon":-78},{"lat":35,"lon":-121},{"lat":35,"lon":-120},{"lat":35,"lon":-119},{"lat":35,"lon":-118},{"lat":35,"lon":-117},{"lat":35,"lon":-116},{"lat":35,"lon":-115},{"lat":35,"lon":-114},{"lat":35,"lon":-112},{"lat":35,"lon":-109},{"lat":35,"lon":-108},{"lat":35,"lon":-107},{"lat":35,"lon":-106},{"lat":35,"lon":-104},{"lat":35,"lon":-102},{"lat":35,"lon":-99},{"lat":35,"lon":-98},{"lat":35,"lon":-97},{"lat":35,"lon":-96},{"lat":35,"lon":-95},{"lat":35,"lon":-94},{"lat":35,"lon":-93},{"lat":35,"lon":-92},{"lat":35,"lon":-90},{"lat":35,"lon":-89},{"lat":35,"lon":-88},{"lat":35,"lon":-87},{"lat":35,"lon":-86},{"lat":35,"lon":-85},{"lat":35,"lon":-83},{"lat":35,"lon":-82},{"lat":35,"lon":-81},{"lat":35,"lon":-80},{"lat":35,"lon":-79},{"lat":35,"lon":-78},{"lat":35,"lon":-77},{"lat":36,"lon":-121},{"lat":36,"lon":-120},{"lat":36,"lon":-119},{"lat":36,"lon":-118},{"lat":36,"lon":-117},{"lat":36,"lon":-116},{"lat":36,"lon":-115},{"lat":36,"lon":-109},{"lat":36,"lon":-106},{"lat":36,"lon":-105},{"lat":36,"lon":-101},{"lat":36,"lon":-100},{"lat":36,"lon":-99},{"lat":36,"lon":-98},{"lat":36,"lon":-97},{"lat":36,"lon":-96},{"lat":36,"lon":-95},{"lat":36,"lon":-94},{"lat":36,"lon":-91},{"lat":36,"lon":-90},{"lat":36,"lon":-89},{"lat":36,"lon":-88},{"lat":36,"lon":-87},{"lat":36,"lon":-86},{"lat":36,"lon":-85},{"lat":36,"lon":-84},{"lat":36,"lon":-83},{"lat":36,"lon":-82},{"lat":36,"lon":-81},{"lat":36,"lon":-80},{"lat":36,"lon":-79},{"lat":36,"lon":-78},{"lat":36,"lon":-77},{"lat":36,"lon":-76},{"lat":37,"lon":-122},{"lat":37,"lon":-121},{"lat":37,"lon":-120},{"lat":37,"lon":-119},{"lat":37,"lon":-118},{"lat":37,"lon":-116},{"lat":37,"lon":-114},{"lat":37,"lon":-112},{"lat":37,"lon":-109},{"lat":37,"lon":-108},{"lat":37,"lon":-107},{"lat":37,"lon":-106},{"lat":37,"lon":-105},{"lat":37,"lon":-104},{"lat":37,"lon":-102},{"lat":37,"lon":-98},{"lat":37,"lon":-97},{"lat":37,"lon":-96},{"lat":37,"lon":-95},{"lat":37,"lon":-94},{"lat":37,"lon":-93},{"lat":37,"lon":-91},{"lat":37,"lon":-90},{"lat":37,"lon":-89},{"lat":37,"lon":-88},{"lat":37,"lon":-87},{"lat":37,"lon":-86},{"lat":37,"lon":-84},{"lat":37,"lon":-83},{"lat":37,"lon":-82},{"lat":37,"lon":-81},{"lat":37,"lon":-80},{"lat":37,"lon":-79},{"lat":37,"lon":-78},{"lat":37,"lon":-77},{"lat":37,"lon":-76},{"lat":38,"lon":-123},{"lat":38,"lon":-122},{"lat":38,"lon":-121},{"lat":38,"lon":-120},{"lat":38,"lon":-119},{"lat":38,"lon":-118},{"lat":38,"lon":-113},{"lat":38,"lon":-108},{"lat":38,"lon":-106},{"lat":38,"lon":-105},{"lat":38,"lon":-104},{"lat":38,"lon":-103},{"lat":38,"lon":-102},{"lat":38,"lon":-100},{"lat":38,"lon":-98},{"lat":38,"lon":-97},{"lat":38,"lon":-96},{"lat":38,"lon":-95},{"lat":38,"lon":-94},{"lat":38,"lon":-93},{"lat":38,"lon":-91},{"lat":38,"lon":-90},{"lat":38,"lon":-89},{"lat":38,"lon":-88},{"lat":38,"lon":-87},{"lat":38,"lon":-86},{"lat":38,"lon":-85},{"lat":38,"lon":-84},{"lat":38,"lon":-83},{"lat":38,"lon":-82},{"lat":38,"lon":-79},{"lat":38,"lon":-78},{"lat":38,"lon":-77},{"lat":38,"lon":-76},{"lat":38,"lon":-75},{"lat":39,"lon":-124},{"lat":39,"lon":-123},{"lat":39,"lon":-122},{"lat":39,"lon":-121},{"lat":39,"lon":-120},{"lat":39,"lon":-117},{"lat":39,"lon":-116},{"lat":39,"lon":-112},{"lat":39,"lon":-109},{"lat":39,"lon":-108},{"lat":39,"lon":-107},{"lat":39,"lon":-106},{"lat":39,"lon":-105},{"lat":39,"lon":-102},{"lat":39,"lon":-101},{"lat":39,"lon":-99},{"lat":39,"lon":-97},{"lat":39,"lon":-96},{"lat":39,"lon":-95},{"lat":39,"lon":-94},{"lat":39,"lon":-93},{"lat":39,"lon":-92},{"lat":39,"lon":-91},{"lat":39,"lon":-90},{"lat":39,"lon":-89},{"lat":39,"lon":-88},{"lat":39,"lon":-87},{"lat":39,"lon":-86},{"lat":39,"lon":-85},{"lat":39,"lon":-84},{"lat":39,"lon":-83},{"lat":39,"lon":-82},{"lat":39,"lon":-81},{"lat":39,"lon":-80},{"lat":39,"lon":-79},{"lat":39,"lon":-78},{"lat":39,"lon":-77},{"lat":39,"lon":-76},{"lat":39,"lon":-75},{"lat":39,"lon":-74},{"lat":39,"lon":35},{"lat":40,"lon":-124},{"lat":40,"lon":-123},{"lat":40,"lon":-122},{"lat":40,"lon":-121},{"lat":40,"lon":-120},{"lat":40,"lon":-119},{"lat":40,"lon":-112},{"lat":40,"lon":-110},{"lat":40,"lon":-109},{"lat":40,"lon":-107},{"lat":40,"lon":-106},{"lat":40,"lon":-105},{"lat":40,"lon":-103},{"lat":40,"lon":-98},{"lat":40,"lon":-97},{"lat":40,"lon":-95},{"lat":40,"lon":-94},{"lat":40,"lon":-93},{"lat":40,"lon":-91},{"lat":40,"lon":-90},{"lat":40,"lon":-89},{"lat":40,"lon":-88},{"lat":40,"lon":-87},{"lat":40,"lon":-86},{"lat":40,"lon":-85},{"lat":40,"lon":-84},{"lat":40,"lon":-83},{"lat":40,"lon":-82},{"lat":40,"lon":-81},{"lat":40,"lon":-80},{"lat":40,"lon":-79},{"lat":40,"lon":-78},{"lat":40,"lon":-77},{"lat":40,"lon":-76},{"lat":40,"lon":-75},{"lat":40,"lon":-74},{"lat":41,"lon":-124},{"lat":41,"lon":-123},{"lat":41,"lon":-122},{"lat":41,"lon":-117},{"lat":41,"lon":-112},{"lat":41,"lon":-111},{"lat":41,"lon":-106},{"lat":41,"lon":-105},{"lat":41,"lon":-98},{"lat":41,"lon":-97},{"lat":41,"lon":-96},{"lat":41,"lon":-95},{"lat":41,"lon":-94},{"lat":41,"lon":-93},{"lat":41,"lon":-92},{"lat":41,"lon":-91},{"lat":41,"lon":-90},{"lat":41,"lon":-89},{"lat":41,"lon":-88},{"lat":41,"lon":-87},{"lat":41,"lon":-86},{"lat":41,"lon":-85},{"lat":41,"lon":-84},{"lat":41,"lon":-83},{"lat":41,"lon":-82},{"lat":41,"lon":-81},{"lat":41,"lon":-80},{"lat":41,"lon":-79},{"lat":41,"lon":-78},{"lat":41,"lon":-77},{"lat":41,"lon":-76},{"lat":41,"lon":-75},{"lat":41,"lon":-74},{"lat":41,"lon":-73},{"lat":41,"lon":-72},{"lat":41,"lon":-71},{"lat":41,"lon":-70},{"lat":42,"lon":-124},{"lat":42,"lon":-123},{"lat":42,"lon":-122},{"lat":42,"lon":-119},{"lat":42,"lon":-114},{"lat":42,"lon":-112},{"lat":42,"lon":-111},{"lat":42,"lon":-109},{"lat":42,"lon":-104},{"lat":42,"lon":-98},{"lat":42,"lon":-97},{"lat":42,"lon":-96},{"lat":42,"lon":-95},{"lat":42,"lon":-94},{"lat":42,"lon":-93},{"lat":42,"lon":-92},{"lat":42,"lon":-91},{"lat":42,"lon":-90},{"lat":42,"lon":-89},{"lat":42,"lon":-88},{"lat":42,"lon":-87},{"lat":42,"lon":-86},{"lat":42,"lon":-85},{"lat":42,"lon":-84},{"lat":42,"lon":-83},{"lat":42,"lon":-82},{"lat":42,"lon":-81},{"lat":42,"lon":-80},{"lat":42,"lon":-79},{"lat":42,"lon":-78},{"lat":42,"lon":-77},{"lat":42,"lon":-76},{"lat":42,"lon":-75},{"lat":42,"lon":-74},{"lat":42,"lon":-73},{"lat":42,"lon":-72},{"lat":42,"lon":-71},{"lat":42,"lon":-70},{"lat":43,"lon":-124},{"lat":43,"lon":-123},{"lat":43,"lon":-122},{"lat":43,"lon":-121},{"lat":43,"lon":-117},{"lat":43,"lon":-116},{"lat":43,"lon":-115},{"lat":43,"lon":-114},{"lat":43,"lon":-112},{"lat":43,"lon":-111},{"lat":43,"lon":-106},{"lat":43,"lon":-105},{"lat":43,"lon":-100},{"lat":43,"lon":-97},{"lat":43,"lon":-96},{"lat":43,"lon":-95},{"lat":43,"lon":-94},{"lat":43,"lon":-93},{"lat":43,"lon":-92},{"lat":43,"lon":-91},{"lat":43,"lon":-90},{"lat":43,"lon":-89},{"lat":43,"lon":-88},{"lat":43,"lon":-86},{"lat":43,"lon":-85},{"lat":43,"lon":-84},{"lat":43,"lon":-83},{"lat":43,"lon":-82},{"lat":43,"lon":-81},{"lat":43,"lon":-79},{"lat":43,"lon":-78},{"lat":43,"lon":-77},{"lat":43,"lon":-76},{"lat":43,"lon":-75},{"lat":43,"lon":-74},{"lat":43,"lon":-73},{"lat":43,"lon":-72},{"lat":43,"lon":-71},{"lat":43,"lon":13},{"lat":44,"lon":-124},{"lat":44,"lon":-123},{"lat":44,"lon":-122},{"lat":44,"lon":-121},{"lat":44,"lon":-116},{"lat":44,"lon":-111},{"lat":44,"lon":-107},{"lat":44,"lon":-104},{"lat":44,"lon":-103},{"lat":44,"lon":-100},{"lat":44,"lon":-98},{"lat":44,"lon":-97},{"lat":44,"lon":-94},{"lat":44,"lon":-93},{"lat":44,"lon":-92},{"lat":44,"lon":-91},{"lat":44,"lon":-89},{"lat":44,"lon":-88},{"lat":44,"lon":-86},{"lat":44,"lon":-85},{"lat":44,"lon":-84},{"lat":44,"lon":-83},{"lat":44,"lon":-76},{"lat":44,"lon":-73},{"lat":44,"lon":-72},{"lat":44,"lon":-71},{"lat":44,"lon":-70},{"lat":45,"lon":-124},{"lat":45,"lon":-123},{"lat":45,"lon":-122},{"lat":45,"lon":-121},{"lat":45,"lon":-120},{"lat":45,"lon":-118},{"lat":45,"lon":-111},{"lat":45,"lon":-110},{"lat":45,"lon":-109},{"lat":45,"lon":-104},{"lat":45,"lon":-101},{"lat":45,"lon":-99},{"lat":45,"lon":-98},{"lat":45,"lon":-97},{"lat":45,"lon":-96},{"lat":45,"lon":-95},{"lat":45,"lon":-94},{"lat":45,"lon":-93},{"lat":45,"lon":-92},{"lat":45,"lon":-91},{"lat":45,"lon":-90},{"lat":45,"lon":-89},{"lat":45,"lon":-88},{"lat":45,"lon":-87},{"lat":45,"lon":-86},{"lat":45,"lon":-85},{"lat":45,"lon":-84},{"lat":45,"lon":-83},{"lat":45,"lon":-74},{"lat":45,"lon":-69},{"lat":45,"lon":-68},{"lat":46,"lon":-124},{"lat":46,"lon":-123},{"lat":46,"lon":-122},{"lat":46,"lon":-121},{"lat":46,"lon":-119},{"lat":46,"lon":-118},{"lat":46,"lon":-117},{"lat":46,"lon":-116},{"lat":46,"lon":-113},{"lat":46,"lon":-111},{"lat":46,"lon":-109},{"lat":46,"lon":-107},{"lat":46,"lon":-106},{"lat":46,"lon":-97},{"lat":46,"lon":-96},{"lat":46,"lon":-95},{"lat":46,"lon":-94},{"lat":46,"lon":-93},{"lat":46,"lon":-87},{"lat":47,"lon":-124},{"lat":47,"lon":-123},{"lat":47,"lon":-122},{"lat":47,"lon":-121},{"lat":47,"lon":-120},{"lat":47,"lon":-119},{"lat":47,"lon":-118},{"lat":47,"lon":-117},{"lat":47,"lon":-114},{"lat":47,"lon":-112},{"lat":47,"lon":-105},{"lat":47,"lon":-103},{"lat":47,"lon":-101},{"lat":47,"lon":-98},{"lat":47,"lon":-97},{"lat":47,"lon":-96},{"lat":47,"lon":-94},{"lat":47,"lon":-92},{"lat":47,"lon":-87},{"lat":47,"lon":-68},{"lat":48,"lon":-125},{"lat":48,"lon":-123},{"lat":48,"lon":-122},{"lat":48,"lon":-121},{"lat":48,"lon":-120},{"lat":48,"lon":-119},{"lat":48,"lon":-118},{"lat":48,"lon":-117},{"lat":48,"lon":-116},{"lat":48,"lon":-114},{"lat":48,"lon":-112},{"lat":48,"lon":-111},{"lat":48,"lon":-104},{"lat":48,"lon":-102},{"lat":48,"lon":-101},{"lat":48,"lon":-97},{"lat":48,"lon":-96},{"lat":48,"lon":-93},{"lat":49,"lon":-123},{"lat":49,"lon":-122},{"lat":49,"lon":-118},{"lat":49,"lon":-116},{"lat":49,"lon":-114},{"lat":49,"lon":-112},{"lat":49,"lon":-110},{"lat":51,"lon":-114},{"lat":53,"lon":-8},{"lat":54,"lon":-2},{"lat":61,"lon":-150},{"lat":62,"lon":-149}];
			for(var i = 0; i < HOTS.length; i++) {
				var value = 0.1;
				if(i == 10) {
					value = 30;
				} else if(i == 20) {
					value = 20;
				} else if(i == 30) {
					value = 20;
				} else if(i == 100) {
					value = 20;
				} else if(i == 150) {
					value = 80;
				} else if(i == 250) {
					value = 65;
				} else if(i == 300) {
					value = 40;
				} else if(i == 350) {
					value = 35;
				} else if(i == 400) {
					value = 5;
				} else if(i == 450) {
					value = 80;
				} else if(i == 500) {
					value = 50;
				} else if(i == 550) {
					value = 80;
				} else if(i == 600) {
					value = 36;
				}
				hots.push({
					//name: HOTS[i][0],
					lon: HOTS[i].lon,
					lat: HOTS[i].lat,
					value: value,
					type: 5
				});
			}
			/*for(var i = 0; i < hots.length / 6; i++) {
				var num = Math.round(Math.random() * hots.length);
				var type = Math.round(Math.random() * 4);
				if(hots[num]) {
					fline.push({
						start: {
							lon: hots[i]["lon"],
				      lat: hots[i]["lat"],
				      name: hots[i]["name"],
				      value: hots[i]["value"],
				      type: hots[i]["type"]
						},
						end: {
							lon: hots[num]["lon"],
				      lat: hots[num]["lat"],
				      name: hots[num]["name"],
				      value: hots[num]["value"],
				      type: hots[i]["type"]
						},
						type: type
					});
				}
			}*/
			page.earth.loadHotspot(hots);
			//page.earth.loadFlightLine(fline, 1);
	  	
	  	/*var data = {
  	    "pageId": "logsaas",
  	    "code":0,
  	    "message":"成功",
  	    "data":{
	        "areaName":"中国",
	        "geoCoordMap":{"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]},
	        "hotdata":[{"value":3913666,"name":"局域网"},{"value":3515703,"name":"浙江"},{"value":936317,"name":"北京"},{"value":347229,"name":"湖南"},{"value":190853,"name":"广东"},{"value":160099,"name":"未知"},{"value":138566,"name":"上海"},{"value":115698,"name":"辽宁"},{"value":111751,"name":"江苏"},{"value":85858,"name":"贵州"},{"value":82506,"name":"海南"},{"value":78494,"name":"山西"},{"value":77275,"name":"湖北"},{"value":58082,"name":"河北"},{"value":53456,"name":"香港"},{"value":47856,"name":"天津"},{"value":47659,"name":"加利福尼亚州"},{"value":47319,"name":"弗吉尼亚州"},{"value":47081,"name":"河南"},{"value":35968,"name":"福建"},{"value":34014,"name":"山东"},{"value":26570,"name":"四川"},{"value":22262,"name":"江西"},{"value":21924,"name":"安徽"},{"value":15966,"name":"内蒙古"},{"value":11720,"name":"台湾"},{"value":7051,"name":"黑龙江"},{"value":5356,"name":"华盛顿州"},{"value":4378,"name":"云南"},{"value":3873,"name":"陕西"},{"value":3797,"name":"甘肃"},{"value":3047,"name":"广西"},{"value":2938,"name":"重庆"},{"value":2601,"name":"密苏里州"},{"value":2259,"name":"吉林"},{"value":1522,"name":"亚利桑那州"},{"value":1473,"name":"密歇根州"},{"value":1424,"name":"巴伐利亚州"},{"value":1227,"name":"乔治亚州"},{"value":1160,"name":"德克萨斯州"},{"value":1003,"name":"新疆"},{"value":896,"name":"东京都"},{"value":455,"name":"新泽西州"},{"value":361,"name":"安大略省"},{"value":250,"name":"青海"},{"value":216,"name":"佛罗里达州"},{"value":204,"name":"宁夏"},{"value":202,"name":"圣彼得堡"},{"value":198,"name":"萨克森自由州"},{"value":192,"name":"苏黎世州"},{"value":190,"name":"都柏林郡"},{"value":188,"name":"北卡罗来纳州"},{"value":182,"name":"法兰西岛大区"},{"value":173,"name":"纽约州"},{"value":121,"name":"北部－加来海峡大区"},{"value":112,"name":"魁北克省"},{"value":107,"name":"基辅州"},{"value":91,"name":"北荷兰省"},{"value":88,"name":"俄勒冈州"},{"value":77,"name":"莫斯科"},{"value":67,"name":"不列颠哥伦比亚省"},{"value":64,"name":"伦敦"},{"value":58,"name":"西藏"},{"value":53,"name":"布加勒斯特"},{"value":44,"name":"伊利诺伊州"},{"value":38,"name":"黑森州"},{"value":29,"name":"堪萨斯州"},{"value":29,"name":"阿尔萨斯大区"},{"value":26,"name":"瓦尔米亚－马祖里省"},{"value":23,"name":"俄亥俄州"},{"value":21,"name":"南荷兰省"},{"value":20,"name":"印第安纳州"},{"value":19,"name":"犹他州"},{"value":18,"name":"澳门"},{"value":17,"name":"弗莱福兰省"},{"value":16,"name":"马萨诸塞州"},{"value":15,"name":"马德里自治区"},{"value":11,"name":"爱荷华州"},{"value":9,"name":"新西伯利亚州"},{"value":8,"name":"北海道"},{"value":8,"name":"宾夕法尼亚州"},{"value":7,"name":"西米德兰兹郡"},{"value":6,"name":"威斯康星州"},{"value":6,"name":"肯塔基州"},{"value":6,"name":"胡志明市"},{"value":5,"name":"内华达州"},{"value":5,"name":"内布拉斯加州"},{"value":5,"name":"北莱茵－威斯特法伦州"},{"value":3,"name":"巴亚蒙"},{"value":3,"name":"曼尼托巴省"},{"value":3,"name":"曼谷"},{"value":3,"name":"河内"},{"value":3,"name":"爱达荷州"},{"value":3,"name":"缅因州"},{"value":3,"name":"阿拉斯加州"},{"value":3,"name":"首尔"},{"value":2,"name":"佩斯州"},{"value":2,"name":"加利西亚自治区"},{"value":2,"name":"斯德哥尔摩省"},{"value":2,"name":"明尼苏达州"},{"value":2,"name":"格洛斯特郡"},{"value":2,"name":"石川县"},{"value":1,"name":"伯克郡"},{"value":1,"name":"华盛顿"},{"value":1,"name":"夏威夷州"},{"value":1,"name":"大阪府"},{"value":1,"name":"宫城县"},{"value":1,"name":"富山县"},{"value":1,"name":"新南威尔士州"},{"value":1,"name":"爱媛县"},{"value":1,"name":"瓦隆大区"},{"value":1,"name":"科罗拉多州"},{"value":1,"name":"索非亚"},{"value":1,"name":"维多利亚州"},{"value":1,"name":"萨格勒布"},{"value":1,"name":"西约克郡"},{"value":1,"name":"豪登省"},{"value":1,"name":"马哈拉施特拉邦"},{"value":1,"name":"马里兰州"}],
	        "cityValue":[{"name":"海门","value":9},{"name":"鄂尔多斯","value":12},{"name":"招远","value":12},{"name":"舟山","value":12},{"name":"齐齐哈尔","value":14},{"name":"盐城","value":15},{"name":"赤峰","value":16},{"name":"青岛","value":18},{"name":"乳山","value":18},{"name":"金昌","value":19},{"name":"泉州","value":21},{"name":"莱西","value":21},{"name":"日照","value":21},{"name":"胶南","value":22},{"name":"南通","value":23},{"name":"拉萨","value":24},{"name":"云浮","value":24},{"name":"梅州","value":25},{"name":"文登","value":25},{"name":"上海","value":25},{"name":"攀枝花","value":25},{"name":"威海","value":25},{"name":"承德","value":25},{"name":"厦门","value":26},{"name":"汕尾","value":26},{"name":"潮州","value":26},{"name":"丹东","value":27},{"name":"太仓","value":27},{"name":"曲靖","value":27},{"name":"烟台","value":28},{"name":"福州","value":29},{"name":"瓦房店","value":30},{"name":"即墨","value":30},{"name":"抚顺","value":31},{"name":"玉溪","value":31},{"name":"张家口","value":31},{"name":"阳泉","value":31},{"name":"莱州","value":32},{"name":"湖州","value":32},{"name":"汕头","value":32},{"name":"昆山","value":33},{"name":"宁波","value":33},{"name":"湛江","value":33},{"name":"揭阳","value":34},{"name":"荣成","value":34},{"name":"连云港","value":35},{"name":"葫芦岛","value":35},{"name":"常熟","value":36},{"name":"东莞","value":36},{"name":"河源","value":36},{"name":"淮安","value":36},{"name":"泰州","value":36},{"name":"南宁","value":37},{"name":"营口","value":37},{"name":"惠州","value":37},{"name":"江阴","value":37},{"name":"蓬莱","value":37},{"name":"韶关","value":38},{"name":"嘉峪关","value":38},{"name":"广州","value":38},{"name":"延安","value":38},{"name":"太原","value":39},{"name":"清远","value":39},{"name":"中山","value":39},{"name":"昆明","value":39},{"name":"寿光","value":40},{"name":"盘锦","value":40},{"name":"长治","value":41},{"name":"深圳","value":41},{"name":"珠海","value":42},{"name":"宿迁","value":43},{"name":"咸阳","value":43},{"name":"铜川","value":44},{"name":"平度","value":44},{"name":"佛山","value":44},{"name":"海口","value":44},{"name":"江门","value":45},{"name":"章丘","value":45},{"name":"肇庆","value":46},{"name":"大连","value":47},{"name":"临汾","value":47},{"name":"吴江","value":47},{"name":"石嘴山","value":49},{"name":"沈阳","value":50},{"name":"苏州","value":50},{"name":"茂名","value":50},{"name":"嘉兴","value":51},{"name":"长春","value":51},{"name":"胶州","value":52},{"name":"银川","value":52},{"name":"张家港","value":52},{"name":"三门峡","value":53},{"name":"锦州","value":54},{"name":"南昌","value":54},{"name":"柳州","value":54},{"name":"三亚","value":54},{"name":"自贡","value":56},{"name":"吉林","value":56},{"name":"阳江","value":57},{"name":"泸州","value":57},{"name":"西宁","value":57},{"name":"宜宾","value":58},{"name":"呼和浩特","value":58},{"name":"成都","value":58},{"name":"大同","value":58},{"name":"镇江","value":59},{"name":"桂林","value":59},{"name":"张家界","value":59},{"name":"宜兴","value":59},{"name":"北海","value":60},{"name":"西安","value":61},{"name":"金坛","value":62},{"name":"东营","value":62},{"name":"牡丹江","value":63},{"name":"遵义","value":63},{"name":"绍兴","value":63},{"name":"扬州","value":64},{"name":"常州","value":64},{"name":"潍坊","value":65},{"name":"重庆","value":66},{"name":"台州","value":67},{"name":"南京","value":67},{"name":"滨州","value":70},{"name":"贵阳","value":71},{"name":"无锡","value":71},{"name":"本溪","value":71},{"name":"克拉玛依","value":72},{"name":"渭南","value":72},{"name":"马鞍山","value":72},{"name":"宝鸡","value":72},{"name":"焦作","value":75},{"name":"句容","value":75},{"name":"北京","value":79},{"name":"徐州","value":79},{"name":"衡水","value":80},{"name":"包头","value":80},{"name":"绵阳","value":80},{"name":"乌鲁木齐","value":84},{"name":"枣庄","value":84},{"name":"杭州","value":84},{"name":"淄博","value":85},{"name":"鞍山","value":86},{"name":"溧阳","value":86},{"name":"库尔勒","value":86},{"name":"安阳","value":90},{"name":"开封","value":90},{"name":"济南","value":92},{"name":"德阳","value":93},{"name":"温州","value":95},{"name":"九江","value":96},{"name":"邯郸","value":98},{"name":"临安","value":99},{"name":"兰州","value":99},{"name":"沧州","value":100},{"name":"临沂","value":103},{"name":"南充","value":104},{"name":"天津","value":105},{"name":"富阳","value":106},{"name":"泰安","value":112},{"name":"诸暨","value":112},{"name":"郑州","value":113},{"name":"哈尔滨","value":114},{"name":"聊城","value":116},{"name":"芜湖","value":117},{"name":"唐山","value":119},{"name":"平顶山","value":119},{"name":"邢台","value":119},{"name":"德州","value":120},{"name":"济宁","value":120},{"name":"荆州","value":127},{"name":"宜昌","value":130},{"name":"义乌","value":132},{"name":"丽水","value":133},{"name":"洛阳","value":134},{"name":"秦皇岛","value":136},{"name":"株洲","value":143},{"name":"石家庄","value":147},{"name":"莱芜","value":148},{"name":"常德","value":152},{"name":"保定","value":153},{"name":"湘潭","value":154},{"name":"金华","value":157},{"name":"岳阳","value":169},{"name":"长沙","value":175},{"name":"衢州","value":177},{"name":"廊坊","value":193},{"name":"菏泽","value":194},{"name":"合肥","value":229},{"name":"武汉","value":273},{"name":"大庆","value":279}] ,
	        "visualMap": {"x": "left", "y": "bottom", "splitList": [{"end": 0,"label": "无访问记录","color":"#95a3cb"}, {"start": 0, "end": "1000000","label": "0-100w","color":"#60a9c8"}, {"start": "1000000", "end": "2000000","label": "100w-200w","color":"#0e90ff"}, {"start": "2000000", "end": "3000000","label": "200w-300w","color":"#3d56a7"}, {"start": "3000000", "label": ">300w","color":"#1c327a"}], "color": ["#95a3cb"], "textStyle":{"color":"white"}}
  	    }
	  	}*/
	  	
	  	var data = {
  	    "code": 0,
  	    "message": "成功",
  	    "pageId": "logsaas",
  	    "data": {
  	      "geoCoordMap": {"亚洲":[62.408,52.2606],"非洲":[62.4161,37.0323],"欧洲":[63.5936,18.9022],"北美洲":[141.98279,51.0679],"南美洲":[143.1046,32.5466],"大洋洲":[142.7064,20.4609],"上海":[121.4648,31.2891],"东莞":[113.8953,22.901],"东营":[118.7073,37.5513],"中山":[113.4229,22.478],"临汾":[111.4783,36.1615],"临沂":[118.3118,35.2936],"丹东":[124.541,40.4242],"丽水":[119.5642,28.1854],"乌鲁木齐":[87.9236,43.5883],"佛山":[112.8955,23.1097],"保定":[115.0488,39.0948],"兰州":[103.5901,36.3043],"包头":[110.3467,41.4899],"北京":[116.4551,40.2539],"北海":[109.314,21.6211],"南京":[118.8062,31.9208],"南宁":[108.479,23.1152],"南昌":[116.0046,28.6633],"南通":[121.1023,32.1625],"厦门":[118.1689,24.6478],"台州":[121.1353,28.6688],"合肥":[117.29,32.0581],"呼和浩特":[111.4124,40.4901],"咸阳":[108.4131,34.8706],"哈尔滨":[127.9688,45.368],"唐山":[118.4766,39.6826],"嘉兴":[120.9155,30.6354],"大同":[113.7854,39.8035],"大连":[122.2229,39.4409],"天津":[117.4219,39.4189],"太原":[112.3352,37.9413],"威海":[121.9482,37.1393],"宁波":[121.5967,29.6466],"宝鸡":[107.1826,34.3433],"宿迁":[118.5535,33.7775],"常州":[119.4543,31.5582],"广州":[113.5107,23.2196],"廊坊":[116.521,39.0509],"延安":[109.1052,36.4252],"张家口":[115.1477,40.8527],"徐州":[117.5208,34.3268],"德州":[116.6858,37.2107],"惠州":[114.6204,23.1647],"成都":[103.9526,30.7617],"扬州":[119.4653,32.8162],"承德":[117.5757,41.4075],"拉萨":[91.1865,30.1465],"无锡":[120.3442,31.5527],"日照":[119.2786,35.5023],"昆明":[102.9199,25.4663],"杭州":[119.5313,29.8773],"枣庄":[117.323,34.8926],"柳州":[109.3799,24.9774],"株洲":[113.5327,27.0319],"武汉":[114.3896,30.6628],"汕头":[117.1692,23.3405],"江门":[112.6318,22.1484],"沈阳":[123.1238,42.1216],"沧州":[116.8286,38.2104],"河源":[114.917,23.9722],"泉州":[118.3228,25.1147],"泰安":[117.0264,36.0516],"泰州":[120.0586,32.5525],"济南":[117.1582,36.8701],"济宁":[116.8286,35.3375],"海口":[110.3893,19.8516],"淄博":[118.0371,36.6064],"淮安":[118.927,33.4039],"深圳":[114.5435,22.5439],"清远":[112.9175,24.3292],"温州":[120.498,27.8119],"渭南":[109.7864,35.0299],"湖州":[119.8608,30.7782],"湘潭":[112.5439,27.7075],"滨州":[117.8174,37.4963],"潍坊":[119.0918,36.524],"烟台":[120.7397,37.5128],"玉溪":[101.9312,23.8898],"珠海":[113.7305,22.1155],"盐城":[120.2234,33.5577],"盘锦":[121.9482,41.0449],"石家庄":[114.4995,38.1006],"福州":[119.4543,25.9222],"秦皇岛":[119.2126,40.0232],"绍兴":[120.564,29.7565],"聊城":[115.9167,36.4032],"肇庆":[112.1265,23.5822],"舟山":[122.2559,30.2234],"苏州":[120.6519,31.3989],"莱芜":[117.6526,36.2714],"菏泽":[115.6201,35.2057],"营口":[122.4316,40.4297],"葫芦岛":[120.1575,40.578],"衡水":[115.8838,37.7161],"衢州":[118.6853,28.8666],"西宁":[101.4038,36.8207],"西安":[109.1162,34.2004],"贵阳":[106.6992,26.7682],"连云港":[119.1248,34.552],"邢台":[114.8071,37.2821],"邯郸":[114.4775,36.535],"郑州":[113.4668,34.6234],"鄂尔多斯":[108.9734,39.2487],"重庆":[107.7539,30.1904],"金华":[120.0037,29.1028],"铜川":[109.0393,35.1947],"银川":[106.3586,38.1775],"镇江":[119.4763,31.9702],"长春":[125.8154,44.2584],"长沙":[113.0823,28.2568],"长治":[112.8625,36.4746],"阳泉":[113.4778,38.0951],"青岛":[120.4651,36.3373],"韶关":[113.7964,24.7028]},
  	      "attack":[[{"name":"北京"},{"name":"浙江","value":17813},{"province":"北京"}],[{"name":"杭州"},{"name":"浙江","value":17312},{"province":"浙江"}],[{"name":"金华"},{"name":"浙江","value":7827},{"province":"浙江"}],[{"name":"湛江"},{"name":"浙江","value":7280},{"province":"广东"}],[{"name":"未知"},{"name":"浙江","value":2377}],[{"name":"上海"},{"name":"浙江","value":1503},{"province":"上海"}],[{"name":"池州"},{"name":"浙江","value":1492},{"province":"安徽"}],[{"name":"郑州"},{"name":"浙江","value":1489},{"province":"河南"}],[{"name":"无锡"},{"name":"浙江","value":1447},{"province":"江苏"}],[{"name":"宿迁"},{"name":"浙江","value":1379},{"province":"江苏"}],[{"name":"局域网"},{"name":"浙江","value":74218}],[{"name":"本机地址"},{"name":"浙江","value":454}],[{"name":"美国"},{"name":"浙江","value":333}],[{"name":"越南"},{"name":"浙江","value":38}],[{"name":"菲律宾"},{"name":"浙江","value":6}],[{"name":"俄罗斯"},{"name":"浙江","value":3}],[{"name":"葡萄牙"},{"name":"浙江","value":2}],[{"name":"德国"},{"name":"浙江","value":1}],[{"name":"法国"},{"name":"浙江","value":1}]],
  	      "visit":[[{"name":"浙江"},{"name":"浙江","value":3120924}],[{"name":"局域网"},{"name":"浙江","value":2328855}],[{"name":"北京"},{"name":"浙江","value":887942},{"province":"北京"}],[{"name":"湖南"},{"name":"浙江","value":309447}],[{"name":"广东"},{"name":"浙江","value":182671}],[{"name":"未知"},{"name":"浙江","value":152151}],[{"name":"上海"},{"name":"浙江","value":128653},{"province":"上海"}],[{"name":"辽宁"},{"name":"浙江","value":109395}],[{"name":"江苏"},{"name":"浙江","value":106131}],[{"name":"贵州"},{"name":"浙江","value":81117}],[{"name":"局域网"},{"name":"浙江","value":2328855}],[{"name":"美国"},{"name":"浙江","value":132185}],[{"name":"本机地址"},{"name":"浙江","value":22139}],[{"name":"法国"},{"name":"浙江","value":7672}],[{"name":"德国"},{"name":"浙江","value":3280}],[{"name":"库拉索"},{"name":"浙江","value":1617}],[{"name":"俄罗斯"},{"name":"浙江","value":1514}],[{"name":"欧盟"},{"name":"浙江","value":974}],[{"name":"日本"},{"name":"浙江","value":956}]]
  	    }
  	  }
	  	var fline = [];
	  	for(var i = 0; i < data["data"]["attack"].length; i++) {
	  		var start = data["data"]["attack"][i][0], end = data["data"]["attack"][i][1];
	  		if(LATLONALL[start["name"]] && LATLONALL[end["name"]]) {
	  			fline.push({
						start: {
							lon: LATLONALL[start["name"]]["lon"],
				      lat: LATLONALL[start["name"]]["lat"],
				      name: start["name"],
				      value: 0,
				      type: 0
						},
						end: {
							lon: LATLONALL[end["name"]]["lon"],
				      lat: LATLONALL[end["name"]]["lat"],
				      name: end["name"],
				      value: end["value"],
				      type: 0
						},
						type: 4,
						lineType: 1
					});
	  		}
	  	}
	  	for(var i = 0; i < data["data"]["visit"].length; i++) {
	  		var start = data["data"]["visit"][i][0], end = data["data"]["visit"][i][1];
	  		if(LATLONALL[start["name"]] && LATLONALL[end["name"]]) {
	  			fline.push({
						start: {
							lon: LATLONALL[start["name"]]["lon"],
				      lat: LATLONALL[start["name"]]["lat"],
				      name: start["name"],
				      value: 0,
				      type: 0
						},
						end: {
							lon: LATLONALL[end["name"]]["lon"],
				      lat: LATLONALL[end["name"]]["lat"],
				      name: end["name"],
				      value: end["value"],
				      type: 0
						},
						type: 1,
						lineType: 0
					});
	  		}
	  	}
	  	page.earth.loadFlightLine(fline, 1);
	  	this.earth.load();
	  }
	}
	page.init();
//})(window);
