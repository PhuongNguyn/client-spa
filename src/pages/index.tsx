import BookingComponent from '@/components/BookingComponent'
import Banner from '@/components/HomePage/Banner'
import IntroduceSlice from '@/components/HomePage/IntroduceSlice'
import Recomendation from '@/components/HomePage/Recomendation'
import Trial from '@/components/HomePage/Trial'
import MainLayout from '@/layouts/MainLayout'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <link rel='canonical' href=''/>
      </Head>
      <div className='homepage 2xl:container px-2 mx-auto'>
        <Banner />
        <IntroduceSlice />
        <Trial />
        <BookingComponent />
        <Recomendation />
      </div>
    </>
  )
}

Home.getLayout = (page:ReactNode) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
