import TextComponentWithTranslation from "./TextComponentWithTranslation"

const Footer = () => {
  return (
    <footer className="absolute bottom-[-60px] w-full h-10 flex items-end justify-end">
      <div className="mb-2 mr-2">
        <TextComponentWithTranslation textKey="development" />
      </div>
    </footer>
  )
}

export default Footer
