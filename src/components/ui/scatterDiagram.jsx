import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
//散点图
const Scatter3DChart = () => {
  const [wordVectorData, setWordVectorData] = useState([]);

  useEffect(() => {
    // 使用 AJAX 获取后端数据
    fetch('/word_vector_data')
      .then(response => response.json())
      .then(data => {
        setWordVectorData(data);
      })
      .catch(error => console.error('Failed to fetch data:', error));
  }, []);

  const options = {
    tooltip: {},
    visualMap: {
      max: 10,
      dimension: 2,
      inRange: {
        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse(),
      },
    },
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    dataset: {
      dimensions: ['word', 'x', 'y', 'z'],
      source: wordVectorData,
    },
    series: [
      {
        type: 'scatter3D',
        symbolSize: 10,
        encode: {
          x: 'x',
          y: 'y',
          z: 'z',
          tooltip: ['word', 'x', 'y', 'z'],
        },
      },
    ],
  };

  return <ReactECharts option={options} style={{ width: '800px', height: '600px' }} />;
};

export default Scatter3DChart;
