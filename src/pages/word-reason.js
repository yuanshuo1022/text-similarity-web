import Image from 'next/image'
import {WordAssociation} from '../components/component/word-reasoning'
import {Footer} from "@/components/component/footer"


export default function WordAssociations() {
  return (
    <div>
      <WordAssociation />
      <div>
      <Footer/>
      </div>
    </div>
  )
}
