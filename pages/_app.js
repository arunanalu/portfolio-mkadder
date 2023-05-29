import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '../i18n';

import { Crimson_Text, Cinzel_Decorative } from 'next/font/google'

const crimsonText = Crimson_Text({
  weight: ['400', '700'], 
  subsets: ['latin'] 
})
const cinzelDecorative = Cinzel_Decorative({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
})

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        .main-title {
          font-family: ${cinzelDecorative.style.fontFamily};
        }

        .menulink {
          font-family: ${crimsonText.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout> 
  )
}
