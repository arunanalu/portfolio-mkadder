import { useTranslation } from "react-i18next";

export default function FooterText() {
  const { t } = useTranslation()

  return (
    <div className="mr-2 mb-2">{t('development')}</div>
  );
}