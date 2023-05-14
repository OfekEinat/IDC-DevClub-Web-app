import {Container , Nav , Navbar, NavDropdown , Form , FormControl} from "react-bootstrap";
import GenreComp from './GenreComp';
import React from "react";

export default function NavbarComp(props) {
  let searchInput = React.createRef();
  function handleSubmit(event) {
    event.preventDefault();
    props.onChange({target: {value: searchInput.current.value}});
  }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home" id="Brand">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form inline onSubmit={(event) => handleSubmit(event)}>
                <FormControl 
                  type="text"
                  placeholder="search"
                  id="generalSearch"
                  ref = {searchInput}
                >
               </FormControl>
            </Form>
            <NavDropdown title="Series" id="SeriesDropDown" className="navButtons">
              <NavDropdown.Item href="#action/3.1">All Series</NavDropdown.Item>
              <GenreComp/>
              <NavDropdown.Divider />
              <Form inline>
                <FormControl type="text" placeholder="search" className="MoviesSearch"></FormControl>
              </Form>
            </NavDropdown>  
            <NavDropdown title="Movies" id="MoviesDropDown" className="navButtons">
              <NavDropdown.Item href="#action/3.1">All Movies</NavDropdown.Item>
              <GenreComp/>
              <NavDropdown.Divider />
              <Form inline>
                  <FormControl type="text" placeholder="search" className="MoviesSearch"></FormControl>
              </Form>
            </NavDropdown>
              <Nav.Link href="#action/3.4" className="navButtons"> Favorites </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

