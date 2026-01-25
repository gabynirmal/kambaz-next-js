export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      {/* Assignment Description */}
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of your web application"
      ></textarea>
      <br />
      <table>
        <tbody>
          {/* Points */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input type="number" id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
              </select>
            </td>
          </tr>
          {/* Display Grade as */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </select>
            </td>
          </tr>
          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type-select" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="External Tool">External Tool</option>
                <option value="No Submission">No Submission</option>
              </select>
              <br />
              <label>Online Entry Options</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-chkbox-text-entry"
              ></input>
              <label htmlFor="wd-chkbox-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-chkbox-web-url"
              ></input>
              <label htmlFor="wd-chkbox-web-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-chkbox-media-recordings"
              ></input>
              <label htmlFor="wd-chkbox-media-recordings">
                Media Recordings
              </label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-chkbox-student-annotation"
              ></input>
              <label htmlFor="wd-chkbox-student-annotation">
                Student Annotation
              </label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-chkbox-file-uploads"
              ></input>
              <label htmlFor="wd-chkbox-file-uploads">File Uploads</label>
            </td>
          </tr>
          {/* Assign */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" defaultValue="Everyone"></input>
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input
                type="date"
                id="wd-due-date"
                defaultValue="2025-05-07"
              ></input>
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="wd-avail-from">Available from</label>
                      <br />
                      <input
                        type="date"
                        id="wd-avail-from"
                        defaultValue="2025-05-05"
                      ></input>
                    </td>
                    <td>
                      <label htmlFor="wd-avail-until">Until</label>
                      <br />
                      <input
                        type="date"
                        id="wd-avail-until"
                        defaultValue="2025-05-10"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* Action Buttons */}
          <tr>
            <td colSpan={2} align="right">
              <hr />
              <button id="wd-cancel-button">Cancel</button>
              <button id="wd-save-button">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
