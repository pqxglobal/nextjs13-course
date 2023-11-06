'use client'

import Image from 'next/image'
import factory from '../../public/next.svg'

export default function Home() {
  return <div className='w-[800px]'>
    <Image quality={50} src={factory} alt="factory" />
  </div>
}
