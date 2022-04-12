import Hamburger from 'hamburger-react';
import { Dispatch, SetStateAction } from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface HeaderProps {
	menu: boolean;
	setMenu: Dispatch<SetStateAction<boolean>>;
	title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<Navbar>
			<Container>
				<Hamburger toggled={props.menu} toggle={props.setMenu} />
			</Container>
			<Container>
				<div className="navbar-center">
					<Navbar.Brand href="#home">{props.title}</Navbar.Brand>
				</div>
			</Container>
		</Navbar>
	);
};

export default Header;
