import Image from 'next/image'
import {scatterDiagram} from '../components/component/statis'
import {Footer} from "@/components/component/footer"

//统计页面
export default function WordVectorAnaly() {
  return (
    <div>
      <scatterDiagram />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
