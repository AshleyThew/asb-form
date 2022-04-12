import { Formik, FormikValues } from 'formik';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';

const CreditCardInput = () => {
	const handleSubmit = (values: FormikValues) => {
		console.log(values);
	};

	const schema = yup.object().shape({
		cardNumber: yup.string().min(12, 'Too short').required('Card number required'),
		cvc: yup.string().min(3, 'Too short').required('CVC required'),
		expiryMM: yup.string().min(2, 'Too short').required('MM required'),
		expiryYY: yup.string().min(2, 'Too short').required('YY required'),
	});

	return (
		<Formik
			validateOnMount
			validationSchema={schema}
			initialValues={{ cardNumber: '', cvc: '', expiryMM: '', expiryYY: '' }}
			onSubmit={handleSubmit}
		>
			{({ handleSubmit, handleChange, values, isValid, errors, isSubmitting}) => (
				<Container fluid>
					<Form noValidate onSubmit={handleSubmit}>
						<Row className="justify-content-center">
							<Col xs={10} md={6} xl={4}>
								<Form.Group as={Col} controlId="validationCreditCardNumber">
									<Form.Label>Credit Card Number</Form.Label>
									<Form.Control
										required
                    name='cardNumber'
										type="text"
										placeholder="Credit Card Number"
										maxLength={12}
										pattern="[0-9]*"
                    onChange={handleChange}
                    isInvalid={!!errors.cardNumber}
									/>
                  <Form.Control.Feedback type='invalid'>
                    {errors.cardNumber}
                  </Form.Control.Feedback>
								</Form.Group>
								<Row>
									<Form.Group as={Col} xs={3} controlId="validationCVC">
										<Form.Label>CVC</Form.Label>
										<Form.Control
											required
                      name='cvc'
											type="text"
											placeholder="CVC"
											maxLength={3}
											pattern="[0-9]*"
                      onChange={handleChange}
                      isInvalid={!!errors.cvc}
										/>
                    <Form.Control.Feedback type='invalid'>
                      {errors.cvc}
                    </Form.Control.Feedback>
									</Form.Group>
									<Col xs={7}>
                    <Row>
                      <Form.Label>Expiry</Form.Label>
                      <Form.Group as={Col} xs={4} className="p-0" controlId="validationExpiryMM">
                        <Form.Control
                          required
                          name='expiryMM'
                          type="text"
                          placeholder="MM"
                          maxLength={2}
                          pattern="[0-9]*"
                          onChange={handleChange}
                          isInvalid={!!errors.expiryMM}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.expiryMM}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} xs={4} className="p-0" controlId="validationExpiryYY">
                        <Form.Control
                          required
                          name='expiryYY'
                          type="text"
                          placeholder="YY"
                          maxLength={2}
                          pattern="[0-9]*"
                          onChange={handleChange}
                          isInvalid={!!errors.expiryYY}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.expiryYY}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
									</Col>
								</Row>
                <br/>
								<Row className="justify-content-center">
									<Button
										type="submit"
										className="btn-block"
										style={{ maxWidth: '400px' }}
                    disabled={isSubmitting}
									>
										Submit
									</Button>
								</Row>
							</Col>
						</Row>
					</Form>
				</Container>
			)}
		</Formik>
	);
};

export default CreditCardInput;
