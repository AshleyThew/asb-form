import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const CreditCardInput = () => {
	return (
		<Container fluid>
			<Form noValidate>
				<Row className="justify-content-center">
					<Col xs={10} md={6}>
						<Form.Group as={Col} controlId="validationCreditCard">
								<Form.Label>Credit Card</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Credit Card"
									maxLength={12}
									pattern="[0-9]*"
								/>
						</Form.Group>
						<Row className="justify-content-end">
							<Form.Group as={Col} xs={2} controlId="validationCVC">
									<Form.Label>CVC</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="CVC"
										maxLength={3}
										pattern="[0-9]*"
									/>
							</Form.Group>
							<Col xs={2} className="float-end">
								<Form.Label>Expiry</Form.Label>
								<Form.Group as={Row} xs={2} controlId="validationExpiryMM">
									<Form.Control
										required
										type="text"
										placeholder="MM"
										maxLength={2}
										pattern="[0-9]*"
									/>
								</Form.Group>
								<Form.Group as={Row} xs={2} controlId="validationExpiryYY">
									<Form.Control
										required
										type="text"
										placeholder="YY"
										maxLength={2}
										pattern="[0-9]*"
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Button
								type="submit"
								className="btn-block"
								style={{ maxWidth: '400px' }}
							>
								Submit
							</Button>
						</Row>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default CreditCardInput;
