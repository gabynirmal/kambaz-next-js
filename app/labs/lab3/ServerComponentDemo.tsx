// No 'use client' → this is a Server Component (default)
import fs from "node:fs";
export default function ServerComponentDemo() {
  // Server components can access server-only APIs like 'process' and 'fs'
  const processInfo = {
    platform: process.platform,
    nodeVersion: process.version,
    memoryUsage: process.memoryUsage(),
    cwd: process.cwd(),
  };

  // Get the current time on the server
  const serverRenderTime = new Date().toLocaleTimeString();

  // List files in the current working directory (project root)
  const projectRoot = process.cwd();
  let files: string[] = [];
  try {
    files = fs.readdirSync(projectRoot);
  } catch (error) {
    console.error("Error reading project directory:", error);
    files = [];
  }
  return (
    <div>
      <h1>Server Component Demo</h1>
      <h2>Server Render Time</h2>
      <p>Rendered on server at: {serverRenderTime}</p>
      <h2>Server Information</h2>
      <pre>{JSON.stringify(processInfo, null, 2)}</pre>
      <h2>Filesystem Access Demo</h2>
      <pre>{JSON.stringify(files, null, 2)}</pre>
    </div>
  );
}
