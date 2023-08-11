import { formatOnlyDate } from './date-utils'

/**
 * simple getting unique values of an array
 *
 * @param {array} values
 * @returns {array} unique values
 */
export function unique(values) {
    const results = [];
    values.forEach(v => {
        if (!results.includes(v) && v !== null && v !== undefined) {
            results.push(v);
        }
    });

    return results;
}

export function notNullorUndefined(d) {
    return d !== undefined && d !== null;
}

export function isPlainObject(obj) {
    return (
        obj === Object(obj) && typeof obj !== 'function' && !Array.isArray(obj)
    );
}

export function numberSort(a, b) {
    return a - b;
}

/***
 * 生成区间随机数值，可指定小数点位数
 * @param min
 * @param max
 * @param precision 精度
 * @returns {*}
 */
export function getRandomNum(min, max, precision = 0) {
    return +(min + Math.random() * (max - min + 1)).toFixed(precision);
}

/***
 * 生成一个指定长度的时间（年月日）部分的数组
 * @param len
 * @param step
 * @param format
 * @returns {Array}
 */
export function buildupDateTimeData(len, step, format = '-') {
    let output = [];
    for (let i = 0; i < len; i++) {
        output.push(formatOnlyDate((new Date()).getTime() - i * step * 1000 * 3600 * 24, format));
    }
    return output.reverse();
}

/***
 * 生成区间随机数值数组，可指定小数点位数
 * @param len 数组长度
 * @param min
 * @param max
 * @param precision 精度
 * @returns {*}
 */
export function buildupRandomData(len, min, max, precision = 0) {
    let output = [];
    for (let i = 0; i < len; i++) {
        output.push(getRandomNum(min, max, precision));
    }
    return output;
}

/***
 * 判断长度大于等于1的数组
 * @param arr
 * @returns {Array<any>}
 */
export function arrTraversAble(arr) {
    return (!!arr && Array.isArray(arr) && arr.length > 0);
}

/***
 * 判断数据类型
 * @param item
 * @returns {string}
 */
export function typeOf(item) {
    let objType = Object.prototype.toString.call(item);
    objType = objType.split(' ')[1];
    return objType.substr(0, objType.length - 1).toLowerCase();
}