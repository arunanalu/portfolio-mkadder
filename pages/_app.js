import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '../i18n';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  )
}
