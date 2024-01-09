import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolio} from "../../hooks/usePortofolio";
import {CONTAINERS, SHOW_CONTAINER} from "../../utils/containers";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {texts, handleChangeLanguage} = usePortfolio();

  const {title, subTitle, resumeLink} = texts(CONTAINERS.GREETING) || {};
  const {contactMe} = texts(CONTAINERS.HEADER) || {};

  if (!SHOW_CONTAINER[CONTAINERS.GREETING]) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {title} <span className="wave-emoji">{emoji("👋")}</span>
                <div className="greeting-languages">
                  <div onClick={handleChangeLanguage("pt-BR")}>
                    <i className="fas fa-flag"></i>
                    <p>pt-BR</p>
                  </div>
                  <div onClick={handleChangeLanguage("en-US")}>
                    <i className="fas fa-flag-usa"></i>
                    <p>en-US</p>
                  </div>
                </div>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {emoji(subTitle || "")}
              </p>
              <SocialMedia />

              <div className="button-greeting-div">
                <Button text={contactMe} href="#contact" />
                {resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
