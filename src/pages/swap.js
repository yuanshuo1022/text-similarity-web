import Image from 'next/image'
import {TokenSwap} from '../components/component/token-swap'
import {Footer} from "@/components/component/footer"


export default function Swap() {
  return (
    <div>
      <TokenSwap />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
