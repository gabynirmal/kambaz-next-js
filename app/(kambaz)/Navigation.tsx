import Link from "next/link";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
        Northeastern
      </a>
      <br />
      <Link href="/account" id="wd-account-link">
        Account
      </Link>
      <br />
      <Link href="/dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />
      <Link href="/dashboard" id="wd-course-link">
        Courses
      </Link>
      <br />
      <Link href="/calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />
      <Link href="/inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />
      <Link href="/labs" id="wd-labs-link">
        Labs
      </Link>
      <br />
    </div>
  );
}
