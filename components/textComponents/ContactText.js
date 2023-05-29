import { useTranslation } from "react-i18next";

export default function ContactText() {
  const { t } = useTranslation()

  return (
    <div className="m-auto text-2xl">{t('soon')}</div>
  );
}