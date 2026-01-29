import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardTitle from "react-bootstrap/CardTitle";
import CardBody from "react-bootstrap/CardBody";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "350px" }}>
            <Card
              className="border border-0"
              style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
            >
              <Link
                href="/courses/1111/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/bio1111-dashboard-image.jpg"
                  width="100%"
                  height={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-truncate">
                    BIO1111 Bio
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description text-truncate"
                    style={{ height: "25px" }}
                  >
                    Intro to Biology
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "350px" }}>
            <Card
              className="border border-0"
              style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
            >
              <Link
                href="/courses/1112/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/bio1112-dashboard-image.jpg"
                  width="100%"
                  height={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-truncate">
                    BIO1112 Bio Lab
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description text-truncate"
                    style={{ height: "25px" }}
                  >
                    Lab for Intro to Biology
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "350px" }}>
            <Card
              className="border border-0"
              style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
            >
              <Link
                href="/courses/3800/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs3800-dashboard-image.jpg"
                  width="100%"
                  height={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-truncate">
                    CS3800 TOC
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description text-truncate"
                    style={{ height: "25px" }}
                  >
                    Theory of Computation
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "350px" }}>
            <Card
              className="border border-0"
              style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
            >
              <Link
                href="/courses/4550/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs4550-dashboard-image.jpg"
                  width="100%"
                  height={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-truncate">
                    CS4550 Web Dev
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description text-truncate"
                    style={{ height: "25px" }}
                  >
                    Web Development
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "350px" }}>
            <Card
              className="border border-0"
              style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
            >
              <Link
                href="/courses/4420/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/ds4420-dashboard-image.jpg"
                  width="100%"
                  height={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-truncate">
                    DS4420 ML2
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description text-truncate"
                    style={{ height: "25px" }}
                  >
                    Machine Learning & Data Mining 2
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "350px" }}>
            <Card
              className="border border-0"
              style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
            >
              <Link
                href="/courses/1012/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/gbst1012-dashboard-image.jpg"
                  width="100%"
                  height={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-truncate">
                    GBST 1012 Global Studies
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description text-truncate"
                    style={{ height: "25px" }}
                  >
                    Global Learning Experience
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "350px" }}>
            <Card
              className="border border-0"
              style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
            >
              <Link
                href="/courses/1800/home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs1800-dashboard-image.jpg"
                  width="100%"
                  height={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-truncate">
                    CS1800 Discrete
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description text-truncate"
                    style={{ height: "25px" }}
                  >
                    Discrete Structures
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
