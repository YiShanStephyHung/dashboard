<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import useBar from "@/components/barChart";
import useLine from "@/components/lineChart";
import useDoughnut from "@/components/doughnutChart";
import useMultiline from "@/components/multilineChart";
import useRadar from "@/components/radarChart";
import useGeo from "@/components/GeoChart";

// bar
const barchartContainer = ref(null);
onMounted(() => {
  const { setOption, resize } = useBar(barchartContainer.value);
  setOption(
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    [120, 200, 150, 80, 70, 110, 130]
  );
  window.addEventListener("resize", () => {
    resize();
  });
});

// line
const linechartContainer = ref(null);
onMounted(() => {
  const { setOption, resize } = useLine(linechartContainer.value);
  setOption(
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    [520, 632, 701, 834, 1090, 1230, 1320]
  );
  window.addEventListener("resize", () => {
    resize();
  });
});

// doughnut
const doughnutchartContainer = ref(null);
onMounted(() => {
  const { setOption, resize } = useDoughnut(doughnutchartContainer.value);
  setOption([
    { value: 6890, name: "Japan", itemStyle: { color: "#71A5DE" } },
    { value: 4500, name: "Korea", itemStyle: { color: "#83B0E1" } },
    { value: 3600, name: "Vietnam", itemStyle: { color: "#AECBEB" } },
  ]);
  window.addEventListener("resize", () => {
    resize();
  });
});

// radar
const radarchartContainer = ref(null);
onMounted(() => {
  const { setOption, resize } = useRadar(radarchartContainer.value);
  setOption(
    [
      { name: "Scenery", max: 100 },
      { name: "Cost", max: 100 },
      { name: "Convenience", max: 100 },
      { name: "Entertainment", max: 100 },
      { name: "Safety", max: 100 },
    ],
    [
      {
        value: [85, 70, 50, 45, 85],
        name: "Route A",
      },
      {
        value: [55, 60, 95, 30, 65],
        name: "Route B",
      },
    ]
  );
  window.addEventListener("resize", () => {
    resize();
  });
});

// multiline
const multilinechartContainer = ref(null);
onMounted(() => {
  const { setOption, resize } = useMultiline(multilinechartContainer.value);
  setOption(
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    [
      {
        name: "Route A",
        value: [820, 932, 901, 934, 1290, 1330, 1320],
      },
      {
        name: "Route B",
        value: [80, 199, 599, 209, 123, 1280, 1420],
      },
    ]
  );
  window.addEventListener("resize", () => {
    resize();
  });
});

// weather
let weatherIcon = ref(null);
let temp = ref(null);
let feelsLikeTemp = ref(null);
let humidity = ref(null);
let getWeatherData = () => {
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/forecast?q=Taichung&id=524901&appid=0c905d8ac9eb9133ec03c2d5e66cbd61&units=metric"
    )
    .then(function (res) {
      console.log(res);
      weatherIcon.value = res.data.list[0].weather[0].icon;
      temp.value = Math.round(res.data.list[0].main.temp * 10) / 10 + "°C";
      feelsLikeTemp.value =
        Math.round(res.data.list[0].main.feels_like * 10) / 10 + "°C";
      humidity.value = res.data.list[0].main.humidity + "%";
      console.log(weatherIcon, temp, feelsLikeTemp, humidity);
    })
    .catch(function (error) {
      console.log(error);
    });
};
onMounted(() => {
  getWeatherData();
});

// table
const columns = [
  { name: "item", label: "Item", field: "item", align: "left", sortable: true },
  { name: "rate", label: "Rate", field: "rate", align: "left", sortable: true },
  {
    name: "category",
    label: "Category",
    field: "category",
    align: "left",
    sortable: true,
  },
  {
    name: "recommend",
    label: "Recommend",
    field: "recommend",
    align: "left",
    sortable: true,
  },
  { name: "cost", label: "Cost", field: "cost", align: "left", sortable: true },
];
const rows = [
  {
    item: "Ceramic Tea Set",
    rate: 9.5,
    category: "Gift",
    recommend: 9,
    cost: "$$$",
  },
  {
    item: "Chinese Name Stamp",
    rate: 6.0,
    category: "Gift",
    recommend: 8,
    cost: "$$",
  },
  {
    item: "Sun cakes",
    rate: 8.5,
    category: "Food",
    recommend: 7,
    cost: "$",
  },
  {
    item: "Candied Fruits",
    rate: 5,
    category: "Food",
    recommend: 5,
    cost: "$$",
  },
  {
    item: "Paper Umbrellas and Lanterns",
    rate: 9.5,
    category: "Gift",
    recommend: 8,
    cost: "$$$",
  },
  {
    item: "Pineapple cake",
    rate: 9.5,
    category: "Food",
    recommend: 9,
    cost: "$$",
  },
  {
    item: "Taiwanese peanut nougat",
    rate: 8.0,
    category: "Food",
    recommend: 7,
    cost: "$",
  },
  {
    item: "Glass art and handicrafts",
    rate: 9.0,
    category: "Gift",
    recommend: 8,
    cost: "$$",
  },
];

