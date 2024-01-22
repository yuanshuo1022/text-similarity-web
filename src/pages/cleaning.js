import Image from 'next/image'
import {TextCleaning} from '../components/component/text-cleaning'
import {Footer} from "@/components/component/footer"

export default function TextClean() {
  return (
    <div>
      <TextCleaning />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
