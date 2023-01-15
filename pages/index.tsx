import { Inter } from '@next/font/google'
import Head from 'next/head'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DZ Portfolio</title>
      </Head>

        <main>

          <Header />
          
        </main>
    </>
  )
}
