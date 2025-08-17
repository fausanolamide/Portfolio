
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  aiquizedu,
  project2,
  nokuex,
  youtube_d,
  project3,
  mysql,
  express,
  aws,
  mui,
  // python,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  academia,
} from '../assets'



export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company_name: "Contract / Freelance",
    // icon: "fiverr",
    iconBg: "#E6DEDD",
    date: "April 2019 – 2020",
    points: [
      "Collaborated with senior developers to build and maintain web applications using Python Flask and Vue.js.",
      "Developed frontend components and integrated them with backend APIs, enhancing responsiveness and performance.",
      "Implemented CRUD functionalities, user authentication, and role-based access control.",
      "Wrote unit and integration tests using PyTest and Jest to ensure software stability.",
      "Designed and optimized MySQL/PostgreSQL database schemas.",
      "Participated in Agile sprints and code reviews.",
      "Deployed applications to Heroku and Netlify."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Haflami Gng Technologies",
    icon: "backend",
    iconBg: "#383E56",
    date: "March 2021 – April 2023",
    points: [
      "Developed scalable backend APIs using Flask, Django, and Golang (Gin).",
      "Designed RESTful and GraphQL endpoints serving mobile and web platforms.",
      "Improved database performance and query speed by 50%.",
      "Integrated services like Stripe, Paystack, Firebase, SendGrid, and Twilio.",
      "Handled background processing with Celery and Redis.",
      "Enhanced system reliability with structured logging and monitoring.",
      "Implemented CI/CD pipelines and containerization with Docker and AWS EC2."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelance / Contract",
    icon: "frontend",
    iconBg: "#E6DEDD",
    date: "May 2021 – August 2023",
    points: [
      "Built responsive, accessible interfaces using React.js, Vue.js, and Tailwind CSS.",
      "Translated Figma designs into pixel-perfect components.",
      "Managed state using Redux, Context API, and Vuex.",
      "Improved performance using lazy loading, code splitting, and image compression.",
      "Maintained reusable component libraries for cross-project development.",
      "Enhanced user experience and reduced support tickets by 20%."
    ],
  },
  {
    title: "Senior Mobile Developer (React Native)",
    company_name: "Freelance / Contract",
    icon: "mobile",
    iconBg: "#383E56",
    date: "January 2022 – 2024",
    points: [
      "Built cross-platform mobile apps for Android and iOS using React Native.",
      "Integrated REST APIs and Firebase for real-time capabilities.",
      "Implemented Redux and Context API for scalable state management.",
      "Built critical features including authentication, payments, and geolocation.",
      "Published apps to Google Play and App Store using Expo and CodePush.",
      "Wrote robust unit and end-to-end tests using Jest and Detox."
    ],
  },
  {
    title: "Senior Software / Full Stack Developer",
    company_name: "Haflami Gng Technologies",
    icon: "fullstack",
    iconBg: "#E6DEDD",
    date: "2023 – 2025",
    points: [
      "Developed and maintained full-stack apps using Flask, Django, and Golang.",
      "Increased user engagement by 60% through optimized APIs and UI/UX improvements.",
      "Built and deployed automation scripts and CLI tools in Python.",
      "Created internal tools and Blender Add-ons for the animation pipeline.",
      "Optimized SQL schemas and reduced load times through backend refactoring.",
      "Improved CI/CD pipeline to reduce release times by 80%.",
      "Contributed to a 25% revenue increase through performance improvements."
    ],
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Fausan proved me wrong.",
    name: "Micromist",
    designation: "Ecommerce",
    company: "AiQuizedu",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fausan does.",
    name: "Abdul Ramdy",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Fausan optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "James Dev",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Nokuex",
    description:
      "Nokuex is a crypto web-based platform that allows users to search, explore the crypto space.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: nokuex,
    source_code_link: "https://github.com/",
  },
  {
    name: "Youtube Video Downloader",
    description:
      "An Application to help you download any resolution of Youtube video for free to your prefered location ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "white-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
 
    ],
    image: youtube_d,
    source_code_link: "https://github.com/",
  },
  {
    name: "AiQuizedu",
    description:
      "AiQuizedu is your your personalized study companion for exam success",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "red-text-gradient",
      },
      {
        name: "docker",
        color: "red-text-gradient",
      },

    ],
    image: aiquizedu,
    source_code_link: "https://github.com/",
  },
  {
    name: "Acadelit",
    description:
      "Acadelit is a comprehensive school management system designed for students, teachers, and administrators  ",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "Golang",
        color: "green-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
    ],
    image: academia,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
