import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import style from "./Signup.module.css";

export function Signup() {
  async function handelSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const user = Object.fromEntries(data.entries());
    delete user.retype_Password;
    console.log(user);

    const auth = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
    console.log(auth);
  }
  return (
    <>
      <h2>Sign Up</h2>
      <h3>Create your account</h3>
      <form className={style["container-div"]} onSubmit={handelSubmit}>
        <input type="text" name="fullName" id="fullName" placeholder="Name" />
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
        <input
          type="password"
          name="retype_Password"
          id="retype_Password"
          placeholder="Confirm Password"
        />
        <Button>Register</Button>

        <p>
          Already have an account? <NavLink to="/signin">Sign In</NavLink>
        </p>
      </form>
    </>
  );
}
