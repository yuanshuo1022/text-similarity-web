import React, { useEffect } from 'react';

const EchartsScatter3D = ({ data }) => {
  useEffect(() => {
    // if (typeof window !== 'undefined') {
      const chartDom = document.getElementById('main');
      if (chartDom) {
        import('echarts').then((echarts) => {
          // Dynamically import echarts-gl after echarts is loaded
          import('echarts-gl').then(() => {
            const myChart = echarts.init(chartDom);

            const symbolSize = 2.5;
            const option = {
              grid3D: {},
              xAxis3D: {
                type: 'category',
              },
              yAxis3D: {},
              zAxis3D: {},
              dataset: {
                dimensions: [
                  'Income',
                  'Life Expectancy',
                  'Population',
                  'Country',
                  { name: 'Year', type: 'ordinal' },
                ],
                source: data,
              },
              series: [
                {
                  type: 'scatter3D',
                  symbolSize: symbolSize,
                  encode: {
                    x: 'Country',
                    y: 'Life Expectancy',
                    z: 'Income',
                    tooltip: [0, 1, 2, 3, 4],
                  },
                },
              ],
            };

             // 设置选项
        option && myChart.setOption(option);

            return () => {
              myChart.dispose();
            };
          });
        });
      }
    }
  , [data]);

  return <div id="echarts-scatter-3d-container" style={{ width: '100%', height: '600px' }}></div>;
};

export default EchartsScatter3D;
