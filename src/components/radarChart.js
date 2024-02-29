import * as echarts from "echarts";

const useRadar = (element) => {
    // 初始化，傳入HTML element
    const radarChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = (indicator, data) => {
        const option = {
            radar: {
                indicator: indicator,
                radius: 50,
                center: ['50%', '50%']
            },
            series: [
                {
                    type: 'radar',
                    areaStyle: {},
                    data: data
                },
            ]
        };
        return radarChart.setOption(option)
    }

    // 封裝resize，RWD會使用到
    const resize = () => radarChart.resize()

    return { setOption, resize }
}

export default useRadar