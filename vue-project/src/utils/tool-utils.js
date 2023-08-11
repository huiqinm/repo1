import * as xlsx from "xlsx";

/**
 * 深拷贝
 * @param {obj/array}
 */
export function deepClone(obj) {
  //可传入对象 或 数组
  //  判断是否为 null 或 undefined 直接返回该值即可,
  if (obj === null || !obj) return obj;
  // 判断 是要深拷贝 对象 还是 数组
  if (Object.prototype.toString.call(obj) === "[object Object]") {
    //对象字符串化的值会为 "[object Object]"
    let target = {}; //生成新的一个对象
    const keys = Object.keys(obj); //取出对象所有的key属性 返回数组 keys = [ ]
    //遍历复制值, 可用 for 循环代替性能较好
    keys.forEach((key) => {
      if (obj[key] && typeof obj[key] === "object")
        //如果遇到的值又是 引用类型的 [ ] {} ,得继续深拷贝
        target[key] = deepClone(obj[key]);
      //递归
      else target[key] = obj[key];
    });
    return target; //返回新的对象
  } else if (Array.isArray(obj)) {
    // 数组同理
    let arr = [];
    obj.forEach((item, index) => {
      if (item && typeof item === "object") arr[index] = deepClone(item);
      else arr[index] = item;
    });
    return arr;
  }
}

/**
 * 深拷贝
 * @param {obj/array}
 */
export function fnFontsize(rem) {
  //可传入对象 或 数组
  let clientWidth = document.body.clientWidth;
  return rem * (clientWidth / 1920);
}

/**
 * Generate a hash string based on number of character
 * @param {number} count
 * @returns {string} hash string
 */
export function generateHashId(count) {
  return Math.random().toString(36).substr(count);
}

/**
 * whether is an object
 * @returns {boolean} - yes or no
 */
export function isPlainObject(obj) {
  return (
    obj === Object(obj) && typeof obj !== "function" && !Array.isArray(obj)
  );
}

/**
 * whether null or undefined
 * @returns {boolean} - yes or no
 */
export function notNullorUndefined(d) {
  return d !== undefined && d !== null;
}

/***
 * 首字母大写
 * @param str
 * @returns {string}
 */
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***
 * 根据指定长度截取字符串，超过指定长度显示省略号...
 * @param str 输入的字符串-string
 * @param len 指定的截取长度-number
 * @returns {*}
 */
export function cutStr(str, len) {
  let str_count = 0;
  let str_cut = "";
  if (!str || !len) {
    return str;
  }
  let str_len = str.length;
  for (let i = 0; i < str_len; i++) {
    let a = str.charAt(i);
    str_count++;
    if (encodeURI(a).length > 4) {
      //中文字符的长度经编码之后大于4
      str_count++;
    }
    str_cut = str_cut.concat(a);
    if (str_count >= len) {
      str_cut = str_cut.concat("...");
      return str_cut;
    }
  }
  //如果给定字符串小于指定长度，则返回源字符串；
  if (str_count < len) {
    return str;
  }
}

/***
 * 将jQuery表单对象序列化成json对象
 */
export function serializeToJason() {
  // (function ($) {
  //     $.fn.serializeJson = function () {
  //         let serializeObj = {};
  //         let array = this.serializeArray();
  //         // let str = this.serialize();
  //         $(array).each(function () {
  //             if (serializeObj[this.name]) {
  //                 if ($.isArray(serializeObj[this.name])) {
  //                     serializeObj[this.name].push(this.value);
  //                 } else {
  //                     serializeObj[this.name] = [serializeObj[this.name], this.value];
  //                 }
  //             } else {
  //                 serializeObj[this.name] = this.value;
  //             }
  //         });
  //         return serializeObj;
  //     };
  // })(jQuery);
}

/***
 * 判断数据类型
 * @param item
 * @returns {string}
 */
export function typeOf(item) {
  let objType = Object.prototype.toString.call(item);
  objType = objType.split(" ")[1];
  return objType.substr(0, objType.length - 1).toLowerCase();
}