// geo
const geochartContainer = ref(null);
onMounted(() => {
  const { setOption, resize } = useGeo(geochartContainer.value);
  setOption([
    { name: "基隆市", value: 362094 },
    { name: "新北市", value: 4041869 },
    { name: "台北市", value: 2511291 },
    { name: "桃園市", value: 2319118 },
    { name: "新竹縣", value: 589788 },
    { name: "新竹市", value: 456535 },
    { name: "苗栗縣", value: 534432 },
    { name: "台中市", value: 2847264 },
    { name: "南投縣", value: 476675 },
    { name: "彰化縣", value: 1237760 },
    { name: "雲林縣", value: 659564 },
    { name: "嘉義市", value: 263369 },
    { name: "嘉義縣", value: 483902 },
    { name: "台南市", value: 1859800 },
    { name: "高雄市", value: 2737530 },
    { name: "屏東縣", value: 794514 },
    { name: "宜蘭縣", value: 449767 },
    { name: "花蓮縣", value: 317252 },
    { name: "台東縣", value: 211357 },
    { name: "金門縣", value: 144173 },
    { name: "澎湖縣", value: 107745 },
    { name: "連江縣", value: 14034 },
  ]);
  window.addEventListener("resize", () => {
    resize();
  });
});
</script>

<template>
  <div style="min-height: calc(100vh - 50px); background-color: #ecf5ff">
    <div class="row">
      <q-card class="col column panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Weekly Sales</div>
        <div class="row items-center">
          <div class="col-4 highlightText">47+</div>
          <div
            class="col-8"
            ref="barchartContainer"
            style="height: 100px"
          ></div>
        </div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Total Orders</div>
        <div class="row items-center">
          <div class="col-4 highlightText">53.7K</div>
          <div
            class="col-8"
            ref="linechartContainer"
            style="height: 100px"
          ></div>
        </div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Top Routes</div>
        <div ref="doughnutchartContainer" style="height: 100px"></div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Weather</div>
        <div class="row items-center q-my-md">
          <img
            :src="`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`"
            style="width: 30%"
          />
          <div class="column q-ml-md">
            <div>Temperature: {{ temp }}</div>
            <div>RealFeel: {{ feelsLikeTemp }}</div>
            <div>Humidity: {{ humidity }}</div>
          </div>
        </div>
      </q-card>
    </div>

    <div class="row">
      <q-card class="col-4 panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Route Analysis</div>
        <div class="row items-center">
          <div
            class="col"
            ref="radarchartContainer"
            style="height: 200px"
          ></div>
        </div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Daily Visitors</div>
        <div class="row items-center">
          <div
            class="col"
            ref="multilinechartContainer"
            style="height: 200px"
          ></div>
        </div>
      </q-card>
    </div>

    <div class="row" style="min-height: 460px">
      <q-card class="col panelContainer q-my-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Best Souvenir</div>
        <div class="row items-center">
          <q-table
            class="col q-mt-md"
            :rows="rows"
            :columns="columns"
            row-key="name"
            rows-per-page-label="Rows per page:"
            :rows-per-page-options="[5, 10]"
          />
        </div>
      </q-card>

      <q-card class="col panelContainer q-my-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Populations</div>
        <div class="row items-center">
          <div class="col" ref="geochartContainer" style="height: 300px"></div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panelContainer {
  background-color: white;
  box-shadow: 3px 3px 1px 1px rgba(200, 200, 200, 0.2);
}

.panelTitle {
  max-height: 20px;
  font-size: 14px;
}

.highlightText {
  font-size: 20px;
}
</style>
