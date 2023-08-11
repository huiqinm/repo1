import { typeOf } from "./tool-utils";

//获取当前日期的前一天日期
export function formateDate(time) {
    if (!time) return ''
    time = time - 24 * 60 * 60 * 1000
    let date = new Date(time)
    return date.getFullYear() + '' + (date.getMonth() + 1) + '' + (date.getDate())
        + ''
}

//获取当前日期和时间
export function formateDateTime(time) {
    if (!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
        + ' ' + date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()
}

export function formateDateTimeZ(time) {
    if (!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate()) + ' ' + "00:00:00"

}

/**
 * 获取前一天
 */
export function getDayBefore(time) {
    if (!time) return;
    let date = new Date(time).getTime() - 24 * 60 * 60 * 1000;
    if (typeOf(date) === 'string' || typeOf(date) === 'number')
        date = new Date(parseInt(date.toString(), 10));
    if (typeOf(date) === 'date') {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return `${y}${m}${d}`;
    }
}

/**
 * 获取前一天
 */
export function getDayBeforeFormat(time, format = "-") {
    if (!time) return;
    let date = new Date(time).getTime() - 24 * 60 * 60 * 1000;
    if (typeOf(date) === 'string' || typeOf(date) === 'number')
        date = new Date(parseInt(date.toString(), 10));
    if (typeOf(date) === 'date') {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return `${y}${format}${m}${format}${d}`;
    }
}

/**
 * 获取具体时间
 */
export function getSpecificDate(time) {
    if (!time) return;
    var newDate = new Date(time);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    month = month > 9 ? month : "0" + month;
    var day = newDate.getDate();
    day = day > 9 ? day : "0" + day;
    return `${year}年${month}月${day}日`;
}

/**
 * 获取具体时间
 */
export function getDateString(time) {
    if (!time) return;
    var newDate = new Date(time);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    month = month > 9 ? month : "0" + month;
    var day = newDate.getDate();
    day = day > 9 ? day : "0" + day;
    return `${year}-${month}-${day}`;
}

/**
 * 获取具体时间
 */
export function getDate(time) {
    if (!time) return;
    var newDate = new Date(time);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    month = month > 9 ? month : "0" + month;
    var day = newDate.getDate();
    day = day > 9 ? day : "0" + day;
    return `${year}${month}${day}`;
}


/***
 * 格式化日期（年月日）
 * @param date
 * @returns {string} 返回格式 yyyymmss
 */
export function formatDataTrim(date) {
    if (!date) return;
    if (typeOf(date) === 'string' || typeOf(date) === 'number')
        date = new Date(parseInt(date.toString(), 10));
    if (typeOf(date) === 'date') {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return `${y}${m}${d}`;
    }
}


/***
 * 格式化日期（年月日）
 * @param date
 * @param format
 * @returns {string}
 */
export function formatDate(date, format = '-') {
    if (!date) return;
    if (typeOf(date) === 'string' || typeOf(date) === 'number')
        date = new Date(parseInt(date.toString(), 10));
    if (typeOf(date) === 'date') {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return `${y} ${format} ${m} ${format} ${d}`;
    }
}

/***
 * 格式化日期（月日）
 * @param date
 * @param format
 * @returns {string}
 */
export function formatOnlyDate(date, format = '-') {
    if (!date) return;
    if (typeOf(date) === 'string' || typeOf(date) === 'number')
        date = new Date(parseInt(date.toString(), 10));
    if (typeOf(date) === 'date') {
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return `${m} ${format} ${d}`;
    }
}

/***
 * 格式化日期时间（年月日 时分秒）
 * @param date
 * @param format
 * @returns {string}
 */
export function formatDateTime(date, format = '-') {
    if (!date) return;
    if (typeOf(date) === 'string' || typeOf(date) === 'number')
        date = new Date(parseInt(date.toString(), 10));
    if (typeOf(date) === 'date') {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let hour = date.getHours();
        hour = hour < 10 ? ('0' + hour) : hour;
        let minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        let seconds = date.getSeconds();
        seconds = seconds < 10 ? ('0' + seconds) : seconds;

        return `${y} ${format} ${m} ${format} ${d} ${hour} : ${minute} : ${seconds}`;
    }
}


export function isDateString(dateStr) {
    if (typeOf(dateStr) !== 'string')
        return false;
    // const
}