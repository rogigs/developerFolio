import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {CONTAINERS, SHOW_CONTAINER} from "../../utils/containers";
import {usePortfolio} from "../../hooks/usePortofolio";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const {texts} = usePortfolio();
  const {title, experiences} =
    texts(CONTAINERS.WORK_EXPERIENCE, {interpolation: {escapeValue: false}}) ||
    {};
  console.log("🚀 ~ WorkExperience ~ experiences:", experiences.length);

  if (!SHOW_CONTAINER[CONTAINERS.WORK_EXPERIENCE]) {
    return null;
  }

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">{title}</h1>
            <div className="experience-cards-div">
              {experiences?.map(card => {
                return (
                  <ExperienceCard
                    key={card.role}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
