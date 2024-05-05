
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import {NavBar} from "./header"
import {simpleConvert} from "@/app/api/api"
import React, { useEffect, useState } from 'react';
export function SimpleChinese() {
  const [simpledCN,setSimpledCN]=useState('') //转化后
  const [complexFont ,setComplexFont]=useState('')  //转换前
  const simpleConvertOnClick = async () => {
    try {
      const result = await simpleConvert(complexFont);
      setSimpledCN(result.simple_text)
    } catch (error) {
      // 在这里处理请求失败的情况
      console.error('文本转换失败：', error);
    }
  };
  return (
    (<div
      key="1"
      className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-r from-[#f3f4f6] to-[#a1c9f1] text-[#2d3748] font-sans">
     <NavBar />
      <div className="flex flex-col md:grid md:grid-cols-1 gap-1">
        <Card
          className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-[#edf2f7] to-[#a1c9f1] border border-gray-200 border-[#2d3748] dark:border-gray-800">
          <CardHeader className="mb-4">
            <h2
              className="text-2xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] inline-block pb-1">繁体文本</h2>
          </CardHeader>
          <CardContent>
            <textarea
              aria-label="Input Text 1"
              className="border rounded-lg w-full h-32 p-2 bg-[#f7fafc] text-[#2d3748] font-sans border-[#2d3748] shadow-md"
              id="text1"
              value={complexFont}
              onChange={(e)=>setComplexFont(e.target.value)}
              placeholder="请输入繁体汉字文本" />
          </CardContent>
        </Card>      
        </div>
      <Button
        aria-label="Analyze Button"
        className="w-full h-12 my-6 bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-[#f3f4f6] rounded-lg shadow-md border-2 border-[#4a5568] hover:from-[#2d3748] hover:to-[#4a5568] active:scale-95"
        onClick={simpleConvertOnClick}>
        <MicroscopeIcon className="w-4 h-4 mr-2 inline-block" />
        立即转换
      </Button>
      
      <Card
        className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-[#edf2f7] to-[#a1c9f1] border border-gray-200 border-[#2d3748] dark:border-gray-800">
        <CardHeader className="mb-4">
          <h2
            className="text-2xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] inline-block pb-1">转换结果</h2>
        </CardHeader>
        <CardContent>
          <p aria-label="Analysis Result" className="text-lg">
            {simpledCN}
          </p>
        </CardContent>
      </Card>
  
    </div>)
  );
}



function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}