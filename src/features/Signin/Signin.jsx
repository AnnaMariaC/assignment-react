import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import style from "./Signin.module.css";

export function Signin() {
  async function handelLogin(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const user = Object.fromEntries(data.entries());
    // console.log(user);
    const login = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
    console.log(login);
  }
  return (
    <>
      <h2>Sign in</h2>
      <h3>Sign into your account</h3>
      <form className={style["container-div"]} onSubmit={handelLogin}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <Button>Login</Button>
        <p>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </form>
    </>
  );
}
