import * as echarts from "echarts";
var xData = [];
var data1 = [];
var data2 = [];
// var xData = ["500~1000亩", "100~500亩", "50~100亩", "30~50亩", "10~30亩", "5~10亩", "5亩以下"];
// var data1 = [7, 239, 624, 1281, 4406, 3987, 9245];
// var data2 = [0.41, 3.95, 4.37, 5.06, 7.71, 2.92, 1.99];
// var timeLineData = [1];
// var background = "#0e2147"; //背景
let textColor = "#fff";
let lineColor = "rgba(255,255,255,0.2)";
let colors = [
  {
    borderColor: "rgba(227,161,96,1)",
    start: "rgba(227,161,96,1)",
    end: "rgba(227,161,96,0.8)"
  },
  {
    borderColor: "rgba(0,222,255,1)",
    start: "rgba(0,222,255,1)",
    end: "rgba(0,222,255,0.8)"
  }
];

const treeOption = {
  baseOption: {
    // backgroundColor: background,
    title: {
      show: true,
      text: "单位：人",
      left: "left",
      textStyle: {
        color: "#fff",
        fontSize: "0.47rem", //自适应
        fontStyle: "normal",
        fontWeight: 400,
        fontFamily: "PingFang TC"
      }
    },
    timeline: {
      //不能删
      show: false,
      top: 0,
      data: []
    },
    tooltip: {},
    legend: {
      top: "0%",
      right: "5%",
      itemWidth: 10,
      itemHeight: 8,
      // itemGap: 343,
      icon: "horizontal",
      textStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: 14
      }
    },
    grid: [
      {
        show: false,
        left: "7%",
        top: "10%",
        bottom: "2%",
        containLabel: true,
        width: "33%"
      },
      {
        show: false,
        left: "52%",
        top: "10%",
        bottom: "2%",
        width: "0%"
      },
      {
        show: false,
        right: "7%",
        top: "10%",
        bottom: "2%",
        containLabel: true,
        width: "33%"
      }
    ],
    xAxis: [
      {
        // type: "log",
        type: "value",
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        position: "top",
        axisLabel: {
          show: false, //刻度
          color: textColor
        },
        splitLine: {
          show: false, //分隔线
          lineStyle: {
            color: lineColor
          }
        }
      },
      {
        gridIndex: 1,
        show: false
      },
      {
        gridIndex: 2,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        position: "top",
        axisLabel: {
          show: false, //刻度
          color: textColor
        },
        splitLine: {
          show: false, //分隔线
          lineStyle: {
            color: lineColor
          }
        }
      }
    ],
    yAxis: [
      {
        type: "category",
        inverse: true,
        position: "right",
        axisLine: {
          show: true,
          lineStyle: {
            color: lineColor
          }
        },

        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: xData
      },
      {
        gridIndex: 1,
        type: "category",
        inverse: true,
        position: "left",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          padding: [0, 0, 0, 0],
          textStyle: {
            color: "#ffffff",
            fontSize: 12
          },
          align: "center"
        },
        data: xData
        // data: xData.map(function(value) {
        //   return {
        //     value: value,
        //     textStyle: {
        //       align: "center"
        //     }
        //   };
        // })
      },
      {
        gridIndex: 2,
        type: "category",
        inverse: true,
        position: "left",
        axisLine: {
          show: true,
          lineStyle: {
            color: lineColor
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: xData
      }
    ],
    series: []
  },
  options: []
};
//treeOption.baseOption.timeline.data.push(timeLineData[0]);
treeOption.options.push({
  series: [
    {
      name: "男",
      type: "bar",
      showBackground: true,
      // barWidth: 25,
      barCategoryGap: "55%",
      stack: "1",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: colors[0].start
            },
            {
              offset: 1,
              color: colors[0].end
            }
          ])
        }
      },
      label: {
        normal: {
          show: true,
          position: "left",
          textStyle: {
            color: "#fff",
            fontFamily: "series"
          }
        }
      },
      data: data1,
      animationEasing: "elasticOut"
    },
    {
      name: "女",
      type: "bar",
      showBackground: true,
      stack: "2",
      // barWidth: 25,
      barCategoryGap: "55%",
      xAxisIndex: 2,
      yAxisIndex: 2,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: colors[1].start
            },
            {
              offset: 1,
              color: colors[1].end
            }
          ])
        }
      },
      label: {
        normal: {
          show: true,
          position: "right",
          textStyle: {
            color: "#fff",
            fontFamily: "series"
          }
        }
      },
      data: data2,
      animationEasing: "elasticOut"
    }
  ]
});

export default treeOption;
