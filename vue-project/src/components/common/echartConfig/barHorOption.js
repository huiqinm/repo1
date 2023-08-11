import * as echarts from "echarts";
import { fnFontsize } from "@/utils/tool-utils";
const barOption = {
  color: ["#43cf7c", "#ffc300", "#fd3004"],
  backgroundColor: "transparent", //rgba(18,31,46,0.8)
  title: {
    show: false,
    text: ""
  },
  legend: {
    show: true,
    align: "auto",
    itemGap: 15,
    itemWidth: 10,
    itemHeight: 10,
    orient: "horizontal", //  vertical
    top: "0%",
    right: "1%",
    textStyle: {
      color: "rgba(255,255,255,1)",
      fontSize: "0.47rem" //自适应
    }
  },
  dataZoom: [
    {
      type: "slider",
      show: false,
      yAxisIndex: [0],
      handleSize: 0, //滑动条的 左右2个滑动条的大小
      height: "85%", //组件高度
      width: "20px",
      right: 3, //右边的距离
      showDataShadow: false, //是否显示数据阴影 默认auto
      startValue: 0, // 从头开始。
      endValue: 30, // 一次性展示5个。
      intervalTime: 2,
      brushSelect: false //禁止十字框选
    }
  ],
  tooltip: {
    show: false,
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
    right: "6%",
    bottom: "1%",
    top: "5%",
    containLabel: true
  },
  xAxis: [
    {
      name: "%",
      show: true,
      position: "bottom",
      offset: 0,
      type: "value",
      nameLocation: "end",
      nameGap: 8, //单位
      nameRotate: 0,
      inverse: false,
      boundaryGap: 0, //true, //['20%', '20%'] 留白策略
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
        textStyle: {
          fontSize: 15,
          fontStyle: "normal",
          fontWeight: 500,
          fontFamily: "sans-serif"
        }
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
      type: "category",
      name: "",
      inverse: true,
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
        show: true,
        inside: false,
        interval: 0,
        rotate: 0,
        margin: 10,
        formatter: text => {
          let res = text;
          if (text.length > 6) {
            res = text.substring(0, 6) + "...";
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
        align: "right",
        verticalAlign: "middle",
        // lineHeight: 1,
        borderColor: "#FFF",
        borderWidth: 0,
        borderRadius: 0
      }
    }
  ],
  series: [
    {
      type: "bar",
      showBackground: true,
      // barWidth: "10%",
      barGap: "1%",
      barCategoryGap: "50%",
      stack: "1"
    },
    {
      type: "bar",
      showBackground: true,
      stack: "1"
    },
    {
      type: "bar",
      showBackground: true,
      stack: "1",
      label: {
        normal: {
          show: true, //标签数值
          position: "right",
          textStyle: {
            color: "#fff"
          },
          formatter: val => {
            let { data } = val;
            let count = data[1] + data[2] + data[3];
            return count + "%";
          }
        }
      }
    }
  ],
  dataset: {
    source: [
      // ['product', '2015', '2016', '2017'],
      // ['Matcha1', 43.3, 85.8, 93.7],
      // ['Milk2', 83.1, 73.4, 55.1],
      // ['Cheese3', 86.4, 65.2, 82.5],
      // ['Walnut4', 72.4, 53.9, 39.1],
      // ['Walnut5', 62.4, 53.9, 39.1],
      // ['Walnut6', 92.4, 53.9, 39.1],
      // ['Walnut7', 12.4, 53.9, 39.1],
      // ['Walnut8', 42.4, 53.9, 39.1],
      // ['Walnut9', 52.4, 53.9, 39.1],
    ]
  }
};

export default barOption;
