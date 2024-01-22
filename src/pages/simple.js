import Image from 'next/image'
import {SimpleChinese} from '../components/component/simple-chinese'
import {Footer} from "@/components/component/footer"


export default function Simple() {
  return (
    <div>
      <SimpleChinese />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
