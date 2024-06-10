import classNames from "classnames";

type BackgroundProps = {
  children: React.ReactNode;
  paddingBlock?: "regular" | "md" | "lg";
  background?: "primary" | "secondary";
  className?: string;
};

/**
 * Renders a background component with customizable properties.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - children: React.ReactNode - The content to be rendered inside the background component.
 *   - background: "primary" | "secondary" - The background color of the component. Defaults to "primary".
 *   - paddingBlock: "regular" | "md" | "lg" - The padding block size of the component. Defaults to "lg".
 *   - className: string - Additional CSS class names to be applied to the component.
 * @return {JSX.Element} The rendered background component.
 */
const Background = ({
  children,
  background = "primary",
  paddingBlock = "lg",
  className,
}: BackgroundProps) => {
  const classes = classNames(className, {
    "p-block-regular": paddingBlock === "regular",
    "p-block-lg": paddingBlock === "lg",
    "p-block-md": paddingBlock === "md",
    "bg-primary": background === "primary",
    "bg-secondary": background === "secondary",
  });

  return <div className={classes}>{children}</div>;
};

export default Background;
