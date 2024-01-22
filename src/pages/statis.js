import Image from 'next/image'
import {WordVectorAnalysis} from '../components/component/statis'
import {Footer} from "@/components/component/footer"

//统计页面
export default function WordVectorAnaly() {
  return (
    <div>
      <WordVectorAnalysis />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
