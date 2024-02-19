/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Igor Soares",
  title: "Hi all, I'm Igor",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript, Typescript and Python using cool libraries and frameworks."
  ),
  resumeLink: "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rogigs",
  linkedin: "https://www.linkedin.com/in/igor-gomes-developer/",
  gmail: "igorgomes.13ig@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase / Vercel")
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
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mackenzie Presbiterian University",
      logo: "https://media.licdn.com/dms/image/C4D0BAQF5imeMDt71KQ/company-logo_100_100/0/1672861931450/mackenzie1870_logo?e=1707350400&v=beta&t=3YCJo6aVctFfqKgu8prZmWji0GlCPThiq3reTAeoyns",
      subHeader: "Bachelor's Degree in Information Systems",
      duration: "August 2019 - July 2023"
    },
    {
      schoolName: "Technical education in IT",
      logo: "https://media.licdn.com/dms/image/C4D0BAQGR2sLYI-Lysw/company-logo_100_100/0/1631372085688/itb_barueri_fieb_logo?e=1707350400&v=beta&t=WEtC2qUXy1jgaxwgI6H_t4idIej3PH8PfbQPx5bqDPE",
      subHeader: "Technical Institute of Barueri Brasílio Flores de Azevedo",
      duration: "January 2016 - December 2018"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Front End",
      company: "Juntos Somos Mais",
      companylogo:
        "https://media.licdn.com/dms/image/C4D0BAQHc-kpH9aocSw/company-logo_100_100/0/1630574382555/juntos_somos_mais_logo?e=1716422400&v=beta&t=5dwPAGYwRq25ypqoByPaV2dwiRGZwVWiFMv9s0US51k",
      date: "May 2021 – January 2023",
      descBullets: [
        "Integration as an active member of an agile development team, following methodologies such as Scrum and Kanban",
        "Conducting daily code reviews, providing constructive feedback to team members, and ensuring code quality and adherence to programming best practices.",
        <>
          Monitoring and tracking applications using technologies such as{" "}
          <strong>Sentry</strong> and <strong>Kibana</strong>
        </>,
        <>
          Contributing to the construction of features for the web and mobile
          platform, using technologies such as <strong>React</strong> (with{" "}
          <strong>JavaScript</strong> and <strong>TypeScript</strong>),{" "}
          <strong>Next.js</strong>, <strong>React Native</strong>,{" "}
          <strong>Jest</strong>, <strong>testing-library</strong>, and{" "}
          <strong>Google Analytics</strong>.
        </>,
        <>
          Contributing to open source:{" "}
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
      role: "Web Development Intern",
      company: "Cromai",
      companylogo:
        "https://media.licdn.com/dms/image/C4D0BAQErtma_73Xbdw/company-logo_100_100/0/1675793211338/cromai_logo?e=1707350400&v=beta&t=zavJABHwNlSaPsTt8ZqP40fEgg30Ma10mL0fjCJxuMA",
      date: "May 2017 – May 2018",
      descBullets: [
        "Integration as an active member of an agile development team, following methodologies such as Scrum and Kanban",
        <>
          Contributing to the construction of a web and desktop platform, using
          technologies such as <strong>React</strong>, <strong>Electron</strong>
          , <strong>Redux.js</strong>, <strong>Jest</strong>,{" "}
          <strong>Enzyme</strong>, <strong>Material UI</strong>,{" "}
          <strong>Flask</strong>, and <strong>PyTest</strong>. During my tenure,
          I played a key role in the development and implementation of various
          features, including:
        </>
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
