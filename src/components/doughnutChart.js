import * as echarts from "echarts";

const useDoughnut = (element) => {
    // 初始化，傳入HTML element
    const doughnutChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = data => {
        const option = {
            tooltip: {
                trigger: "item",
            },
            series: [
                {
                    type: "pie",
                    radius: ["25%", "55%"],
                    avoidLabelOverlap: true,
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