/***
 * 计算字符长度
 * @param val
 * @returns {number}
 */
export function getByteLength(val) {
  let len = 0;
  if (val)
    for (let i = 0; i < val.length; i++) {
      let length = val.charCodeAt(i);
      if (length >= 0 && length <= 128) {
        len += 1;
      } else {
        len += 2;
      }
    }
  return len;
}

export function bigNumberFormat(value) {
  let param = {};
  let k = 10000;
  let sizes = ["", "万", "亿", "万亿"];
  let i;
  if (value < k) {
    param.value = value;
    param.unit = "";
  } else {
    i = Math.floor(Math.log(value) / Math.log(k));
    param.value = (value / Math.pow(k, i)).toFixed(2);
    param.unit = sizes[i];
  }
  return param;
}

export function bigNumberFormatToWan(value) {
  let param = {};
  let k = 10000;
  if (value < k) {
    param.value = value;
    param.unit = "";
  } else {
    param.value = (value / Math.pow(k, 1)).toFixed(2);
  }
  return param;
}

/***
 * 格式化数字（每三位用逗号分隔）
 * @param number
 * @returns {*}
 */
export function formatNumberByComma(number) {
  if (!number || isNaN(number) || number < 1000) return number;
  let decimal = number.toString().split(".")[1];
  let number_arr = number.toString().split(".")[0].split("").reverse();
  number_arr = number_arr.map((item, index) =>
    (index + 1) % 3 === 0 ? "," + item : item
  );
  let res = number_arr.reverse().join("") + (decimal ? "." + decimal : "");
  res = res.charAt(0) === "," ? res.slice(1) : res;
  return res;
}

/***
 * 给uri追加param
 * @param uri 请求地址-string
 * @param parameters 参数对象-object
 * @returns {*}
 */
export function addQueryString(uri, parameters) {
  let delimiter = uri.indexOf("?") === -1 ? "?" : "&";
  for (let parameterName in parameters) {
    if (parameters.hasOwnProperty(parameterName)) {
      let parameterValue = parameters[parameterName];
      uri +=
        delimiter +
        encodeURIComponent(parameterName) +
        "=" +
        encodeURIComponent(parameterValue);
      delimiter = "&";
    }
  }
  return uri;
}

/***
 * 数组去重
 * @param arr
 * @returns {Array}
 */
