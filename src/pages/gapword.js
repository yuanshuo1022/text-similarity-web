import Image from 'next/image'
import {GapWord} from '../components/component/gap-word'
import {Footer} from "@/components/component/footer"


export default function Simple() {
  return (
    <div>
      <GapWord />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
