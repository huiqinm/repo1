import * as echarts from "echarts";
// legend
const pieOption = {
  tooltip: {
    trigger: "item",
    backgroundColor: "#000",
    textStyle: {
      color: "rgba(255,255,255,1)"
    },
    axisPointer: {
      type: "shadow",
      axis: "auto"
    },
    position: function(point, params, dom, react, size) {
      return (dom.style.tansform = "transformZ(0)");
    }
  },
  legend: {
    show: true,
    icon: "circle",
    // type: 'scroll',
    align: "left",
    itemGap: 25,
    itemWidth: 10,
    itemHeight: 10,
    orient: "vertical",
    // x: 'right',
    y: "center",
    // top: '1%',
    right: "3%",

    textStyle: {
      color: "rgba(255,255,255,1)",
      fontSize: "0.5rem"
    }
    // formatter: function (name) {
    //     const data = [
    //         { value: 573, name: "前期阶段" },
    //         { value: 735, name: "施工阶段" },
    //         { value: 580, name: "竣工阶段" },
    //         { value: 484, name: "维护阶段" }
    //     ]
    //     var total = 0;
    //     var target;
    //     for (var i = 0, l = data.length; i < l; i++) {
    //         total += data[i].value;
    //         if (data[i].name == name) {
    //             target = data[i].value;
    //         }
    //     }
    //     return name + '\n' + ((target / total) * 100).toFixed(2) + '%' + '   ' + target;
    // },
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["59%", "75%"],
      center: ["25%", "50%"],
      label: {
        show: false
      },
      data: [
        {
          value: 67,
          name: "已建成投运",
          itemStyle: {
            color: "rgba(102, 204, 255, 1)"
          }
        },
        {
          value: 55,
          name: "建设中",
          itemStyle: {
            color: "rgba(51, 255, 187, 1)"
          }
        },
        {
          value: 56,
          name: "未建设",
          itemStyle: {
            color: "rgba(255, 236, 140, 1)"
          }
        },
        {
          value: 66,
          name: "未建2设",
          itemStyle: {
            color: "rgba(255, 236, 240, 1)"
          }
        }
      ]
    },
    {
      name: "",
      type: "pie",
      selectedMode: "single",
      radius: ["50%", "60%"],
      center: ["25%", "50%"],
      label: {
        show: false
      },
      data: [
        {
          value: 67,
          name: "已建成投运",
          itemStyle: {
            color: "rgba(102, 204, 255, .6)"
          }
        },
        {
          value: 55,
          name: "建设中",
          itemStyle: {
            color: "rgba(51, 255, 187, .6)"
          }
        },
        {
          value: 56,
          name: "未建设",
          itemStyle: {
            color: "rgba(255, 236, 140, .6)"
          }
        },
        {
          value: 66,
          name: "未建2设",
          itemStyle: {
            color: "rgba(255, 236, 240, .6)"
          }
        }
      ]
    },
    {
      type: "gauge",
      center: ["25%", "50%"],
      radius: "45%",
      startAngle: 0,
      endAngle: 360,

      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [[1, "rgba(6, 191, 255, 1)"]]
        }
      },
      pointer: {
        show: false
      },
      detail: {
        valueAnimation: true,
        width: "100%",
        offsetCenter: [0, 0],
        fontSize: "0.6rem",
        fontWeight: "normal",
        color: "rgba(102, 255, 255, 1)",
        formatter: "{a|总数}\n{value}",
        rich: {
          a: {
            fontSize: "0.53rem",
            color: "#fff"
          }
        }
      },
      data: [
        {
          value: 89
        }
      ]
    }
  ]
};

export default pieOption;
