"use client";

import { redirect, useParams } from "next/navigation";

export default function People() {
  const { cid } = useParams();
  redirect(`/courses/${cid}/people/table`);
}
