"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/account/profile");
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username b-2"
        placeholder="username"
      />
      <FormControl
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2"
        placeholder="password"
        type="password"
      />
      <button
        onClick={signup}
        className="wd-signup-btn btn btn-primary mb-2 w-100"
      >
        {" "}
        Sign up{" "}
      </button>
      <br />
      <Link href="/account/signin" className="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
