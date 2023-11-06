'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const router = useRouter()

  console.log(router)

  return (
    <div>
      <h1>my list of profiles</h1>
      <div>
        <Link href="/profile/1">Profile 1</Link>
        <Link href="/profile/2">Profile 2</Link>
        <Link
          href={{
            pathname: '/profile/3',
            query: {
              userName: 'Guillaume',
              userId: 12,
              person: JSON.stringify({
                age: 18,
              }),
            },
          }}
        >
          <div>A big square where I got some text</div>
        </Link>
        <a href="https://codewithguillaume.com">Codewithguillaume&apos;s school online</a>
      </div>
    </div>
  )
}
