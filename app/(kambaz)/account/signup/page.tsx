import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign Up</h1>
      <FormControl id="wd-username" placeholder="username" className="mb-2" />
      <br />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <br />
      <Link
        id="wd-signup-btn"
        href="/account/profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign Up{" "}
      </Link>
      <br />
      <Link id="wd-signin-link" href="/account/signup">
        Sign in
      </Link>
    </div>
  );
}
