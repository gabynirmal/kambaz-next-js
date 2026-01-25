import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        placeholder="username"
        defaultValue="gabynirmal"
        className="wd-username"
      />
      <br />
      <input
        placeholder="password"
        defaultValue="beepbop"
        type="password"
        className="wd-password"
      />
      <br />
      <input
        placeholder="verify password"
        defaultValue="beepbop"
        type="password"
        className="wd-password-verify"
      />
      <br />
      <Link href="profile"> Sign up </Link>
      <br />
      <Link href="signin"> Sign in </Link>
    </div>
  );
}
