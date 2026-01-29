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
        className={`border-0 text-center ${pathname.includes("/account") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/account"
          id="wd-account-link"
          className={`text-decoration-none ${pathname.includes("/account") ? "text-danger" : "text-white"}`}
        >
          <FaRegCircleUser
            className={`fs-1 ${pathname.includes("/account") ? "text-danger" : "text-white"}`}
          />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${pathname.includes("/dashboard") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/dashboard"
          id="wd-dashboard-link"
          className={`text-decoration-none ${pathname.includes("/dashboard") ? "text-danger" : "text-white"}`}
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${pathname.includes("/courses") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/dashboard"
          id="wd-course-link"
          className={`text-decoration-none ${pathname.includes("/courses") ? "text-danger" : "text-white"}`}
        >
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${pathname.includes("/calendar") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/calendar"
          id="wd-calendar-link"
          className={`text-decoration-none ${pathname.includes("/calendar") ? "text-danger" : "text-white"}`}
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${pathname.includes("/inbox") ? "bg-white" : "bg-black"}`}
      >
        <Link
          href="/inbox"
          id="wd-inbox-link"
          className={`text-decoration-none ${pathname.includes("/inbox") ? "text-danger" : "text-white"}`}
        >
          <FiInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/labs"
          id="wd-labs-link"
          className="text-white text-decoration-none"
        >
          <LiaCogSolid className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
