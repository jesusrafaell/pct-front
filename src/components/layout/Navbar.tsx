import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { baseUrl, urlLogin, urlRegister } from '../../routers/url';
import { ListItem } from '@mui/material';
import AuthContext from '../../stores/authContext';

//import AuthContext from '@/stores/authContext';
//import useSafeLayoutEffect from '@/utilis/use-safe-layout-effect';

const pagesInit = [
	{
		name: 'Iniciar sesión',
		path: urlLogin,
	},
	{
		name: 'Registrarme',
		path: urlRegister,
	},
];

const PagesInitUser = [
	{
		name: 'Reportes',
		path: '/reportes/afiliado',
	},
];

//const settings = ['Cerrar sesión'];

export default function NavBar() {
	const { user, logout } = useContext(AuthContext);

	const [pages, setPages] = useState<any[]>(pagesInit);

	const location = useLocation();

	const navigate = useNavigate();

	useEffect(() => {
		const { pathname } = location;
		if (!user && pathname !== urlLogin && pathname !== urlRegister) {
			navigate(urlLogin);
		}
		if ((pathname === urlLogin || pathname === urlRegister) && user) {
			navigate(baseUrl);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	useLayoutEffect(() => {
		if (user) {
			setPages(PagesInitUser);
		} else {
			setPages(pagesInit);
		}
	}, [user]);

	const name = 'Tranred';

	const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string) => {
		navigate(url);
	};

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<ListItem
						onClick={() => {
							navigate(baseUrl);
						}}>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}>
							{name}
						</Typography>
					</ListItem>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<span key={page.name}>
									<ListItem button onClick={(event) => handleListItemClick(event, page.path)}>
										<Typography textAlign='center'>{page.name}</Typography>
									</ListItem>
								</span>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						{name}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<span key={page.name}>
								<ListItem
									style={{
										margin: '1rem',
										whiteSpace: 'nowrap',
									}}
									button
									onClick={(event) => handleListItemClick(event, page.path)}>
									<Typography textAlign='center'>{page.name}</Typography>
								</ListItem>
							</span>
						))}
					</Box>
					{user ? (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Opciones'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Typography style={{ marginRight: '10px', color: '#fff' }} variant='h6' noWrap>
										{user.email || 'Mi Cuenta'}
									</Typography>
									<Avatar alt='Cliente' />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center' onClick={logout}>
										Cerrar sesión
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
					) : null}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
