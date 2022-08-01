import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function NavBar(){
    return(
        <header>
            <Navbar bg="dark" variant="dark" className='p-3'>
                <Container>
                    <Navbar.Brand href='/'>Lash Nav</Navbar.Brand>
                        <Nav className='me-auto'>
                          <NavDropdown title="JsonDiffTest" id="basic-nav-dropdown">
                              <NavDropdown.Item href="/DepthOne">onedepth 비교</NavDropdown.Item>
                              <NavDropdown.Item href="/jsondiff">무한 Depth 비교(진행중)</NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar;