import { NavLink } from "react-router-dom";
import {
  ArrowRightCircleIcon,
  IdentificationIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import style from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={style["main-meniu"]}>
      <menu>
        <li>
          <NavLink to="/">SociaL in</NavLink>
        </li>
        <li className={style["move-rigth"]}>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : " ")}
            to="/post"
          >
            <PencilSquareIcon width={12} />
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : " ")}
            to="/signin"
          >
            <ArrowRightCircleIcon width={12} />
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : " ")}
            to="/signup"
          >
            <IdentificationIcon width={12} />
            Sign Up
          </NavLink>
        </li>
      </menu>
    </nav>
  );
}
