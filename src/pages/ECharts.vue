<script setup>
// 全項引入
import * as echarts from 'echarts';
// 按需引入
import { usePie } from '@/composables/index.js';

// ===================
// ... 全項引入 ...
// ===================
// 宣告定義一下 echarts
const chart = echarts;
let myChart; // 宣告 myChart 為全局變量
// Echarts
const initChart = () => {
  const el = document.querySelector('.myEcharts');
  if (!el) return;
  myChart = chart.init(el, 'dark');

  // 把配置和數據放這裡
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
        type: 'line',
        smooth: true,
      },
    ],
  };

  myChart.setOption(option);
  // 自適應大小
  window.addEventListener('resize', () => {
    myChart.resize();
  });
};

const resizeHandler = () => myChart.resize();

onMounted(() => {
  initChart();
  window.addEventListener('resize', resizeHandler);
});
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
  myChart.dispose(); // 訪問全局變量 myChart
});
// ===================
// ... 按需引入 ...
// ===================
const main = ref(null);

onMounted(() => {
  const { setOption, resize } = usePie(main.value);
  // 資料
  const data = [
    { value: 2200, name: '哆啦A夢', itemStyle: { color: '#46B3E6' } },
    { value: 2200, name: '小夫', itemStyle: { color: '#2E279D' } },
    { value: 4400, name: '胖虎', itemStyle: { color: '#4D80E4' } },
  ];
  setOption(data);
  window.addEventListener('resize', () => {
    resize();
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    resize();
  });
});
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="echarts-box">
          <div class="myEcharts"></div>
        </div>
      </div>
      <div class="col-12 col-md-6 mt-4 md:mt-0">
        <div class="main" ref="main"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.myEcharts {
  height: 300px;
  width: 100%;
}
.main {
  height: 300px;
  width: 100%;
}
</style>
