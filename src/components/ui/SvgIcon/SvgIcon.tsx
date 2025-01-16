import { FC } from "react";

import { Icons } from "@/types";
import cl from "clsx";

import { icons } from "@/config/portfolio";

import { svgIcons } from "./icons";
import styles from "./svgIcon.module.css";

interface Classes {
  root?: string;
}

interface Props {
  name: Icons;
  color?: string;
  size?: string;
  classes?: Classes;
}

const SvgIcons: FC<Props> = ({ name, color = "white", classes, size = "100%" }) => {
  const containerClass = cl(styles.container, classes?.root);

  if (!icons.includes(name)) return null;

  return (
    <div style={{ color, width: size, height: size }} className={containerClass}>
      {svgIcons[name]}
    </div>
  );
};

export default SvgIcons;
