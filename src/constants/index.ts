// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import { s } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  spring,
  nodejs,
  hibernate,
  mysql,
  git,
  docker,
  project1,
  project2,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";


import tap from "../assets/company/Tap.jpg";



   


// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
  id: "education",
  title: "Education",
  link: null,
},

  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Sanjaykumar322004",
  },
] as const;
  
// Services

export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
  name: "Java",
  icon: java,
},


  {
    name: "React JS",
    icon: reactjs,
  },
  {
  name: "Spring",
  icon: spring,
},

  {
  name: "Hibernate",
  icon: hibernate,
},

  {
    name: "Node JS",
    icon: nodejs,
  },
 {
  name: "MySQL",
  icon: mysql,
},

  
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full Stack  Developer Intern",
    company_name: "Tap Academy",
    icon: tap,
    iconBg: "#383E56",
    date: "March 2025 - September 2025",
    points: [
      "Developed full-stack modules using Core Java, JDBC, Servlets, JSP, and Spring Boot.",
      "Built and optimized CRUD operations with MySQL databases.",
      "Created responsive and structured UI components using HTML5, CSS3, JavaScript.",
      "Integrated frontend interfaces with backend REST APIs.",
      "Applied OOP concepts and MVC architecture.",
      "Collaborated using Git/GitHub for version control."  
    ],
  },
  
] as const;


// Education
export const EDUCATION = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    college: "Paavai College of Engineering",
    year: "2021 - 2025",
    cgpa: "8.27 CGPA",
    points: [
      "Published an IJCRT research paper.",
      "Completed a full-time Java Full Stack internship.",
      "Built two major end-to-end full-stack projects.",
      "Solved and practiced 500+ SQL queries.",
    ],
  },
] as const;




// Projects

export const projects = [
  {
    name: "Food Diet Chart Recommendation",
    description:
      "ML system that provides personalized diet and exercise recommendations using BMI and nutrient analysis.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ml", color: "green-text-gradient" },
      { name: "html", color: "pink-text-gradient" },
      { name: "css", color: "orange-text-gradient" },
    ],
    image: project1,
    source_code_link:
      "https://github.com/Sanjaykumar322004/Food-Diat-Chart-Recomentation-using-ML",
  },

  {
    name: "Zyro – Food Delivery App",
    description:
      "Full-stack food delivery system with user authentication, cart system, GST calculation and invoice generation.",
    tags: [
      { name: "jsp", color: "blue-text-gradient" },
      { name: "servlets", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
      { name: "tomcat", color: "orange-text-gradient" },
    ],
    image: project2,
    source_code_link:
      "https://github.com/Sanjaykumar322004/Zyro-Food-Delivery-Web-Application",
  },
] as const;




export const SOCIALS = [
 
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanjay-kumar-s-510b92287/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/sanjayleo22?t=xv_JnzbJ4-oNiSv-iO8zhQ&s=09",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Sanjaykumar322004",
  },
] as const;
