import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id align-middle">001234561S</td>
            <td className="wd-section align-middle">S101</td>
            <td className="wd-role align-middle">STUDENT</td>
            <td className="wd-last-activity align-middle">2020-10-01</td>
            <td className="wd-total-activity align-middle">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Sir</span>{" "}
              <span className="wd-last-name">Chloe</span>
            </td>
            <td className="wd-login-id align-middle">003829472</td>
            <td className="wd-section align-middle">S102</td>
            <td className="wd-role align-middle">STUDENT</td>
            <td className="wd-last-activity align-middle">2020-10-05</td>
            <td className="wd-total-activity align-middle">5:16:42</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bob</span>{" "}
              <span className="wd-last-name">Weir</span>
            </td>
            <td className="wd-login-id align-middle">003848294</td>
            <td className="wd-section align-middle">S103</td>
            <td className="wd-role align-middle">STUDENT</td>
            <td className="wd-last-activity align-middle">2020-10-03</td>
            <td className="wd-total-activity align-middle">22:28:55</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bad</span>{" "}
              <span className="wd-last-name">Bunny</span>
            </td>
            <td className="wd-login-id align-middle">002284203</td>
            <td className="wd-section align-middle">S104</td>
            <td className="wd-role align-middle">STUDENT</td>
            <td className="wd-last-activity align-middle">2020-10-02</td>
            <td className="wd-total-activity align-middle">11:58:32</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
