import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import style from "./Home.module.css";

export function Home() {
  return (
    <div className={style["div-homepage"]}>
      <Button>
        <NavLink to="/signup">Sign Up</NavLink>
      </Button>
      <Button>
        <NavLink to="/signin">Login</NavLink>
      </Button>
    </div>
  );
}
