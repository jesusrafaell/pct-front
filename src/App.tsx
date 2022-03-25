import { AppRouter } from './routers';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/themeMaterial';
import { AuthContextProvider } from './stores/authContext';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<AppRouter />
			</AuthContextProvider>
		</ThemeProvider>
	);
}

export default App;
