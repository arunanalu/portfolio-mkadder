import dynamic from 'next/dynamic'

const FooterText = dynamic(
  () => import('@/components/textComponents/FooterText'),
  { ssr: false }
)

const Footer = () => {
  return (
    <footer className="absolute bottom-[-40px] w-full h-10 flex items-end justify-end">
      <FooterText />
    </footer>
  )
}

export default Footer
