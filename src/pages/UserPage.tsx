import { Col, Container, Row } from 'react-bootstrap';
import { GetUser } from '../context/UserContext';
import CreditCardInput from '../components/CreditCardInput';

const UserPage = () => {
	const { user } = GetUser();

	return (
		<Container>
            <br className='pt-10'/>
			<Row className="justify-content-center">
				<Col xs={10} md={6} xl={4}>
					<p>Welcome {user.firstName}</p>
				</Col>
			</Row>
			<CreditCardInput validateOnMount={true} />
		</Container>
	);
};

export default UserPage;
