// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import { typeOf } from "./data-utils";
import * as echarts from 'echarts';

export function lineAreaStyle(hex) {
    return {
        fu: 'LinearGradient',
        color: new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [
                {
                    offset: 0,
                    color: hexToRGBA(hex, 0.01)
                },
                {
                    offset: 0.5,
                    color: hexToRGBA(hex, 0.5)
                },
                {
                    offset: 1,
                    color: hexToRGBA(hex, 0.8)
                }
            ],
        ),
        opacity: 0.7,
    };
}

/**
 * get r g b from hex code
 *
 * @param {string} hex
 * @returns {array} array of r g bs
 */
export function hexToRgb(hex) {
    const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return [r, g, b];
}

function PadNum(c) {
    const hex = parseFloat(c).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * get hex from r g b
 *
 * @param {array} rgb
 * @returns {string} hex string
 */
export function rgbToHex([r, g, b]) {
    return `#${[r, g, b].map(n => PadNum(n)).join('')}`.toUpperCase();
}

/***
 * 将RGB或RGBA格式的字符串色值转化为{hex:hex_value,alpha:alpha_value}格式的对象
 * @param rgbOrRgba
 */
export function rgbOrRgbaToHexWithAlpha(rgbOrRgba) {
    if (!rgbOrRgba || !isValidRgbRgba(rgbOrRgba))
        return;
    let result = {};
    const temp = rgbOrRgba.substring(rgbOrRgba.indexOf('(') + 1, rgbOrRgba.indexOf(')'));
    let arr = temp.split(',');
    if (isValidRgb(rgbOrRgba)) {
        result.alpha = 1;
        result.hex = rgbToHex(arr);
    } else {
        result.alpha = parseFloat(arr[arr.length - 1]);
        result.hex = rgbToHex(arr.splice(0, arr.length - 1));
    }
    return result;
}

/***
 * 生成一个HEX字符串格式的随机色值
 * @returns {string}
 */
export function colorHexGenerator() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}

export function randomHexColor() { //随机生成十六进制颜色
    let hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
    while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
        hex = '0' + hex;
    }
    return '#' + hex;
}

/***
 * 生成一个RGB或RGBA字符串格式的随机色值
 * @param opacity
 * @returns {string}
 */
export function colorRgbGenerator(opacity) {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return typeof opacity === 'number' ? `rgba(${r},${g},${b},${opacity})` : `rgb(${r},${g},${b})`;
}

/**
 * RGB颜色转换为16进制格式的字符串
 * str:rgb格式的颜色字符串（rgb(x,x,x)）-string
 * **/
export function colorHex(str) {
    // 十六进制颜色值的正则表达式
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(str)) {
        let aColor = str.replace(/(?:||rgb|RGB)*/ig, '').split(',');
        let strHex = '#';
        for (let i = 0; i < aColor.length; i++) {
            let hex = Number(aColor[i]).toString(16);
            if (hex === '0') {
                hex += hex
            }
            strHex += hex
        }
        if (strHex.length !== 7) {
            strHex = str
        }
        return strHex
    } else if (reg.test(str)) {
        let aNum = str.replace(/#/, '').split('');
        if (aNum.length === 6) {
            return str
        } else if (aNum.length === 3) {
            let numHex = '#';
            for (let i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i])
            }
            return numHex
        }
    } else {
        return str
    }
}

/**
 * 将十六进制的颜色值转化为rgba格式
 * str:十六进制的颜色值（#xxxxxx）-string
 * opacity:透明度-number
 * **/
export function colorRgb(str, opacity) {
    // 十六进制颜色值的正则表达式
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = str.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = '#';
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
            }
            sColor = sColorNew
        }
        // 处理六位的颜色值
        let sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 10))
        }
        return opacity >= 0 && opacity < 1
            ? `rgba(${sColorChange.join(',')},${opacity})`.replace(/\s*/g, "")
            : `rgb(${sColorChange.join(',')})`.replace(/\s*/g, "");
    } else {
        return sColor.replace(/\s*/g, "")
    }
}

/*
 *  Returns true if the hex color passed as an input is valid
 *  input -> hex (#FF00FF)
 *  output -> true
 *
 * @return a boolean
 */
export function isValidHex(hex) {
    if (typeOf(hex) !== 'string') return false;
    return !!hex.match(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i);
}

/***
 * 非严格验证RGB或RGBA
 * @param rgbRgba
 * @returns {*}
 */
export function isValidRgbOrRgba(rgbRgba) {
    if (typeOf(rgbRgba) !== 'string') return false;
    const regex = /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0+|0(?!=\.)\.\d+|1)?\)$/i;
    let temp = rgbRgba.replace(regex, '$1,$2,$3,$4');
    let arr = temp.split(',');
    const a = arr.splice(3)[0];
    return !!rgbRgba.match(regex) && arr.every((item) => item >= 0 && item <= 255) && (a >= 0 && a <= 1);
}

/***
 * 验证RGB
 * @param rgb
 * @returns {*}
 */
