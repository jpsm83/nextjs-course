import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>hello</h1>
      <Link href="/about">link to about</Link>
      <Link href="/users">link to users</Link>
    </main>
  )
}
