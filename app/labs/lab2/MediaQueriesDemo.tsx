import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <div className="wd-media-queries-demo">
      <h1>Media Query Demo</h1>
      <p>
        This demo uses CSS media queries to change colors based on screen width:
      </p>
      <ul>
        <li>Default is White text on Green background</li>
        <li>750px to 1000px: Black text on Yellow background</li>
        <li>1000px to 1250px: White text on Blue background</li>
        <li>Above 1250px: White text on Red background</li>
      </ul>
    </div>
  );
}
