import {CONTAINERS} from "../../utils/containers";

const translations = {
  translations: {
    [CONTAINERS.HEADER]: {
      skills: "Habilidades",
      workExperiences: "Experiências",
      projects: "Projetos",
      achievements: "Conquistas",
      blogs: "Blogs",
      talks: "Talks",
      contactMe: "Contate-me"
    },
    [CONTAINERS.GREETING]: {
      username: "Igor Soares",
      title: "Olá, eu sou o Igor",
      subTitle:
        "Um programador de software Full Stack apaixonado 🚀 com experiência na criação de aplicações Web e Mobile com JavaScript, Typescript e Python, utilizando bibliotecas e frameworks incríveis.",
      resumeLink: "" // Set to empty to hide the button
    },
    [CONTAINERS.SOCIAL_MEDIA_LINKS]: {
      github: "https://github.com/rogigs",
      linkedin: "https://www.linkedin.com/in/igor-gomes-developer/",
      gmail: "igorgomes.13ig@gmail.com"
      // Instagram, Twitter and Kaggle are also supported in the links!
      // To customize icons and social links, tweak src/components/SocialMedia
    },
    [CONTAINERS.SKILLS_SECTION]: {
      title: "O que eu faço",
      subTitle: "DESENVOLVEDOR FULL STACK QUE ADORA EXPLORAR TECNOLOGIAS",
      skills: [
        "⚡ Desenvolvimento eficiente de Front End interativos / Interfaces de Usuário para sua Web e Mobile aplicações",
        "⚡ Integração com serviços de terceiro, como Firebase / Vercel"
      ],

      /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

      softwareSkills: [
        {
          skillName: "Html5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "Css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "fab fa-codepen"
        },
        {
          skillName: "ReactJs",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          skillName: "AngularJs",
          fontAwesomeClassname: "fab fa-angular"
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "fab fa-node"
        },
        {
          skillName: "Npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "fas fa-fire"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fab fa-python"
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        }
      ]
    },
    [CONTAINERS.EDUCATION_INFO]: {
      title: "Educação",
      schools: [
        {
          schoolName: "Universidade Presbiteriana Mackenzie",
          logo: "https://media.licdn.com/dms/image/C4D0BAQF5imeMDt71KQ/company-logo_100_100/0/1672861931450/mackenzie1870_logo?e=1707350400&v=beta&t=3YCJo6aVctFfqKgu8prZmWji0GlCPThiq3reTAeoyns",
          subHeader: "Bacharelado em Sistemas de Informação",
          duration: "Agosto de 2019 - Julho de 2023"
        },
        {
          schoolName: "Instituto Técnico de Barueri Brasílio Flores de Azevedo",
          logo: "https://media.licdn.com/dms/image/C4D0BAQGR2sLYI-Lysw/company-logo_100_100/0/1631372085688/itb_barueri_fieb_logo?e=1707350400&v=beta&t=WEtC2qUXy1jgaxwgI6H_t4idIej3PH8PfbQPx5bqDPE",
          subHeader: "Técnico em informática",
          duration: "Janeiro de 2016 - Dezembro de 2018"
        }
      ]
    },

    // TODO: Translate this section
    [CONTAINERS.WORK_EXPERIENCE]: {
      title: "Experiências",
      experiences: [
        {
          role: "Desenvolvedor Front End",
          company: "Juntos Somos Mais",
          companylogo:
            "https://media.licdn.com/dms/image/C4D0BAQHc-kpH9aocSw/company-logo_100_100/0/1630574382555/juntos_somos_mais_logo?e=1707350400&v=beta&t=BL3LCSvOWKw60q1FvOfdbgrwoHJpbblHFnP9o5tktN4",
          date: "Maio de 2021 – Janeiro de 2023",
          descBullets: [
            "Integration as an active member of an agile development team, following methodologies such as Scrum and Kanban",
            "Conducting daily code reviews, providing constructive feedback to team members, and ensuring code quality and adherence to programming best practices.",
            <>
              Monitoring and tracking applications using technologies such as
              <strong>Sentry</strong> and <strong>Kibana</strong>
            </>,
            <>
              Contributing to the construction of features for the web and
              mobile platform, using technologies such as <strong>React</strong>
              (with <strong>JavaScript</strong> and <strong>TypeScript</strong>
              ), <strong>Next.js</strong>, <strong>React Native</strong>,
              <strong>Jest</strong>, <strong>testing-library</strong>, and
              <strong>Google Analytics</strong>.
            </>,
            <>
              Contributing to open source:
              <a href="https://github.com/juntossomosmais/frontend-guideline">
                https://github.com/juntossomosmais/frontend-guideline
              </a>
            </>,
            <>
              Contribution as a Front End mentor in the ConstruDelas developer
              training project
            </>
          ]
        },
        {
          role: "Estagiário em Desenvolvimento WEB",
          company: "Cromai",
          companylogo:
            "https://media.licdn.com/dms/image/C4D0BAQErtma_73Xbdw/company-logo_100_100/0/1675793211338/cromai_logo?e=1707350400&v=beta&t=zavJABHwNlSaPsTt8ZqP40fEgg30Ma10mL0fjCJxuMA",
          date: "Janeiro de 2020 – Maio 2021",
          descBullets: [
            "Integration as an active member of an agile development team, following methodologies such as Scrum and Kanban",
            <>
              Contributing to the construction of a web and desktop platform,
              using technologies such as <strong>React</strong>,
              <strong>Electron</strong>, <strong>Redux.js</strong>,
              <strong>Jest</strong>, <strong>Enzyme</strong>,
              <strong>Material UI</strong>, <strong>Flask</strong>, and
              <strong>PyTest</strong>. During my tenure, I played a key role in
              the development and implementation of various features, including:
            </>
          ]
        }
      ]
    },
    [CONTAINERS.PROJECTS_GITHUB]: {
      title: "Meus Projetos no Github",
      textButton: "Ver mais Projetos"
    },
    [CONTAINERS.CONTRIBUTIONS_OPEN_SOURCE]: {
      title: "Contribuições em Projetos Open Source ",
      textButton: "Ver mais Projetos"
    },
    [CONTAINERS.CONTACT_INFO]: {
      title: "Contate-me ☎️",
      subtitle:
        "Discutir um projeto ou somente para dizer oi? Minha caixa de entrada está aberta para conversas",
      number: "+92-0000000000",
      emailAddress: "igorgomes.13ig@gmail.com" // TODO: change email
    }
  }
};

export default translations;
