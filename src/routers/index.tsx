import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Afiliado from '../pages/reportes/afiliado';

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='auth/login' element={<Login />} />
				<Route path='auth/register' element={<Register />} />
				<Route path='reportes/afiliado' element={<Afiliado />} />
			</Routes>
		</Router>
	);
};
