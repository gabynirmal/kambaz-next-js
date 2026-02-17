"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiInbox } from "react-icons/fi";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: AiOutlineDashboard,
      key: "/dashboard",
    },
    {
      label: "Courses",
      path: "/dashboard",
      icon: LiaBookSolid,
      key: "/dashboard-courses",
    },
    {
      label: "Calendar",
      path: "/calendar",
      icon: IoCalendarOutline,
      key: "/calendar",
    },
    { label: "Inbox", path: "/inbox", icon: FiInbox, key: "/inbox" },
    { label: "Labs", path: "/labs", icon: LiaCogSolid, key: "/labs" },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 105 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/account"
        className={`text-center border-0 bg-black
            ${pathname.includes("account") ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <FaRegCircleUser
          className={`fs-1 ${pathname.includes("account") ? "text-danger" : "text-white"}`}
        />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem
          key={link.key}
          as={Link}
          href={link.path}
          className={`bg-black text-center border-0
            ${pathname.includes(link.label.toLowerCase()) ? "text-danger bg-white" : "text-white bg-black"}`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
