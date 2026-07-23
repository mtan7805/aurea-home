import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "text-xs font-semibold py-2 px-2.5 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer";

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "bg-secondary text-white hover:opacity-90",
  };

  const widthStyle = fullWidth ? "w-full" : "flex-1";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
