import { useTranslation } from "react-i18next";

const TextComponentWithTranslation = ({textKey, uppercase}) => {


  const { t } = useTranslation()
  let text = t(textKey)
  if (uppercase) {
    text = text.toUpperCase()
  }

  return (
      <div suppressHydrationWarning>{text}</div>
  )
}

export default TextComponentWithTranslation
