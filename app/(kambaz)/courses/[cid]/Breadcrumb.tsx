"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const { cid } = useParams();

  // Get segments after /courses/:cid
  const basePath = `/courses/${cid}`;
  const segments = pathname.replace(basePath, "").split("/").filter(Boolean);

  return (
    <span>
      <Link href={basePath} className="text-danger">
        Course {course?.name}
      </Link>
      {segments.map((segment, index) => {
        const href = `${basePath}/${segments.slice(0, index + 1).join("/")}`;
        return (
          <span key={href}>
            {" "}
            &gt;{" "}
            <Link href={href} className="text-danger">
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          </span>
        );
      })}
    </span>
  );
}
