import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link href="/labs" id="wd-lab1-link">
          Home
        </Link>
      </li>
      <li>
        <Link href="/labs/lab1" id="wd-lab1-link">
          Lab 1
        </Link>
      </li>
      <li>
        <Link href="/labs/lab2" id="wd-lab2-link">
          Lab 2
        </Link>
      </li>
      <li>
        <Link href="/labs/lab3" id="wd-lab3-link">
          Lab 3
        </Link>
      </li>
      <li>
        {/* In the lab the id is id="wd-lab3-link"*/}
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/gabynirmal/kambaz-next-js"
          id="wd-github"
          target="_blank"
        >
          Github
        </Link>
      </li>
    </ul>
  );
}
