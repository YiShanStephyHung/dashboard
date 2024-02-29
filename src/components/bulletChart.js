import * as echarts from "echarts";

const usePie = (element, title, low, mid, high, mark) => {
    // 初始化，傳入HTML element
    const bulletChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = data => {
        const option = {
            xAxis: {
                type: "value",
                splitLine: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
                splitNumber: 10, // 分十份
                axisLabel: {
                    color: "#636363",
                    fontSize: 8,
                    align: "center",
                    verticalAlign: "bottom",
                    formatter: (value) => {
                        return `${value}%`;
                    },
                },
            },
            yAxis: {
                type: "category",
                splitLine: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
                offset: -8,
                axisLabel: {
                    color: "#262A2B",
                    align: "left",
                    verticalAlign: "bottom",
                    // label跟bar的距離
                    lineHeight: 50,
                },
                data: title,
            },
            cursor: "auto",
            series: [
                // 前
                {
                    type: "bar",
                    barWidth: 4,
                    z: 3, // 前後
                    data: [
                        {
                            value: data,
                            itemStyle: {
                                color: "#fff",
                                borderRadius: [0, 2, 2, 0],
                            },
                        },
                    ],
                    markPoint: {
                        symbol: "rect",
                        borderRadius: [0, 10, 10, 0],
                        symbolSize: [4, 20],
                        itemStyle: {
                            color: "#E8686F",
                        },
                        animation: false,
                        z: 10, // 前後
                        data: [
                            {
                                xAxis: mark,
                                yAxis: 0,
                            },
                        ],
                    },
                },
                // 後
                {
                    type: "bar",
                    barGap: "-250%",
                    barWidth: "16px",
                    emphasis: { disabled: true },
                    stack: "bg",
                    data: [
                        {
                            value: low,
                            itemStyle: {
                                color: "#8377BB",
                                borderRadius: [6, 0, 0, 6],
                            },
                        },
                    ],
                },
                {
                    type: "bar",
                    barGap: "-250%",
                    barWidth: "16px",
                    emphasis: { disabled: true },
                    stack: "bg",
                    data: [
                        {
                            value: mid,
                            itemStyle: {
                                color: "#77BB84",
                            },
                        },
                    ],
                },
                {
                    type: "bar",
                    barGap: "-250%",
                    barWidth: "16px",
                    barCategoryGap: "100%",
                    emphasis: { disabled: true },
                    stack: "bg",
                    data: [
                        {
                            value: high,
                            itemStyle: {
                                color: "#E7C374",
                                borderRadius: [0, 6, 6, 0],
                            },
                        },
                    ],
                },
            ],
        };
        return bulletChart.setOption(option)
    }
         
    // 封裝resize，RWD會使用到
    const resize = () => bulletChart.resize()

    return { setOption, resize }
}

export default usePie