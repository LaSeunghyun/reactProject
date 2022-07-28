import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function NavBar(){
    return(
        <header>
            <Navbar bg="dark" variant="dark" className='p-3'>
                <Container>
                    <Navbar.Brand href='/'>Lash Nav</Navbar.Brand>
                        <Nav className='me-auto'>
                          <NavDropdown title="TEST" id="basic-nav-dropdown">
                              <NavDropdown.Item href="/jsondiff">Json 비교</NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar;