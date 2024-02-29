import * as echarts from "echarts";

const useMultiline = (element) => {
    // 初始化，傳入HTML element
    const multilineChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = (xData, data) => {
        const option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "15%",
                right: "7%",
                top: "15%",
                bottom: "20%"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: xData,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            series: data.map(el => ({
                name: el.name,
                type: "line",
                showSymbol: false,
                smooth: true,
                symbol: "circle",
                data: el.value,
                // lineStyle: { color: "#27A1AF", width: 1 },
                // itemStyle: { color: "#27A1AF" }
            }))
        };
        return multilineChart.setOption(option)
    }

    // 封裝resize，RWD會使用到
    const resize = () => multilineChart.resize()

    return { setOption, resize }
}

export default useMultiline