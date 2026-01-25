import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4">
      <h2 className="text-danger">Page Not Found</h2>
      <p>
        The requested page could not be found. Please check the page URL or
        return to the dashboard.
      </p>
      <Link href="/dashboard" className="btn btn-primary mt-3">
        Back to Dashboard
      </Link>
    </div>
  );
}
