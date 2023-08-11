import * as echarts from 'echarts';
// label
const pieOption = {
    label: {
        formatter: "{a|{c}}\n{per|{b}}\n{sq|一}{b|{d}%}",
        rich: {
            a: {
                color: "inherit",
                fontSize: '0.6rem',
                align: "left",
            },
            b: {
                color: "inherit",
                fontSize: '0.53rem',
                lineHeight: 16,
                align: "left",
                padding: [0, 0, 0, 2]
            },
            per: {
                color: "#fff",
                fontSize: '0.53rem',
                padding: [3, 2, 3, 0],
                borderRadius: 4,
                align: "left",
            },
            sq: {
                color: "inherit",
                backgroundColor: "inherit",
            },
        },
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: '#000',
        textStyle: {
            color: 'rgba(255,255,255,1)'

        },
        axisPointer: {
            type: 'shadow',
            axis: 'auto'
        },
        position: function (point, params, dom, react, size) {
            return dom.style.tansform = 'transformZ(0)'
        },
        // formatter: function (params, ticket, callback) {
        //     return `${params.data.name} ：<br/>${params.data.value} (${params.percent}%)`;
        // },
    },
    legend: {
        show: false,
        icon: 'circle',
        align: 'auto',
        itemGap: 20,
        itemWidth: 15,
        itemHeight: 15,
        orient: 'horizontal',
        top: '1%',
        right: '3%',
        textStyle: {
            color: 'rgba(255,255,255,1)',
            fontSize: '0.47rem'
        }
    },
    series: [
        {
            name: "情况统计",
            type: "pie",
            selectedMode: "single",
            radius: ["40%", "50%"],
            center: ['50%', '40%'],
            label: {
                show: false,
            },
            avoidLabelOverlap: false,
            data: [
                {
                    value: 67,
                    name: "已建成投运",
                    itemStyle: {
                        color: "rgba(102, 204, 255, .6)",
                    },
                },
                {
                    value: 10,
                    name: "建设中",
                    itemStyle: {
                        color: "rgba(51, 255, 187, .6)",
                    },
                },
                {
                    value: 6,
                    name: "未建设",
                    itemStyle: {
                        color: "rgba(255, 236, 140, .6)",
                    },
                },
            ],
        },
        {
            name: "情况统计",
            type: "pie",
            radius: ["49%", "65%"],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            // labelLine: {
            //     show: true,
            //     length: 15,
            //     length2: 15,
            //     smooth: false,
            // },
            data: [
                {
                    value: 67,
                    name: "已建成投运",
                    itemStyle: {
                        color: "rgba(102, 204, 255, 1)",
                    },
                },
                {
                    value: 10,
                    name: "建设中",
                    itemStyle: {
                        color: "rgba(51, 255, 187, 1)",
                    },
                },
                {
                    value: 6,
                    name: "未建设",
                    itemStyle: {
                        color: "rgba(255, 236, 140, 1)",
                    },
                },
            ],
        },
        {
            type: "gauge",
            center: ['50%', '40%'],
            radius: "35%",
            startAngle: 0,
            endAngle: 360,

            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                distance: 50,
            },
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: [[1, "rgba(6, 191, 255, 1)"]],
                },
            },
            pointer: {
                show: false,
            },
            detail: {
                valueAnimation: true,
                width: "100%",
                offsetCenter: [0, 0],
                fontSize: '0.6rem',
                fontWeight: "normal",
                color: "rgba(102, 255, 255, 1)",
                formatter: "{a|总数}\n{value}",
                rich: {
                    a: {
                        fontSize: '0.5rem',
                        color: "#fff",
                    },
                },
            },
            data: [
                {
                    value: 35225,
                },
            ],
        },
    ],
};

export default pieOption;