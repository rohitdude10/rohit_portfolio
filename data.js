import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> and <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "RESTful API design, data integration, cloud deployment (AWS, Azure), security implementation, and agile collaboration, delivering robust and scalable solutions for exceptional user experiences.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Experience in creating robust and scalable RESTful APIs, utilizing frameworks like Django REST framework",
  },
  {
    Icon: MdDeveloperMode,
    title: "Coder",
    about: `a daily problem solver in <a href="https://www.hackerrank.com/rohitkumardude10?hr_r=1"><b>HackerRank</b></a>  and <a href="https://leetcode.com/rohitkumardude10/"><b>Leet Code</b></a> `,
  },
  
];

export const languages = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React.js",
    level: "60",
  },  
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Fastapi",
    level: "65",
  },
];

export const tools = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects = [
  // The project data remains the same
];

export default { services, languages, tools, projects };
