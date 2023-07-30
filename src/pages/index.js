import Header from '@/src/components/header'
import Footer from '@/src/components/footer'
import Head from 'next/head'
import Landing from './landing'

export default function Main() {
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"  strategy="beforeInteractive"  async></script>
      </Head>
      <main>
        <Header />
        <Landing />
        <Footer />
      </main>
    </>
  )
}
