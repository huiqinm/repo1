import * as echarts from "echarts";
import { fnFontsize } from "@/utils/tool-utils";
const barOption = {
  backgroundColor: "transparent", //rgba(18,31,46,0.8)
  title: {
    show: false,
    text: ""
  },
  color: ["#1EDBAE", "#0879FE"],
  legend: {
    show: false,
    align: "auto",
    itemGap: 15,
    itemWidth: 12,
    itemHeight: 12,
    orient: "horizontal", //  vertical
    top: "0%",
    right: "1%",
    textStyle: {
      color: "rgba(255,255,255,1)",
      fontSize: "0.47rem" //自适应
    }
  },
  dataZoom: {
    type: "slider",
    show: false,
    // yAxisIndex: [0],
    handleSize: 0, //滑动条的 左右2个滑动条的大小
    height: 20, //组件高度
    width: "90%",
    bottom: 0, //底部的距离
    left: "10%",
    showDataShadow: false, //是否显示数据阴影 默认auto
    startValue: 0, // 从头开始。
    endValue: 5, // 一次性展示6个。
    isAutoScrollX: false,
    intervalTime: 2
  },
  tooltip: {
    show: true,
    trigger: "axis",
    backgroundColor: "#000",
    textStyle: {
      color: "rgba(255,255,255,1)"
      //fontSize: 16,
    },
    axisPointer: {
      type: "shadow",
      axis: "auto"
    }
  },
  grid: {
    show: false,
    left: "0%",
    right: "2%",
    bottom: "0%",
    top: "18%",
    containLabel: true
  },
  xAxis: [
    {
      name: "",
      show: true,
      position: "bottom",
      offset: 0,
      type: "category",
      nameLocation: "end",
      nameGap: 15,
      nameRotate: 0,
      inverse: false,
      boundaryGap: true, //['20%', '20%'] 留白策略
      scale: false,
      splitNumber: 5,
      minInterval: 0,
      nameTextStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: "0.47rem",
        // lineHeight: 1,
        fontStyle: "normal",
        fontWeight: 500,
        fontFamily: "sans-serif"
      },
      axisLine: {
        show: true,
        symbol: "none",
        symbolSize: [10, 15],
        symbolOffset: [0, 0],
        lineStyle: {
          color: "rgba(255,255,255,1)",
          width: 1,
          type: "solid",
          opacity: 1
        }
      },
      //刻度线是否显示
      axisTick: {
        show: true,
        alignWithLabel: false,
        interval: 1,
        inside: false,
        length: 5,
        lineStyle: {
          color: "rgba(20,203,215,0.2)",
          width: 1,
          type: "solid",
          opacity: 1
        }
      },
      axisLabel: {
        show: true,
        inside: false,
        interval: 0,
        rotate: 30,
        margin: 30,
        formatter: text => {
          let res = text;
          if (text.length > 10) {
            res = text.substring(0, 10) + "...";
          }
          return res;
        },
        textStyle: {
          color: "rgba(255,255,255,1)",
          fontSize: "0.5rem", //自适应
          fontStyle: "normal",
          fontWeight: 500,
          fontFamily: "sans-serif"
        },
        align: "center",
        verticalAlign: "middle",
        // lineHeight: 1,
        borderColor: "#FFF",
        borderWidth: 0,
        borderRadius: 0
      },
      splitLine: {
        show: false,
        interval: "auto",
        lineStyle: {
          type: "dashed",
          // 使用深浅的间隔色
          color: "rgba(20,203,215,0.2)"
        }
      },
      splitArea: {
        show: false,
        interval: "auto",
        areaStyle: {
          color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
          opacity: 1
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "单位：人",
      nameTextStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: "0.47rem", //自适应
        fontStyle: "normal",
        fontWeight: 500,
        fontFamily: "sans-serif",
        padding: [0, 0, 0, 20]
        // align:'left'
      },
      // interval:1000,
      axisLine: {
        symbolOffset: [0, 10],
        lineStyle: {
          color: "rgba(255,255,255,1)",
          width: 1,
          opacity: 1
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(255,255,255,0.35)"
        }
      },
      splitArea: {
        show: false,
        interval: 1,
        areaStyle: {
          color: ["#0b2a69", "#04225d"],
          opacity: 0.6
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: 15,
          fontStyle: "normal",
          fontWeight: 500,
          fontFamily: "sans-serif"
        }
      }
    }
  ],
  series: [
    {
      type: "bar",
      showBackground: true,
      barWidth: 24,
      // barGap: '15%',
      // barCategoryGap: '20%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#00EDF7" },
          // { offset: 0.5, color: '#188df0' },
          { offset: 1, color: "#001FFC" }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#001FFC" },
            // { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: "#00EDF7" }
          ])
        }
      }
    }
  ],
  dataset: {
    source: [
      ["product", "2015", "2016", "2017"],
      ["Matcha1", 43.3, 85.8, 93.7],
      ["Milk2", 83.1, 73.4, 55.1],
      ["Cheese3", 86.4, 65.2, 82.5],
      ["Walnut4", 72.4, 53.9, 39.1],
      ["Walnut5", 62.4, 53.9, 39.1],
      ["Walnut6", 92.4, 53.9, 39.1],
      ["Walnut7", 12.4, 53.9, 39.1],
      ["Walnut8", 42.4, 53.9, 39.1],
      ["Walnut9", 52.4, 53.9, 39.1]
    ]
  }
};

export default barOption;
