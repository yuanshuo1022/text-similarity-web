// api.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

export const analyzeSimilarity = async (textVector,text1, text2) => {
    // console.log("rext1: "+text1+"\n text2: "+text2)
    // return 99.443322;
  try {
    const response = await axios.post(`${API_BASE_URL}/api/analyze-similarity`, {
      textVector:textVector,
      text1: text1,
      text2: text2
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('请求失败：', error);
    throw error; // 可以选择在这里抛出错误，也可以返回一个默认值或其他处理方式
  }
};
