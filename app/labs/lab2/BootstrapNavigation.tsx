import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";

export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <Nav variant="tabs">
        <NavItem>
          <NavLink href="#/labs/lab2/Active">Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/labs/lab2/Link1">Link 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/labs/lab2/Link2">Link 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/labs/lab2/Disabled" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
      <div id="wd-css-navigating-with-cards">
        <h2> Cards </h2>
        <Card style={{ width: "18rem" }}>
          <CardImg
            variant="top"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          />
          <CardBody>
            <CardTitle>Stacking Starship</CardTitle>
            <CardText>
              Stacking the most powerful rocket in history. Mars or bust!
            </CardText>
            <Button variant="primary">Boldly Go</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
