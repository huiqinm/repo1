import * as echarts from "echarts";
import { fnFontsize } from "@/utils/tool-utils";

const option = {
  backgroundColor: "transparent",
  title: {
    show: false,
    text: "我是标题",
    left: "45%",
    top: "3%",
    textStyle: {
      color: "#2599e7",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 500,
      fontFamily: "sans-serif"
    }
  },
  // tooltip: {
  //     formatter: "{a} <br/>{b} : {c}%"
  // },
  // toolbox: {
  //     feature: {
  //         restore: {},
  //         saveAsImage: {}
  //     }
  // },
  series: {
    name: "业务指标",
    type: "gauge",
    center: ["50%", "55%"],
    radius: "100%",
    startAngle: 225,
    endAngle: -45,
    clockwise: true,
    min: 0,
    max: 100,
    splitNumber: 10, //分割段线
    axisLine: {
      // 坐标轴线
      lineStyle: {
        // 属性lineStyle控制线条样式
        width: 10, // 外圈宽度
        color: [
          [0.25, "#F4664A"],
          [0.5, "#FAAD14"],
          [0.75, "#A0D911"],
          [1, "#30BF78"]
        ]
      }
    },
    axisTick: {
      // 坐标轴小标记
      show: false,
      distance: -10,
      length: 8, // 属性length控制线长
      lineStyle: {
        // 属性lineStyle控制线条样式
        color: "#fff",
        width: 2
      }
    },
    splitLine: {
      // 分隔线
      distance: -10,
      length: 10, // 属性length控制线长
      lineStyle: {
        // 属性lineStyle（详见lineStyle）控制线条样式
        color: "#fff", //'auto'
        width: 2
      }
    },
    title: {
      //指标标题
      show: true,
      offsetCenter: [0, "-26%"], // x, y，单位px
      textStyle: {
        color: "#48F9CC",
        fontSize: 12
      }
    },
    pointer: {
      show: true,
      width: 5,
      itemStyle: {
        color: "auto"
      }
    },
    axisLabel: {
      color: "auto",
      distance: 15,
      fontSize: 12
    },
    detail: {
      formatter: "{value} 张",
      valueAnimation: true,
      color: "auto",
      fontSize: 16
    },
    data: [{ value: 16, name: "剩余数量" }]
  }
};

export default option;
