import { IconType } from "react";

export const Category = ["react", "node", "express", "django", "mongo"];

export const Service = ({ Icon, title, about }) => {
  return { Icon, title, about };
};

export const Skill = ({ Icon, name, level }) => {
  return { Icon, name, level };
};

export const IProject = ({
  name,
  description,
  image_path,
  deployed_url,
  github_url,
  category,
  key_techs,
}) => {
  return {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
  };
};
