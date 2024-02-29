<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import useDoughnut from "@/components/doughnutChart";
import useLine from "@/components/lineChart";
import useMultiline from "@/components/multilineChart";
import useRadar from "@/components/radarChart";
import useBar from "@/components/barChart";
import useGeo from "@/components/GeoChart";

const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
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

// doughnut
const doughnutchartContainer = ref(null);
onMounted(() => {
  const { setOption, resize } = useDoughnut(
    doughnutchartContainer.value,
    "26M"
  );
  setOption([
    { value: 2200, name: "哆啦A夢", itemStyle: { color: "#46B3E6" } },
    { value: 2200, name: "小夫", itemStyle: { color: "#2E279D" } },
    { value: 4400, name: "胖虎", itemStyle: { color: "#4D80E4" } },
  ]);
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
    [820, 932, 901, 934, 1290, 1330, 1320]
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
        name: "AAA",
        value: [820, 932, 901, 934, 1290, 1330, 1320],
      },
      {
        name: "BBB",
        value: [8, 9, 9, 9, 12, 133, 132],
      },
    ]
  );
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
      { name: "Look", max: 100 },
      { name: "Photo", max: 100 },
      { name: "System", max: 100 },
      { name: "Performance", max: 100 },
      { name: "Screen", max: 100 },
    ],
    [
      {
        value: [85, 90, 90, 95, 95],
        name: "A Phone",
      },
      {
        value: [95, 80, 95, 90, 93],
        name: "Another Phone",
      },
    ]
  );
  window.addEventListener("resize", () => {
    resize();
  });
});

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

  //   document.getElementById("w_temp").innerHTML = temp;
  //   document.getElementById("w_feelsLike").innerHTML =
  //     "體感溫度 " + feelsLikeTemp;
  //   document.getElementById("w_humid").innerHTML =
  //     "濕度 " + "<br />" + humidity;
  // };
};
onMounted(() => {
  getWeatherData();
});
</script>

<template>
  <div style="min-height: calc(100vh - 50px); background-color: #ecf5ff">
    <div class="row">
      <q-card class="col column panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Weekly Sales</div>
        <div class="row items-center">
          <div class="col-3 highlightText">47+</div>
          <div
            class="col-9"
            ref="barchartContainer"
            style="height: 100px"
          ></div>
        </div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Total Orders</div>
        <div class="row items-center">
          <div class="col-3 highlightText">53.7</div>
          <div
            class="col-9"
            ref="linechartContainer"
            style="height: 100px"
          ></div>
        </div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Market Share</div>
        <div class="row items-center">
          <div
            class="col"
            ref="doughnutchartContainer"
            style="height: 100px"
          ></div>
        </div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Weather</div>
        <div class="row items-start">
          <img
            :src="`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`"
            style="width: 30%"
          />
          <div class="column">
            <div>氣溫：{{ temp }}</div>
            <div>實際體感溫度：{{ feelsLikeTemp }}</div>
            <div>濕度：{{ humidity }}</div>
          </div>
        </div>
      </q-card>
    </div>

    <div class="row">
      <q-card class="col-4 panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Analytics</div>
        <div class="row items-center">
          <div
            class="col"
            ref="radarchartContainer"
            style="height: 200px"
          ></div>
        </div>
      </q-card>

      <q-card class="col panelContainer q-mt-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Multi</div>
        <div class="row items-center">
          <div
            class="col"
            ref="multilinechartContainer"
            style="height: 200px"
          ></div>
        </div>
      </q-card>
    </div>

    <div class="row">
      <q-card class="col panelContainer q-my-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Table</div>
        <div class="row items-center">
          <q-table
            class="col q-mt-md"
            :rows="rows"
            :columns="columns"
            row-key="name"
          />
        </div>
      </q-card>

      <q-card class="col panelContainer q-my-md q-mx-sm q-pa-md">
        <div class="row col panelTitle">Geo</div>
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
