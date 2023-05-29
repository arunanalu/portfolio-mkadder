import dynamic from 'next/dynamic';
const AboutText = dynamic(
  () => import('@/components/textComponents/AboutText'),
  { ssr: false }
)

export default function About() {

  return (
    <main className='w-[85%] sm:w-[80%] 2xl:w-[1264px] m-auto flex'>
      <AboutText />
    </main>
  );
}