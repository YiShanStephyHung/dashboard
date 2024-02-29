<script setup>
import * as echarts from "echarts";
import { onMounted, ref, nextTick } from "vue";

const props = defineProps({
  title: { type: String, require: true },
  mark: { type: Number, require: true },
  low: { type: Number, require: true },
  mid: { type: Number, require: true },
  high: { type: Number, require: true },
  data: { type: Number, require: true },
});

const bulletChart = ref(null);
function createBulletChart() {
  const bullet_chart = echarts.init(bulletChart.value);
  const option = {
    grid: {},
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
      data: [props.title],
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
            value: props.data,
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
              xAxis: props.mark,
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
            value: props.low,
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
            value: props.mid,
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
            value: props.high,
            itemStyle: {
              color: "#E7C374",
              borderRadius: [0, 6, 6, 0],
            },
          },
        ],
      },
    ],
  };

  bullet_chart.setOption(option);
  window.addEventListener("resize", () => {
    bullet_chart.resize();
  });
}
onMounted(() => {
  nextTick(() => {
    createBulletChart();
  });
});
</script>

<template>
  <div>
    <div ref="bulletChart" style="height: 100px"></div>
  </div>
</template>

<style lang="scss" scoped></style>
