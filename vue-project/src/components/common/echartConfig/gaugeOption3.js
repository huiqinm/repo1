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
    max: 140,
    splitNumber: 14, //分割段线
    axisLine: {
      // 坐标轴线
      lineStyle: {
        // 属性lineStyle控制线条样式
        width: 15, // 外圈宽度
        color: [
          [5 / 14, "#b3fe03"],
          [6 / 14, "#cefd08"],
          [7 / 14, "#fbef11"],
          [8 / 14, "#fec104"],
          [11 / 14, "#ff1d0d"],
          [1, "#9a0074"]
          // [1, "#7e0000"]
        ]
      }
    },
    axisTick: {
      // 坐标轴小标记
      show: false,
      distance: -15,
      length: 8, // 属性length控制线长
      lineStyle: {
        // 属性lineStyle控制线条样式
        color: "#fff",
        width: 2
      }
    },
    splitLine: {
      // 分隔线
      distance: -15,
      length: 15, // 属性length控制线长
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
        // color: "auto",
        fontSize: 15
      }
    },
    pointer: {
      show: true,
      width: 8,
      itemStyle: {
        color: "auto"
      }
    },
    axisLabel: {
      // color: "auto",
      color: "#ffffff",
      distance: 20,
      fontSize: 12
    },
    detail: {
      formatter: "{value} 分贝",
      valueAnimation: true,
      color: "auto",
      fontSize: 20
    },
    data: [{ value: 16, name: "" }]
  }
};

export default option;
