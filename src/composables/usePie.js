// 按需引入
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
]);

export const Pie = element => {
  // 初始化，傳入HTML element
  const pieChart = echarts.init(element);

  // 封裝相關參數依需求訂製
  const setOption = data => {
    const option = {
      title: {
        text: '哆啦A夢人氣角色',
        subtext: '人氣角色統計',
        left: 'center',
      },
      // 滑過提示
      tooltip: {
        trigger: 'item',
      },
      // 清單項目
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      // 樹狀圖種類
      series: [
        {
          name: '喜歡比例',
          type: 'pie',
          radius: '50%',
          data,
        },
      ],
    };
    return pieChart.setOption(option);
  };

  // 封裝resize，RWD會使用到
  const resize = () => pieChart.resize();

  onUnmounted(() => {
    pieChart.dispose();
  });
  return { setOption, resize };
};
