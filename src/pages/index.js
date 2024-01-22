import Image from 'next/image'
import {TextSimiler} from '../components/component/text-similer'
import {Footer} from "@/components/component/footer"


export default function Home() {
  return (
    <div>
      <TextSimiler />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
