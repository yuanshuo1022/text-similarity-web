import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { NavBar } from "./header";
import { inferWord } from "@/app/api/api";


export function WordAssociation() {
  const [singleWord, setSingleWord] = useState('');
  const [associatedWordsSingle, setAssociatedWordsSingle] = useState([]);

  const handleSingleWordAssociation = async () => {
    try {
        if(singleWord!==""){
            const result = await associateWords(singleWord, 20);
            if(result.code==200){
                setAssociatedWordsSingle(result.similar_word);
            }else{
                alert("该词无法推理出关联词")
            }
        }
    } catch (error) {
      console.error('Failed to get associated words:', error);
    }
  };

  const [inferenceWord, setInferenceWord] = useState(['']);//推理词
  const [inferencedWord, setInferencedWord] = useState(['']);//被推理词
  const [willInferenceWord, setWillInferenceWord] = useState(['']);//将被推理词
  const [willInferredWord, setWillInferredWord] = useState(['']);//将被推理词

  const handleWordInference = async () => {
    try {
      const result = await inferWord(inferenceWord,inferencedWord,willInferenceWord);
      setWillInferredWord(result.inference_words);
    } catch (error) {
      console.error('Failed to infer word:', error);
    }
  };


  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-r from-[#f3f4f6] to-[#a1c9f1] text-[#2d3748] font-sans">
      <NavBar />

      <Card className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-[#edf2f7] to-[#a1c9f1] border border-gray-200 border-[#2d3748] dark:border-gray-800">
        <CardHeader className="mb-4">
          <h2 className="text-2xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] inline-block pb-1">词关联</h2>
        </CardHeader>
        <CardContent>
          <input
            type="text"
            className="border rounded-lg w-full h-10 p-2 bg-[#f7fafc] text-[#2d3748] font-sans border-[#2d3748] shadow-md mb-4"
            value={singleWord}
            onChange={(e) => setSingleWord(e.target.value)}
            placeholder="请输入单个词" />

          <Button
            className="w-full h-12 my-2 bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-[#f3f4f6] rounded-lg shadow-md border-2 border-[#4a5568] hover:from-[#2d3748] hover:to-[#4a5568] active:scale-95"
            onClick={handleSingleWordAssociation}>
            获取关联词
          </Button>

          <p aria-label="Associated Words" className="text-lg">
            {associatedWordsSingle.map((wordData, index) => (
                <div key={index} className="mb-2 flex items-baseline">
                <span className="font-bold mr-2">词语:</span>
                <span className="word-container">{wordData[0]}</span>
                <span className="ml-4 font-bold">关联度:</span>
                <span className="ml-2">{Number(wordData[1]*100).toFixed(4)}%</span>
                </div>
            ))}
            </p>

        </CardContent>
      </Card>

      <Card className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-[#edf2f7] to-[#a1c9f1] border border-gray-200 border-[#2d3748] dark:border-gray-800">
        <CardHeader className="mb-4">
          <h2 className="text-2xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] inline-block pb-1">词推理</h2>
        </CardHeader>
        <CardContent>
        <div className="flex space-x-4 mb-4">
            <input  
              type="text"
              className="border rounded-lg w-full h-10 p-2 bg-[#f7fafc] text-[#2d3748] font-sans border-[#2d3748] shadow-md"
              value={inferenceWord}
              onChange={(e) => setInferenceWord(e.target.value)}
              placeholder="推理词" ></input>
             <p  className=" w-full h-10 p-2"> 推理出</p>
              <input  
              type="text"
              className="border rounded-lg w-full h-10 p-2 bg-[#f7fafc] text-[#2d3748] font-sans border-[#2d3748] shadow-md"
              value={inferencedWord}
              onChange={(e) => setInferencedWord(e.target.value)}
              placeholder="被推理词" ></input>
        </div>
          <div className="flex space-x-4 mb-4">
              <input  
              type="text"
              className="border rounded-lg w-full h-10 p-2 bg-[#f7fafc] text-[#2d3748] font-sans border-[#2d3748] shadow-md"
              value={willInferenceWord}
              onChange={(e) => setWillInferenceWord(e.target.value)}
              placeholder="请输入推理词" ></input>
          </div>

          <Button
            className="w-full h-12 my-2 bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-[#f3f4f6] rounded-lg shadow-md border-2 border-[#4a5568] hover:from-[#2d3748] hover:to-[#4a5568] active:scale-95"
            onClick={handleWordInference}>
            进行推理
          </Button>

          <p aria-label="Inferred Word" className="text-lg">
            推理结果可能为: </p>
           {willInferredWord.map((wordData, index) => (
                <span key={index}className="ml-4 font-bold">{wordData}</span>
            ))}
         
        </CardContent>
      </Card>
    </div>
  );

}
