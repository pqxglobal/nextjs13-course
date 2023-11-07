export default function PostId({ params, searchParams }: any) {
  console.log(searchParams)
  return <main>Post {searchParams.new}</main>
}
