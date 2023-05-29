import { useTranslation } from "react-i18next";

export default function AboutText() {
  const { t } = useTranslation()

  return (
    <div className="m-auto text-2xl">{t('soon')}</div>
  );
}