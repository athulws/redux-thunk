import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

//---------> Navbar il select cheytha product nte ennam kanikkan <-----------
import { useSelector } from 'react-redux';

const NavBar = () => {

    const cartProduct = useSelector(state => state.cart); // ithil ulla "state.cart" il ulla cart is from --> Cart.js

    return (
        <Navbar expand="lg" bg='light'>
            <Container fluid>
                <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                <Nav>
                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        <Nav.Link to="/cart" as={Link}>My Bag {cartProduct.length}</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar