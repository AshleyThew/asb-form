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
			<Container fluid className='text-center'>
				<Hamburger toggled={props.menu} toggle={props.setMenu} />
				<div className="justify-content-center">
					<Navbar.Brand href="#home">{props.title}</Navbar.Brand>
				</div>
			</Container>
		</Navbar>
	);
};

export default Header;
