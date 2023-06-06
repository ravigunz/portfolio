import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navLinks = [
  {
    title: "Education",
  },
  {
    title: "Web Development",
  },
  {
    title: "Projects",
  },
  {
    title: "Telecommunication",
  },
];

export default function HeaderLayout() {
  return (
    <Navbar style={{ backgroundColor: "#002A9D" }} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand
          href="#"
          style={{
            textTransform: "uppercase",
            color: "white",
            fontSize: "24px",
          }}
        >
          Ravi Gunasena
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((val, key) => {
              return (
                <Nav.Link
                  key={key}
                  href="#"
                  style={{ color: "white", fontSize: "16px"}} 
                >
                  {val.title.toUpperCase()}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav>
            <Nav.Link
              style={{ color: "white", fontSize: "18px" }} 
              href="https://www.linkedin.com/in/ravigunasena/"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
