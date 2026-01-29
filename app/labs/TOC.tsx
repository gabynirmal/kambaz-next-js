"use client";

import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink href="/labs" as={Link}>
          Labs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab1" as={Link}>
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab2" as={Link}>
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/labs/lab3" as={Link}>
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/" as={Link}>
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="https://github.com/gabynirmal/kambaz-next-js"
          id="wd-github"
          target="_blank"
        >
          GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
