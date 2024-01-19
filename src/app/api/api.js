// api.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api';

export const analyzeSimilarity = async (textVector,text1, text2) => {
    // console.log("rext1: "+text1+"\n text2: "+text2)
    // return 99.443322;
  try {
    const response = await axios.post(`${API_BASE_URL}/analyze-similarity`, {
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

export const cleanText = async (mode,text) => {
  // console.log("rext1: "+text1+"\n text2: "+text2)
  // return 99.443322;
try {
  const response = await axios.post(`${API_BASE_URL}/clean-text`, {
    mode:mode,
    text: text,
  });
  console.log(response)
  return response.data;
} catch (error) {
  console.error('请求失败：', error);
  throw error; // 可以选择在这里抛出错误，也可以返回一个默认值或其他处理方式
}
};

export const splitWord = async (split_word_mode,text) => {
  // console.log("rext1: "+text1+"\n text2: "+text2)
  // return 99.443322;
try {
  const response = await axios.post(`${API_BASE_URL}/split-word`, {
    split_word_mode:split_word_mode,
    text: text,
  });
  console.log(response)
  return response.data;
} catch (error) {
  console.error('请求失败：', error);
  throw error; // 可以选择在这里抛出错误，也可以返回一个默认值或其他处理方式
}
};


export const simpleConvert = async (text) => {
  // console.log("rext1: "+text1+"\n text2: "+text2)
  // return 99.443322;
try {
  const response = await axios.post(`${API_BASE_URL}/simple-convert`, {
    text: text,
   });
  console.log(response)
  return response.data;
  } catch (error) {
    console.error('请求失败：', error);
    throw error; // 可以选择在这里抛出错误，也可以返回一个默认值或其他处理方式
  }
};