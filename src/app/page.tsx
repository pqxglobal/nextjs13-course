import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My page title',
  description: 'This is a description',
  openGraph: {
    title: 'My page title',
    description: 'This is a description',
    url: "mywebsite.com",
    siteName: "Codewithguillaume",
    images: [
      {
        url: '/mywebsite.png',
        width: 1260,
        height: 800,
      }
    ]
  },
}

export default function Home() {
  return <main>Main Page</main>
}
