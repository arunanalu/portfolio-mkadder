import ImagesGrid from '@/components/ImagesGrid'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ imagesUrls, teste }) {

  return (
    <main className='gallery-ct w-[85%] sm:w-[80%] 2xl:w-[1264px] m-auto'>
      <ImagesGrid imagesUrls={imagesUrls} />
    </main>
  )
}

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_API_URL
  const token = process.env.NEXT_PUBLIC_API_TOKEN
  let data = await fetch(`${url}/api/photos/?limit=10&offset=0`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Space-App-Key': token,
    }
  })
  data = await data.json()
  const imagesUrls = data.items.map((item) => {
    return {
      id: item.id,
      alt: item.file_name,
      src: `${url}/api${item.url}/`,
    }
  })
  return {
    props: {
      imagesUrls,
    },
    revalidate: 60,
  }
}
