import { FC } from "react";

import { Skills } from "@/types";
import cl from "clsx";

import { skills } from "@/config/portfolio";

import { icons } from "./icons";
import styles from "./svgIcon.module.css";

interface Classes {
  root?: string;
}

interface Props {
  name: Skills;
  color?: string;
  size?: string;
  classes?: Classes;
}

const SvgIcons: FC<Props> = ({ name, color = "white", classes, size = "100%" }) => {
  const containerClass = cl(styles.container, classes?.root);

  if (!skills.includes(name)) return null;

  return (
    <div style={{ color, width: size, height: size }} className={containerClass}>
      {icons[name]}
    </div>
  );
};

export default SvgIcons;
