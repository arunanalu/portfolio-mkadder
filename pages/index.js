import ImagesGrid from '@/components/ImagesGrid'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='flex-col content-center justify-center'>
      <div className='gallery-ct border-4 border-sky-500 w-[95%] sm:w-[80%] 2xl:w-[1264px] m-auto'>
        <ImagesGrid />
      </div>
    </main>
  )
}
