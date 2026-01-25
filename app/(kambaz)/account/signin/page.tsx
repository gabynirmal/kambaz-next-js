import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        placeholder="username"
        defaultValue="gabynirmal"
        className="wd-username"
      />{" "}
      <br />
      <input
        placeholder="password"
        defaultValue="beepbop"
        type="password"
        className="wd-password"
      />
      <br />
      <Link href="/dashboard" id="wd-signin-btn">
        Sign in
      </Link>
      <br />
      <Link href="signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
