import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {

  const [menu, setMenu] = useState(false);

	return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand onClick={() => setMenu(!menu)}>
            <Hamburger toggled={menu} toggle={setMenu} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      {menu && <div></div>}
    </>
	);
};

export default Header;
