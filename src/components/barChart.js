import * as echarts from "echarts";

const useBar = (element) => {
    // 初始化，傳入HTML element
    const barChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = (xData, data) => {
        const option = {
            xAxis: {
                type: 'category',
                data: xData,
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            grid: {
                left: "5%",
                right: "5%",
                top: "10%",
                bottom: "10%"
            },
            series: [
                {
                    data: data,
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    },
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    },
                    barWidth: 10,
                }
            ]
        };
        return barChart.setOption(option)
    }

    // 封裝resize，RWD會使用到
    const resize = () => barChart.resize()

    return { setOption, resize }
}

export default useBar