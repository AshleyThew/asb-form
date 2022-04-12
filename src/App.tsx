import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import CreditCardInput from './components/CreditCardInput';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
	const [menu, setMenu] = useState(false);

	return (
		<>
			<Header menu={menu} setMenu={setMenu} title={menu ? 'Menu' : 'Register card form'} />
			<Container>{menu ? <Menu /> : <CreditCardInput validateOnMount={true}/>}</Container>
		</>
	);
}

export default App;
