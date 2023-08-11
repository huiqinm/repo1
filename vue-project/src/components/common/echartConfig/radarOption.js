import * as echarts from 'echarts';
const radarOption = {
    title: {
        text: ''
    },
    color: ['#A8FF00', '#5AD8A6'],
    legend: {
        show: false
    },
    tooltip: {
        show: true,
        backgroundColor: '#000',
        textStyle: {
            color: 'rgba(255,255,255,1)',
            //fontSize: 16,
        },
        position: function (point, params, dom, react, size) {
            return { left: '1%', bottom: 0 }
        },
    },
    radar: {
        center: ['50%', '50%'],
        radius: '55%',
        name: {  //标签样式
            textStyle: {
                color: '#FFF',
                fontSize: "0.53rem",   //自适应
                fontStyle: 'normal',
                fontWeight: 500,
                fontFamily: 'sans-serif'
            },
            formatter: function (text) {
                var strLength = text.length;
                if (strLength >= 8) {
                    if (strLength % 2 == 1) {
                        text = text.substring(0, strLength / 2 + 1) + '\n' + text.substring(strLength / 2 + 1, strLength)
                    } else {
                        text = text.substring(0, strLength / 2) + '\n' + text.substring(strLength / 2, strLength)
                    }
                }
                return text
            },
        },
        shape: 'polygon',  //'polygon' 和 'circle'
        axisLine: {
            lineStyle: {
                color: '#5EE5E6',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#5EE5E6', // 设置网格的颜色
            },
        },

        indicator: [
            { name: '规上限上企业', max: 10000 },
            { name: '龙头骨干企业', max: 10000 },
            { name: '技术中心企业', max: 10000 },
            { name: '高新技术企业', max: 10000 },
            { name: '总部企业', max: 10000 },
            { name: '装备制造企业', max: 10000 },
            { name: '工作母机企业', max: 10000 },
            { name: '其他', max: 10000 },
        ]
    },
    series: [
        {
            name: '雷达图',
            type: 'radar',
            avoidLabelOverlap: true,  //重叠标签
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 5, // 拐点的大小
            tooltip: {  //缺少此项会崩溃（不明白为啥）
                trigger: 'item',
            },
            lineStyle: {
                width: 2,
                type: 'solid',
                opacity: 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            },
            itemStyle: {   //拐点样式
                color: '#A8FF00',
                borderColor: '#A8FF00',
                shadowColor: 'rgba(168, 255, 0, 1)',
                shadowBlur: 10,
                opacity: 1,
                borderWidth: 1,
            },
            areaStyle: {
                color: 'rgba(168, 255, 0, 1)',
                opacity: 0.35,
                shadowColor: 'rgba(0, 83, 255, 0.56)',
                shadowBlur: 10
            },
            label: {
                show: false,  //数值标签
                position: 'top',
                distance: 5,
                fontStyle: 'normal',
                fontWeight: 500,
                fontFamily: "sans-serif",
                fontSize: "0.5rem",  //自适应
                align: "center",
                verticalAlign: "center",
                lineHeight: 15,
                formatter: (params) => {
                    return params.value;
                },
                color: '#fff',
            },
            data: [
                {
                    value: [8133, 9132, 6415, 5136, 9146, 7133, 8057, 2223],
                    name: '企业类型'
                }
            ]
        }
    ]
};

export default radarOption;