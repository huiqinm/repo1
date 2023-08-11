import * as echarts from "echarts";
const pieOption = {
  color: ["#0879FE", "#d18cec", "#1EDBAE", "#d4995e", "#03d4f3", "#66ccff", "#d18cec", "#9bec8c"],
  tooltip: {
    trigger: "item",
    backgroundColor: "#000",
    textStyle: {
      color: "rgba(255,255,255,1)"
      //fontSize: 16,
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
    show: false,
    icon: "circle",
    align: "auto",
    itemGap: 20,
    itemWidth: 15,
    itemHeight: 15,
    orient: "horizontal",
    top: "1%",
    right: "3%",
    textStyle: {
      color: "rgba(255,255,255,1)",
      fontSize: "0.47rem"
    }
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["30%", "60%"],
      center: ["50%", "50%"],
      avoidLabelOverlap: true, //重叠标签
      itemStyle: {
        borderRadius: 5,
        borderColor: "rgba(255,255,255,0.6)",
        borderWidth: 2
      },
      minAngle: 10,
      // color: ['#039BE5', '#7AC143', '#F47721', '#D20962', '#00A78E'],
      label: {
        show: true,
        //position: 'center',
        fontStyle: "normal",
        position: "outside",
        formatter: "{b}\n{d}%", //'{b}\n{c}万㎡',
        textStyle: {
          fontSize: "0.53rem", //自适应
          lineHeight: 16,
          color: "rgba(255,255,255,1)", //默认为维度颜色
          fontStyle: "normal"
          //fontFamily: 'sans-serif'
        }
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "0.53rem", //自适应
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: true,
        // length: 10,
        // length2: 50,
        smooth: false
      },
      data: [
        { value: 1048, name: "Search11" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union" },
        { value: 300, name: "Video" }
      ]
    }
  ]
};

export default pieOption;
