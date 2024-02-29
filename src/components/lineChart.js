import * as echarts from "echarts";

const useLine = (element, titleText) => {
    // 初始化，傳入HTML element
    const lineChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = (xData, data) => {
        const option = {
            title: {
                text: titleText,
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "5%",
                right: "5%",
                top: "10%",
                bottom: "10%"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: xData,
                show: false
            },
            yAxis: {
                type: "value",
                show: false
            },
            series: [
                {
                    data: data,
                    type: "line",
                    areaStyle: {
                        opacity: 0.5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    smooth: true,
                    showSymbol: false,

                },
            ],
        };
        return lineChart.setOption(option)
    }

    // 封裝resize，RWD會使用到
    const resize = () => lineChart.resize()

    return { setOption, resize }
}

export default useLine