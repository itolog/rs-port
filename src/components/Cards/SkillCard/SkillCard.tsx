import { FC } from "react";

import { Skills } from "@/types";

import SvgIcons from "@/components/ui/SvgIcon/SvgIcon";

import styles from "./styles.module.css";

interface RsCardProps {
  skill: Skills;
}

const SkillCard: FC<RsCardProps> = ({ skill }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Gradient} />
      <div className={styles.Info}>
        <div className={styles.Title}>
          <SvgIcons name={skill} size={"40px"} />
        </div>
        <div className={styles.Text}>{skill}</div>
      </div>
    </div>
  );
};

export default SkillCard;