export function distinct(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

export function compare(key, desc) {
  //key:  用于排序的数组的key值
  //desc： 布尔值，为true是降序排序，false是升序排序
  return function (a, b) {
    let value1 = a[key];
    let value2 = b[key];
    if (desc == true) {
      // 降序排列
      return parseFloat(value2) - parseFloat(value1);
    } else {
      // 升序排列
      return parseFloat(value1) - parseFloat(value2);
    }
  };
}

/***
 * 事件防抖
 * 在防抖函数中，我们使用了闭包来保存定时器变量 timer 和传入的函数 func。
 * 每次触发事件时，我们先清除之前的定时器，再设置一个新的定时器。
 * 如果在 delay 时间内再次触发事件，就会清除之前的定时器并设置一个新的定时器，
 * 直到 delay 时间内不再触发事件，定时器到达时间后执行传入的函数 func。
 * @param func
 * @param wait
 * @returns {Function}
 */
export function debounce(func, wait = 500) {
  // 缓存一个定时器id
  let timer = 0;
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/***
 * 事件节流
 * 在节流函数中，我们同样使用了闭包来保存定时器变量 timer 和传入的函数 func。
 * 每次触发事件时，如果定时器不存在，就设置一个定时器，并在 delay 时间后执行传入的函数 func。
 * 如果在 delay 时间内再次触发事件，由于定时器还存在，就不会执行传入的函数 func。
 * 只有在 delay 时间后定时器到达时间后执行传入的函数 func 并清除定时器。
 * @param func
 * @param delay
 * @returns {Function}
 */
export function throttle(func, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}

/***
 * 事件节流
 * @param func
 * @param wait
 * @returns {Function}
 */
export function throttle2(func, wait = 50) {
  // 上一次执行该函数的时间
  let lastTime = 0;
  return function (...args) {
    // 当前时间
    let now = +new Date();
    // 将当前时间和上一次执行函数时间对比
    // 如果差值大于设置的等待时间就执行函数
    if (now - lastTime > wait) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

//前端防注入
// 将传过来的参数去掉非法字符
export function removeHTMLTag(str) {
  str = str.replace(/<\/?[^>]*>/gi, ""); // 去除HTML tag
  str = str.replace(/[ | ]*\n/gi, "\n"); // 去除行尾空白
  // str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
  str = str.replace(/&nbsp;/gi, ""); // 去掉&nbsp;
  str = str.replace(/alert/gi, ""); // 去掉alert;
  str = str.replace(/%3CSCRIPT/gi, ""); // 去掉3CSCRIPT;
  str = str.replace(/input/gi, ""); // 去掉input;
  str = str.replace(/iframe/gi, ""); // 去掉iframe;
  str = str.replace(/window/gi, ""); // 去掉window;
  str = str.replace(/link/gi, ""); // 去掉link;
  str = str.replace(/location/gi, ""); // 去掉location;
  str = str.replace(/JAVASCRIPT/gi, ""); // 去掉JAVASCRIPT;
  str = str.replace(/update/gi, ""); // 去掉update;
  str = str.replace(/insert/gi, ""); // 去掉insert;
  str = str.replace(/select/gi, ""); // 去掉select;
  str = str.replace(/[\[\]({!),:;?%<>"'}¨]/g, ""); // 替换大部分英文标点
  return str;
}

//前端SQL查询语句防注入
// 将传过来的参数去掉非法字符
export function removeSQLTag(str) {
  let value = { isin: 1, str: "" };
  //是否存在非法字符
  if (
    RegExp(/update/gi).exec(str) ||
    RegExp(/insert/gi).exec(str) ||
    RegExp(/delete/gi).exec(str)
  ) {
    value.isin = 0;
  }
  str = str.replace(/[ | ]*\n/gi, "\n"); // 去除行尾空白
  // str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
  str = str.replace(/update/gi, ""); // 去掉update;
  str = str.replace(/insert/gi, ""); // 去掉insert;
  str = str.replace(/delete/gi, ""); // 去掉select;
  value.str = str;
  return value;
}

///数组中的对象的中文字段排序
export function sortChinese(arr, dataLeven) {
  // 参数：arr 排序的数组; dataLeven 数组内的需要比较的元素属性
  /* 获取数组元素内需要比较的值 */
  function getValue(option) {
    // 参数： option 数组元素
    if (!dataLeven) return option;
    var data = option;
    dataLeven.split(".").filter(function (item) {
      data = data[item];
    });
    return data + "";
  }

  arr.sort(function (item1, item2) {
    return getValue(item1).localeCompare(getValue(item2), "zh-CN");
  });
}

/**
 * 生成xlsx文件
 * @param dataList 表格数据内容  array
 * @param fileName 文件标题。必须以 .xlsx结尾
 */
export const downloadXlsx = (dataList, fileName) => {
  const stringToBuff = (str) => {
    let buf = new ArrayBuffer(str.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i !== str.length; ++i) {
      view[i] = str.charCodeAt(i) & 0xff;
    }
    return buf;
  };
  // 创建表格
  let workbook = xlsx.utils.book_new();
  let worksheet = xlsx.utils.aoa_to_sheet(dataList);
  xlsx.utils.book_append_sheet(workbook, worksheet, "sheet1");

  // 创建二进制对象写入转换好的字节流
  let xlsxBlob = new Blob(
    [
      stringToBuff(
        xlsx.write(workbook, {
          bookType: "xlsx",
          bookSST: false,
          type: "binary",
        })
      ),
    ],
    { type: "" }
  );

  const a = document.createElement("a");
  // 利用URL.createObjectURL()方法为a元素生成blob URL
  a.href = URL.createObjectURL(xlsxBlob); // 创建对象超链接
  a.download = fileName;
  a.click();
};
