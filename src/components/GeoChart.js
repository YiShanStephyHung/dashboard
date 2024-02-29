import * as echarts from "echarts";
import dataJSON from "@/goeapi/twCounty2010.geo.json"
// map.on('load', () => {
//   map.addSource('taiwan', {
//     'type': 'geojson',
//     'data': geoData
//   });

//   map.addLayer({
//     'id': 'taiwanLayer',
//     'type': 'line',
//     'source': 'taiwan',
//     'layout': {
//       'line-join': 'round',
//       'line-cap': 'round',
//     },
//     'paint': {
//       'line-color': '#888',
//       'line-width': 2,
//     }
//   });
// });

const useGeo = (element) => {
  // 初始化，傳入HTML element
  const geoChart = echarts.init(element)

  // 封裝相關參數依需求訂製
  const setOption = data => {
    echarts.registerMap('TW', dataJSON);
    const option = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2
      },
      visualMap: {
        left: 'right',
        min: 10000,
        max: 5000000,
        inRange: {
          color: [
            '#21D4FD',
            '#B721FF'
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
      series: [
        {
          name: 'Taiwan PopEstimates',
          type: 'map',
          map: 'TW',
          emphasis: {
            label: {
              show: true
            }
          },
          data: data,
          zoom: 1.25,
          aspectScale: 0.9,
          left: 100
        }
      ]
    };
    return geoChart.setOption(option);
  }

  // 封裝resize，RWD會使用到
  const resize = () => geoChart.resize()

  return { setOption, resize }
}

export default useGeo