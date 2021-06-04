import { Navbar, Nav } from 'react-bootstrap'

const MyNav = (props) => (
    <Navbar collapseOnSelect expand="lg"  variant="dark">
<Navbar.Brand href="#home">
        <img
          alt=""
          src="../assets/netflix_logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{props.title}
     
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#features">TV Shows</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#features">Recently Added</Nav.Link>
          <Nav.Link href="#features">My List</Nav.Link>
        </Nav>

          <form className="form-inline my-2 my-lg-0 ">
              <button className="btn btn-link" type="submit">🔍</button>
              <a class="btn btn-outline-light my-2 my-sm-0 ml-4" href="profile-page.html"  type="submit"> 👤 </a>
            </form>

      </Navbar.Collapse>
    </Navbar>
  );

  export default MyNav;