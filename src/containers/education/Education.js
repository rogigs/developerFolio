import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {usePortfolio} from "../../hooks/usePortofolio";
import {CONTAINERS, SHOW_CONTAINER} from "../../utils/containers";

export default function Education() {
  const {texts} = usePortfolio();
  const {schools, title} = texts(CONTAINERS.EDUCATION_INFO) || {};

  if (!SHOW_CONTAINER[CONTAINERS.EDUCATION_INFO]) {
    return null;
  }

  return (
    <div className="education-section" id="education">
      <h1 className="education-heading">{title}</h1>
      <div className="education-card-container">
        {schools?.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </div>
  );
}
