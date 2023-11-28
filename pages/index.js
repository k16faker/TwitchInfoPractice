import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import IdInputForm from '@/components/idinputform'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyNextPractice</title>
        <meta lang='ko' />
      </Head>
      <div>
        <IdInputForm />
      </div>
    </div>
  )
}
