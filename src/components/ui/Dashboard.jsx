import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicEchartsDashboard = dynamic(
  () => import('@/components/ui/Dashboard'),
  { ssr: false }
);

const EchartsDashboard = () => {
  useEffect(() => {
 <DynamicEchartsDashboard/>
    // 在浏览器环境中执行
    if (typeof window !== 'undefined') {
      // 获取容器
      var chartDom = document.getElementById('echarts-container');
      // 如果容器存在，初始化 ECharts 实例
      if (chartDom) {
        var echarts = require('echarts');
        var myChart = echarts.init(chartDom);
        var option;

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
                formatter: '{value}'
              },
              data: [
                {
                  value: 50,
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
  }, []);

  return <div id="echarts-container" style={{ width: '100%', height: '400px' }}></div>;
};

export default EchartsDashboard;
