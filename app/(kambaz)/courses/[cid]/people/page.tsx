"use client";

import PeopleTable from "./Table";
import { useState, useEffect } from "react";
import * as client from "../../client";
import { useParams } from "next/navigation";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const data = await client.findUsersForCourse(cid as string);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
