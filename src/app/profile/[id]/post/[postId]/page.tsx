'use client'

import { useParams } from 'next/navigation'

export default function ProfileIDPostID() {
  const params = useParams()
  console.log('id =', params.id)
  console.log('postid =', params.postId)
  return <div>my id profile post page</div>
}
