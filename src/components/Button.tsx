import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "brand" | "secondary" | "outline" | "ghost";
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  href,
  className = "",
  icon,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500";

  const variants = {
    // Primary is now Orange for core features dominance
    primary:
      "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/40 border border-transparent",
    // Brand is Green for specific service/success actions
    brand:
      "bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 border border-transparent",
    // Secondary is Dark
    secondary:
      "bg-dark-900 text-white hover:bg-black shadow-lg hover:shadow-xl border border-dark-800",
    // Outline is Orange accented
    outline: "border-2 border-accent-500 text-accent-600 hover:bg-accent-50",
    ghost: "bg-transparent text-dark-600 hover:bg-dark-100",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
