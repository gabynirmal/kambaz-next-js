import Link from "next/link";
import {
  FormControl,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <FormControl
        id="wd-username"
        placeholder="username"
        defaultValue="alice"
        className="wd-username"
      />
      <br />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        defaultValue="123"
      />
      <br />
      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
      />
      <br />
      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" />
      <br />
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" />
      <br />
      <Dropdown className="form-control">
        <DropdownToggle
          className="w-100 fs-6 p-0 d-flex align-start align-items-center justify-content-between"
          variant="tertiary"
          size="lg"
          id="wd-publish-all-btn"
        >
          User
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-profile-user">User</DropdownItem>
          <DropdownItem id="wd-profile-faculty">Faculty</DropdownItem>
          <DropdownItem id="wd-profile-student">Student</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <br />
      <Link
        id="wd-signout-btn"
        href="/account/profile"
        className="btn btn-danger w-100 mb-2"
      >
        Sign Out
      </Link>
    </div>
  );
}
