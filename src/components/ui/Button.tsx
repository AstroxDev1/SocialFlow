import type { ButtonHTMLAttributes } from "react";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  };


export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {


  const styles = {

    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white",

  };


  return (

    <button

      {...props}

      className={`
        rounded-xl
        px-5
        py-3
        font-medium
        transition
        ${styles[variant]}
        ${className}
      `}

    >

      {children}

    </button>

  );

}