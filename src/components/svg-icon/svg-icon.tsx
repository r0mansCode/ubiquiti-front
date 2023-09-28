import { CSSProperties } from "react";
import activeGridIcon from "../../assets/icons/activeGridIcon.svg";
import activeListIcon from "../../assets/icons/activeListIcon.svg";
import backIcon from "../../assets/icons/backIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import gridIcon from "../../assets/icons/gridIcon.svg";
import listIcon from "../../assets/icons/listIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";

interface SVGIconProps {
  iconName: string;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

interface Icons {
  [key: string]: string;
}

const icons: Icons = {
  activeGridIcon: activeGridIcon,
  activeListIcon: activeListIcon,
  backIcon: backIcon,
  closeIcon: closeIcon,
  gridIcon: gridIcon,
  listIcon: listIcon,
  searchIcon: searchIcon,
};

export const SVGIcon = ({
  iconName,
  className,
  style,
  onClick,
}: SVGIconProps) => {
  return (
    <img
      src={icons[iconName]}
      alt={icons[iconName]}
      className={className}
      onClick={onClick}
      style={style}
    />
  );
};
