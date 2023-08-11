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
    max: 300,
    splitNumber: 6, //分割段线
    axisLine: {
      // 坐标轴线
      lineStyle: {
        // 属性lineStyle控制线条样式
        width: 15, // 外圈宽度
        color: [
          [1 / 6, "#00ff01"],
          [2 / 6, "#fcfc0b"],
          [3 / 6, "#fd6601"],
          [4 / 6, "#fe0101"],
          [1, "#973463"]
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
      formatter: "{value}",
      valueAnimation: true,
      color: "auto",
      fontSize: 20
    },
    data: [{ value: 16, name: "AQI指标" }]
  }
};

export default option;
