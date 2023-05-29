import ImagesGrid from '@/components/ImagesGrid'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='gallery-ct w-[85%] sm:w-[80%] 2xl:w-[1264px] m-auto'>
      <ImagesGrid />
    </main>
  )
}
