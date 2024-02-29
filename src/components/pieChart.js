import * as echarts from "echarts";

const usePie = (element) => {
    // 初始化，傳入HTML element
    const pieChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = data => {
        const option = {
            title: {
                text: '哆啦A夢人氣角色',
                subtext: '人氣角色統計',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: '喜歡比例',
                    type: 'pie',
                    radius: '50%',
                    data: data
                }
            ]
        }
        return pieChart.setOption(option)
    }

    // 封裝resize，RWD會使用到
    const resize = () => pieChart.resize()

    return { setOption, resize }
}

export default usePie