export function isValidRgb(str) {
    if (typeOf(str) !== 'string') return false;
    let rgb = str.replace(/\s*/g, "");
    const regex = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i;
    let temp = rgb.replace(regex, '$1,$2,$3');
    let arr = temp.split(',');
    return !!rgb.match(regex) && arr.every((item) => item >= 0 && item <= 255);
}

/***
 * 验证RGBA
 * @param rgba
 * @returns {*}
 */
export function isValidRgba(str) {
    if (typeOf(str) !== 'string') return false;
    let rgba = str.replace(/\s*/g, "");
    const regex = /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(0+|0(?!=\.)\.\d+|1)\)$/i;
    let temp = rgba.replace(regex, '$1,$2,$3,$4');
    let arr = temp.split(',');
    const a = arr.splice(3)[0];
    return !!rgba.match(regex) && arr.every((item) => item >= 0 && item <= 255) && (a >= 0 && a <= 1);
}

/***
 * 严格验证RGB或RGBA
 * @param rgbOrRgba
 * @returns {*}
 */
export function isValidRgbRgba(rgbOrRgba) {
    if (isValidRgb(rgbOrRgba)) {
        return true;
    } else {
        return isValidRgba(rgbOrRgba);
    }
}

/*
 *  Transforms an hex color into its RGB representation
 *  input ->  hex (#FF00FF)
 *  output ->  { r: 255, g: 0, b: 255 }
 *
 * @return a hash
 */
export function hexToRGB(hex) {
    if (!hex) {
        hex = '#FFFFFF';
    }

    let shortRegex = /^#([a-f\d])([a-f\d])([a-f\d])$/i;

    hex = hex.replace(shortRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/*
 *  Transforms an hex color an a opacity value to a rgba string
 *  input ->  hex (#FF00FF) and opacity (0.4)
 *  output -> 'rgba(255,0,255,0.4)'
 *
 * @return a string
 */
export function hexToRGBA(hex, opacity) {
    function roundToTwo(num) {
        return +(Math.round(num + 'e+2') + 'e-2');
    }

    let rgb = hexToRGB(hex);
    opacity = opacity != null ? roundToTwo(opacity) : 1;
    if (rgb) {
        return `rgba(${[rgb.r, rgb.g, rgb.b, opacity].join(',')})`.replace(/\s*/g, "");
    } else {
        return isValidHex(hex) ? hex : '#FFF';
    }
}

/**
 * 将{r:r,g:g,b:b,a:a}的对象转化为RGBA颜色值
 * **/
export function objToRGBA(obj) {
    const result = 'rgba(0,0,0,1)';
    if (!(typeOf(obj) === 'object' && Object.keys(obj).length === 4)
        || !(!isNaN(obj.r) && !isNaN(obj.g) && !isNaN(obj.b) && !isNaN(obj.a)))
        return result;
    return `rgba(${obj.r},${obj.g},${obj.b},${obj.a})`.replace(/\s*/g, "");
}

/**
 * 将{r:r,g:g,b:b,a:a}的对象转化为RGBA数组[r,g,b,a]，其中a的范围[0,255]=>[0,1]
 * **/
export function rgbaObjToArr(obj) {
    const result = [0, 0, 0, 255];
    let values = Object.values(obj);
    if (!(typeOf(obj) === 'object' && values.length === 4)
        || !(!isNaN(obj.r) && !isNaN(obj.g) && !isNaN(obj.b) && !isNaN(obj.a))
        || !values.slice(0, 3).every((val) => val >= 0 && val <= 255)
        || !(values[3] >= 0 && values[3] <= 1))
        return result;
    return values.map((val, index) => index < 3 ? val : val * 255);
}

/**
 * 将RGBA数组[r,g,b,a]的转化为对象{r:r,g:g,b:b,a:a}，其中a的范围[0,1]
 * **/
export function rgbaArrToObj(arr) {
    const result = { r: 0, g: 0, b: 0, a: 1 };
    if (!arr || typeOf(arr) !== 'array' || arr.length !== 4)
        return result;
    result.r = arr[0];
    result.g = arr[1];
    result.b = arr[2];
    result.a = arr[3];
    return result;
}

/**
 * 将rgba/hex格式的颜色值转化为对象
 * **/
export function hexOrRgbToObj(str) {
    if (typeOf(str) !== 'string' || (!isValidHex(str) && !isValidRgbOrRgba(str)))
        return str;
    let obj = {};
    if (isValidHex(str)) {
        str = hexToRGBA(str);
    } else if (isValidRgb(str)) {
        let arr = str.split('');
        arr.splice(arr.length - 1, 0, ',1');
        arr.splice(arr.indexOf('('), 0, 'a');
        str = arr.join('');
    }
    const arrVal = str.substring(5, str.indexOf(')')).split(',');
    obj.r = +arrVal[0];
    obj.g = +arrVal[1];
    obj.b = +arrVal[2];
    obj.a = +arrVal[3];
    return obj;
}

/**
 * echart 颜色方法配置
 * 上传接口数据前，将对象消灭，只上传颜色,
 * 'clean' 
 */
export function sendEchartFnColor(series) {
    let arr = series
    arr = arr.map((item, k) => {
        return renderColorLine_A(item, 'clean')
    })
}

