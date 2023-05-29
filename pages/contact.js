import dynamic from 'next/dynamic';
const ContactText = dynamic(
  () => import('@/components/textComponents/ContactText'),
  { ssr: false }
)

export default function Contact() {
    return (
      <main className='w-[85%] sm:w-[80%] 2xl:w-[1264px] m-auto flex'>
        <ContactText />
      </main>
    );
  }