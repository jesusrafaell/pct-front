import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages';

export const AppRouter = () => {
	console.log('AppRouter');
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
};
