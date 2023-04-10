import clsx from "clsx";
import style from "./Button.module.css";

export function Button({ children, className, type = "submit" }) {
  return (
    <button className={clsx(style.btn, className)} type={type}>
      {children}
    </button>
  );
}
