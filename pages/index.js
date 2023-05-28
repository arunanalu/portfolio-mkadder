import Header from '@/components/Header'
import ImagesGrid from '@/components/ImagesGrid'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='flex-col content-center justify-center'>
      <div className='gallery-ct w-[85%] sm:w-[80%] 2xl:w-[1264px] m-auto'>
        <ImagesGrid />
      </div>
    </main>
  )
}
