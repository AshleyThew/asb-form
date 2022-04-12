import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import CreditCardInput from './components/CreditCardInput';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<Container>
				<CreditCardInput />
			</Container>
		</>
	);
}

export default App;
