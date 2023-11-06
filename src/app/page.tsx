'use client'

import Header from '@/components/Header'
import Logo from '@/components/Header/Logo'

export default function Home() {
  return (
    <div>
      <Header name={'Guillaume'} age={35} isMan={true}>
        <Logo />
      </Header>
      
    </div>
  )
}
