const fetchPost = async (postId: string) => {
  const post = await fetch(`https://nextjs13-course-nu.vercel.app/api/posts/${postId}`, {
    method: 'GET',
  })
  return post.json()
}

export async function generateMetadata({ params }: any) {
  const { post } = await fetchPost(params.id)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/posts/${params.id}`,
      siteName: 'Codewithguillaume',
      images: [
        {
          url: post.img_url,
          width: 1260,
          height: 800,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  }
}

export default function PostId({ params }: any) {
  // fetch from here with the params id
  return <main>Post {params.id}</main>
}
