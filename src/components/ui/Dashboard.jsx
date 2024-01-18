import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const EchartsDashboard = ({ value }) => {
  const [chartData, setChartData] = useState(0); // 默认值，你可以根据需要设置

  useEffect(() => {
    // 在浏览器环境中执行
    if (typeof window !== 'undefined') {
      // 获取容器
      var chartDom = document.getElementById('echarts-container');
      // 如果容器存在，初始化 ECharts 实例
      if (chartDom) {
        var echarts = require('echarts');
        var myChart = echarts.init(chartDom);
        var option;

        // 更新图表数据
        setChartData(value);

        // 配置选项
        option = {
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          series: [
            {
              name: 'Pressure',
              type: 'gauge',
              progress: {
                show: true
              },
              detail: {
                valueAnimation: true,
                formatter: chartData
              },
              data: [
                {
                  value: chartData,
                  name: '综合相似度'
                }
              ]
            }
          ]
        };

        // 设置选项
        option && myChart.setOption(option);

        // 在组件卸载时销毁 ECharts 实例
        return () => {
          myChart.dispose();
        };
      }
    }
  }, [value, chartData]); // 在这里添加了 value 和 chartData 作为依赖

  return <div id="echarts-container" style={{ width: '100%', height: '400px' }}></div>;
};

export default EchartsDashboard;
