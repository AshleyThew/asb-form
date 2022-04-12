import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import UserPage from './pages/UserPage';

function App() {
	const [menu, setMenu] = useState(false);

	return (
		<>
			<Header menu={menu} setMenu={setMenu} title={menu ? 'Menu' : 'Register card form'} />
			<Container>{menu ? <Menu /> : <UserPage />}</Container>
		</>
	);
}

export default App;
