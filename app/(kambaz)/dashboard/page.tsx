import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1111" className="wd-dashboard-course-link">
            <Image
              src="/images/bio1111-dashboard-image.jpg"
              width={200}
              height={150}
              alt="biology"
            />
            <div>
              <h5> BIO1111 Biology </h5>
              <p className="wd-dashboard-course-title">Intro to Biology</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1112" className="wd-dashboard-course-link">
            <Image
              src="/images/bio1112-dashboard-image.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> BIO1112 Bio Lab </h5>
              <p className="wd-dashboard-course-title">
                Lab for Intro to Biology
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3800" className="wd-dashboard-course-link">
            <Image
              src="/images/cs3800-dashboard-image.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS3800 TOC </h5>
              <p className="wd-dashboard-course-title">Theory of Computation</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4550" className="wd-dashboard-course-link">
            <Image
              src="/images/cs4550-dashboard-image.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS4550 Web Dev </h5>
              <p className="wd-dashboard-course-title">Web Development</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4420" className="wd-dashboard-course-link">
            <Image
              src="/images/ds4420-dashboard-image.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> DS4420 ML2 </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning & Data Mining 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1012" className="wd-dashboard-course-link">
            <Image
              src="/images/gbst1012-dashboard-image.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> GBST 1012 Global Studies </h5>
              <p className="wd-dashboard-course-title">
                Global Learning Experience
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1800" className="wd-dashboard-course-link">
            <Image
              src="/images/cs1800-dashboard-image.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1800 Discrete </h5>
              <p className="wd-dashboard-course-title">Discrete Structures</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
