"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { cid } = useParams();
  const pathname = usePathname();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          href={`/courses/${cid}/${link.toLowerCase()}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item text-danger border-0 ${
            pathname.includes(link.toLowerCase()) && "active text-black"
          }`}
          key={link}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
