import { CSSProperties } from "react";

interface SVGIconProps {
  iconName: string;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export const SVGIcon = ({
  iconName,
  className,
  style,
  onClick,
}: SVGIconProps) => {
  const source = `/src/assets/icons/${iconName}.svg`;
  return (
    <img src={source} className={className} onClick={onClick} style={style} />
  );
};
