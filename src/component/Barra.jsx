
import { Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Barra = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <img src="https://ia601205.us.archive.org/26/items/PokemonIcon/pokemon%20icon.png" alt="" height={"50px"}
                     /> </Navbar.Brand>
                    <Nav className="me-3">
                        <NavLink className={({isActive})=>(isActive?"active": undefined)} to="/">Home</NavLink>
                        {" - "}
                        <NavLink className={({isActive})=>(isActive?"active": undefined)} to="/pokemons">Pokemons</NavLink>
                      
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Barra