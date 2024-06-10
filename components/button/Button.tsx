// components/Button.tsx
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import "./button.css";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "primary",
  className = "",
  disabled = false,
  href,
}) => {
  const buttonClass = classNames(
    "btn",
    {
      "btn--primary": type === "primary",
      "btn--secondary": type === "secondary",
      "btn--disabled": disabled,
    },
    className,
  );

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
