import { Container, Row } from "react-bootstrap"

const Menu = () => {
	return (
		<Container fluid={true} className="pt-1">
			<Row className="align-items-end pt-1">This is menu content</Row>
			<Row className="align-items-end pt-1">Other content</Row>
		</Container>
	);
};

export default Menu;
