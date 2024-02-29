import * as echarts from "echarts";

const useDoughnut = (element, titleText) => {
    // 初始化，傳入HTML element
    const doughnutChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = data => {
        const option = {
            title: {
                text: titleText,
                // subtext: "總計",
                left: "center",
                top: "center",
                textStyle: {
                    color: "black",
                    fontWeight: "normal",
                    fontSize: 14,
                },
            },
            tooltip: {
                trigger: "item",
            },
            grid: {
                left: "5%",
                right: "0%",
                top: "10%",
                bottom: "10%"
            },
            legend: {
                top: "15%",
                left: "0",
                orient: "vertical",
                align: "left",
                icon: "circle",
                itemGap: 10,
                textStyle: {
                    rich: {
                        num: {
                            width: 10,
                            color: "#262A2B",
                            fontSize: 10,
                        },
                        text: {
                            color: "#999999",
                            fontSize: 6,
                        },
                    },
                },
            },
            series: [
                {
                    type: "pie",
                    radius: ["50%", "80%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                    },
                    data: data,
                },
            ],
        };
        return doughnutChart.setOption(option)
    }

    // 封裝resize，RWD會使用到
    const resize = () => doughnutChart.resize()

    return { setOption, resize }
}

export default useDoughnut