// // components/WordCloud.jsx
// import React, { useEffect } from 'react';
// import ReactEcharts from 'echarts-for-react';

// const ScatterDiagram = ({ wordCloudData }) => {
//   useEffect(() => {
//     // 在这里可以进行一些 ECharts 相关的初始化设置
//     // 例如：自定义主题、调整图表大小等
//   }, []);

//   const getOption = () => {
//     // 根据 wordCloudData 生成 ECharts 的 option 配置
//     // 这里的示例 option 仅供参考，具体需要根据实际数据结构进行调整
//     return {
//       series: [{
//         type: 'wordCloud',
//         shape: 'circle',
//         gridSize: 20,
//         sizeRange: [12, 50],
//         rotationRange: [-90, 90],
//         textStyle: {
//           normal: {
//             color: function () {
//               // 随机生成词云颜色
//               return 'rgb(' + [
//                 Math.round(Math.random() * 255),
//                 Math.round(Math.random() * 255),
//                 Math.round(Math.random() * 255)
//               ].join(',') + ')';
//             }
//           }
//         },
//         data: wordCloudData, // 根据实际数据结构传入词云数据
//       }]
//     };
//   };

//   return (
//     <ReactEcharts option={getOption()} style={{ height: '400px', width: '100%' }} />
//   );
// };

// export default ScatterDiagram;
