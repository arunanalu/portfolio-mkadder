import TextComponentWithTranslation from '@/components/TextComponentWithTranslation';

export default function About() {

  return (
    <main className='w-[85%] sm:w-[80%] 2xl:w-[1264px] m-auto flex'>
      <div className='m-auto text-2xl'>
        <TextComponentWithTranslation textKey='soon' />
      </div>
    </main>
  );
}