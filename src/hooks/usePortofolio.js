import {useTranslation} from "react-i18next";

export const usePortfolio = () => {
  const {i18n, t} = useTranslation();

  const language = i18n.language;
  const handleChangeLanguage = language => () => {
    i18n.changeLanguage(language);
  };

  const texts = path => t(path, {returnObjects: true});

  return {language, handleChangeLanguage, texts};
};
