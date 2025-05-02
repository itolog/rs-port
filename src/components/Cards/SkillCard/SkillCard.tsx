import { FC } from "react";

import { cn } from "@/lib/utils";
import { Skills } from "@/types";

import SvgIcons from "@/components/ui/SvgIcon/SvgIcon";

interface RsCardProps {
  skill: Skills;
  classes?: {
    root?: string;
    iconContainer?: string;
    title?: string;
  };
}

const SkillCard: FC<RsCardProps> = ({ skill, classes }) => {
  return (
    <div
      className={cn(
        "relative flex w-60 items-center gap-2 rounded-lg bg-slate-950/60 p-2 shadow-[0_5px_15px_rgba(42,15,15,0.5)] backdrop-blur",
        "transition duration-200 ease-in hover:bg-slate-950/80",
        classes?.root,
      )}>
      <div className={cn("text-[2.2em] font-bold", classes?.iconContainer)}>
        <SvgIcons name={skill} size={"40px"} />
      </div>
      <div
        className={cn(
          "text-[1.2em] font-bold text-[color:var(--primary-color)] capitalize",
          classes?.title,
        )}>
        {skill}
      </div>
    </div>
  );
};

export default SkillCard;
