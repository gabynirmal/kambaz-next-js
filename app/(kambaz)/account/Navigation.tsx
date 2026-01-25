import Link from "next/link";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="signin"> Signin </Link> <br />
      <Link href="signup"> Signup </Link> <br />
      <Link href="profile"> Profile </Link> <br />
    </div>
  );
}
