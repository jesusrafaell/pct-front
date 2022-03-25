import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { ReactChild, ReactChildren, useState } from 'react';
import { useLocation } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
//import { useRouter } from 'next/router';

interface Props {
	children: ReactChild | ReactChildren;
}

export default function Auth({ children }: Props) {
	const location = useLocation();

	const name: string = location.pathname === '/auth/login' ? 'Iniciar Sesión' : 'Registro';

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					{location.pathname === '/auth/login' ? <AccountCircleIcon /> : <PersonAddAltIcon />}
				</Avatar>
				<Typography component='h1' variant='h5'>
					{name}
				</Typography>
				{children}
			</Box>
		</Container>
	);
}
