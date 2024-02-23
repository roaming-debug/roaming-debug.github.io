import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaC, FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "C#",
    icon: null,
    iconImage: "/images/csharp.svg",
  },
  {
    name: "Java",
    icon: FaJava
  },
  {
    name: "SQL",
    icon: FaDatabase,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  }, 
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Markdown",
    icon: BsMarkdown,
  },
];

export const workData = [
  {
    company: "Northstar Medical Radioisotopes",
    designation: "Software Engineer Intern",
    duration: "May 2022 - Apr. 2023",
    companyImg: "northstar.png",
    description: (
      <>
        <ul>
          <li>
          Developed a Visual Studio code analysis plugin that automatically 
          detects scenarios where certain types of return values are not assigned
          in function calls, and used Roslyn code analysis and semantic models to provide code
          fixes. Worked collaboratively with team members, providing suggestions for 10,000+ lines
          of code and indicating 500+ parts of the code that may run into exception.
          </li>
          <li>
          Wrote unit tests for the Visual Studio plugin and collaborated closely
          with team members to streamline development and testing processes, resulting in
          faster development cycles and increased functional integrity.
          </li>
          <li>
          Created an error extractor application utilizing the Roslyn parser and semantic
          model to extract the names and comments of specific functions from large C# projects,
          storing the relevant information in a local SQLite database. By working closely with team
          members and communicating effectively, we eventually stored 400+ error information from the repository.
          </li>
          <li>
          Actively participated in the feature development of a new programming language compiler,
          contributing ideas and suggestions to the project based on team collaboration principles.
          Assisted team members in overcoming technical challenges and took part in the development of
          features like compiler comments and variable declarations, while maintaining regular
          communication to ensure the smooth implementation of the project.
          </li>
          <li>
          Utilized TCP/IP knowledge to develop the Network Simulator tool, designed to aid colleagues in
          debugging network distribution and packet reception issues. The tool provides a virtual network
          environment that simulates various network scenarios, making it easier for colleagues to develop
          and debug their network libraries.
          </li>
          <li>
          Using the WPF framework, developed a workflow diagram display and debugging tool for a
          company product, based on event-driven architecture to present real-time models for easy
          debugging and viewing. The tool enhanced customer understanding of the workflow, enabling
          easier product development and deployment. Through effective communication with internal teams and
          prompt handling of customer feedback, we provided high-quality technical support services to our valued customers.
          </li>
        </ul>
      </>
    ),
  },
  
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Display",
    image: "movie-display",
    link: "https://roaming-debug.github.io/Movie-Display/",
    source: "https://github.com/roaming-debug/Movie-Display",
  },
  {
    type: "PROJEC",
    title: "Network Intrusion Detection System",
    image: "network-intrusion",
    link: "https://github.com/roaming-debug/Network-Intrusion-Detection-System",
    source: "https://github.com/roaming-debug/Network-Intrusion-Detection-System",
  },
  {
    type: "PROJECT",
    title: "Monkey Shader",
    image: "monkey-shader",
    link: "http://shdr.bkcore.com/#1/lVZtb9s2EP4rB38oLFmWJcXuurj+MKQtMAwNhm0ICixDoMh0zFQmBZF2bLf57zuSIkXZTuoacSzx3h4e757jt96cF+sVYVL0Lv/tVTUpqKCcwZI+LCtYlDyX01u2ZnTB65V5B0lXxFvckCKDmgheriWaomST1zvKHpTkAhZ/ckFPCq7ROi8Pl+v86Quu3bKCMyGbkCXCkb+D+swgid9NofsZjYCzcgcICOZ0sVgLAgVfVZzh1rqu8tU9xcWrxtXFtCturK34lwOxqEixLvP6KkVxGicngHxCDELmasu4LwP9tJOPysnbMXp5QZ6pIG+P5JRJUm/yEqWTJEZh16yv86jjfqB11Bj9IeyTWFJGGREiuGXfbhmYvAv0xvSJ0D3pW+tg6hQ2HYWhO1dPhXVUmgP25MuOfDMQRma/7TZQDwFDCBV/6q/ybT+JkwjmXPZZtAyCyNuD9lATua6ZNsX3Z1U+neM8nRJTVUwG8BNpeGWPLiSquDoKXRh8PNgKiKCDH40M/A2nc1SmrG/PiC76Al9V74VpEgfhOIYBXMTwfqZbJt4pre/f4XWt7Y+0hlptHyg9HRgQlSjyeq6BPntYTNjQVmMA77Fh4M0bcMLtgfBVrzq7JllXvEx1A6o1TNgkAsxZm4CLJB6kcYDfJBhlsXc6zj5r7VEr6tg6wwh/vJPL2UNJoGGZbBInYUN1Hec3KbS+lVttFkQFF83jQCEeptZ5W3s3GYCPKxrqvaWxj8JRTNYQlGOVFd8omtSuYDjEAvlKQC6pgD2pOUgOXwmpDBMeMxA6abbB7x9JoZLkQwHz9SC3alYLj0Hh9U5fpTLAwsb1tpe1Ndrx+m/FcI6XmvRFHotGHhkGYXv4A9e5zsi0URA6WNODWNlxrMyL5T1/zNpY2VGs7MexfvuMsdwkCaGr91DefarzB61pcjfuW7OBTcygAR25OsHO70UvzuBcypreryUxMKp2qh5ImB2rdkCvcmlXP+eouu3KxlhXc1LeUPJ0WlzVXO0Ogzn5OYPcH/wvXCG6Y62is4s4HaeTXw9daYBfTq5ev3h/0PeSvzj2Ack+9PUb/rujLPLb3ZuBRs7X0h62eo63s7axQ+Mg3g7bvrdru47VbnassR0ce9r59N+G1xPseAiYPMy8swe93+6KycusqYN2vCIBXPGVuuwhaRC8IZVqggJGVNQhJK9APlEhMZVtsHgHQ0VDySTUbd+sbtXgwGLGV0OrWYL0kcVhRYNmplnNxj77WfvWB4QzOJh+WTx4FwejVF9/2i2arZ/EfH025uuTmM+yb32cjdkQc5OWPdKFewxB1YuNZAKMRjaBO1R11e0WIyRixBPawwsVBIxoRhmiVFXwDw6FwlSCahtVAOHjWsjQDBNVFnAZeOFw7/ujcGrxvHDKKf4JuqpwvuYCw2D7mTFFWaFmGH7rnAlNEahaczO+OrdDQzOd65fPaup6pXG5ETZWLGkz2vIbKmpKNqBx6DXT1/IVWqAdJnNv2dyXHJChvqMK1bK9/6Kedtm7NL9iJNb7nDFyp5g8fhS95/8B",
    source: "http://shdr.bkcore.com/#1/lVZtb9s2EP4rB38oLFmWJcXuurj+MKQtMAwNhm0ICixDoMh0zFQmBZF2bLf57zuSIkXZTuoacSzx3h4e757jt96cF+sVYVL0Lv/tVTUpqKCcwZI+LCtYlDyX01u2ZnTB65V5B0lXxFvckCKDmgheriWaomST1zvKHpTkAhZ/ckFPCq7ROi8Pl+v86Quu3bKCMyGbkCXCkb+D+swgid9NofsZjYCzcgcICOZ0sVgLAgVfVZzh1rqu8tU9xcWrxtXFtCturK34lwOxqEixLvP6KkVxGicngHxCDELmasu4LwP9tJOPysnbMXp5QZ6pIG+P5JRJUm/yEqWTJEZh16yv86jjfqB11Bj9IeyTWFJGGREiuGXfbhmYvAv0xvSJ0D3pW+tg6hQ2HYWhO1dPhXVUmgP25MuOfDMQRma/7TZQDwFDCBV/6q/ybT+JkwjmXPZZtAyCyNuD9lATua6ZNsX3Z1U+neM8nRJTVUwG8BNpeGWPLiSquDoKXRh8PNgKiKCDH40M/A2nc1SmrG/PiC76Al9V74VpEgfhOIYBXMTwfqZbJt4pre/f4XWt7Y+0hlptHyg9HRgQlSjyeq6BPntYTNjQVmMA77Fh4M0bcMLtgfBVrzq7JllXvEx1A6o1TNgkAsxZm4CLJB6kcYDfJBhlsXc6zj5r7VEr6tg6wwh/vJPL2UNJoGGZbBInYUN1Hec3KbS+lVttFkQFF83jQCEeptZ5W3s3GYCPKxrqvaWxj8JRTNYQlGOVFd8omtSuYDjEAvlKQC6pgD2pOUgOXwmpDBMeMxA6abbB7x9JoZLkQwHz9SC3alYLj0Hh9U5fpTLAwsb1tpe1Ndrx+m/FcI6XmvRFHotGHhkGYXv4A9e5zsi0URA6WNODWNlxrMyL5T1/zNpY2VGs7MexfvuMsdwkCaGr91DefarzB61pcjfuW7OBTcygAR25OsHO70UvzuBcypreryUxMKp2qh5ImB2rdkCvcmlXP+eouu3KxlhXc1LeUPJ0WlzVXO0Ogzn5OYPcH/wvXCG6Y62is4s4HaeTXw9daYBfTq5ev3h/0PeSvzj2Ack+9PUb/rujLPLb3ZuBRs7X0h62eo63s7axQ+Mg3g7bvrdru47VbnassR0ce9r59N+G1xPseAiYPMy8swe93+6KycusqYN2vCIBXPGVuuwhaRC8IZVqggJGVNQhJK9APlEhMZVtsHgHQ0VDySTUbd+sbtXgwGLGV0OrWYL0kcVhRYNmplnNxj77WfvWB4QzOJh+WTx4FwejVF9/2i2arZ/EfH025uuTmM+yb32cjdkQc5OWPdKFewxB1YuNZAKMRjaBO1R11e0WIyRixBPawwsVBIxoRhmiVFXwDw6FwlSCahtVAOHjWsjQDBNVFnAZeOFw7/ujcGrxvHDKKf4JuqpwvuYCw2D7mTFFWaFmGH7rnAlNEahaczO+OrdDQzOd65fPaup6pXG5ETZWLGkz2vIbKmpKNqBx6DXT1/IVWqAdJnNv2dyXHJChvqMK1bK9/6Kedtm7NL9iJNb7nDFyp5g8fhS95/8B",
  },
  {
    type: "WEB-APP",
    title: "Heap File Manager",
    image: "dbms",
    link: "https://github.com/roaming-debug/CS564-Stage4",
    source: "https://github.com/roaming-debug/CS564-Stage4",
  },
  {
    type: "WEB-APP",
    title: "Solar System",
    image: "solar-system",
    link: "https://roaming-debug.github.io/Solar-System/",
    source: "https://github.com/roaming-debug/Solar-System",
  },
  {
    type: "PROJECT",
    title: "Operating System Enhancing Kernel (Copy-on-Write)",
    image: "copy-on-write",
    link: "https://github.com/roaming-debug/Operating-System-Enhancing-Kernel",
    source: "https://github.com/roaming-debug/Operating-System-Enhancing-Kernel",
  },
  {
    type: "PROJECT",
    title: "Remote Proceadure Calls (RPC) Implementation",
    image: "rpc",
    link: "https://github.com/roaming-debug/CS537-P8",
    source: "https://github.com/roaming-debug/CS537-P8",
  },
  {
    type: "PROJECT",
    title: "Routing Path Finder",
    image: "routing-path-finder",
    link: "https://github.com/roaming-debug/Routing-Path-Finder",
    source: "https://github.com/roaming-debug/Routing-Path-Finder",
  },
  {
    type: "PROJECT",
    title: "Java Course Projects",
    image: "java",
    link: "https://github.com/roaming-debug/Java-Course-Projects",
    source: "https://github.com/roaming-debug/Java-Course-Projects",
  },
  {
    type: "PROJECT",
    title: "SQL Injection Analysis",
    image: "SQL-injection",
    link: "https://github.com/roaming-debug/Java-Course-Projects/blob/master/SQL-Injection/DVWA.md",
    source: "https://github.com/roaming-debug/Java-Course-Projects/blob/master/SQL-Injection/DVWA.md",
  },
  

];


export const socialMediaLinks = [
  {
    href: "https://github.com/roaming-debug",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/ezrage/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
