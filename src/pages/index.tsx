import { Box, LinearProgress } from '@mui/material';
//import Router from 'next/router';
import { useState } from 'react';
import Layout from '../components/layout/Layout';
//import Image from 'next/image';
//import TranredLogo from '@/images/tranred-logo.png';

import { useStyles } from '../styles/home';

const Home = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [loaded, setLoaded] = useState<boolean>(true);

	const classes = useStyles();

	if (!loaded) {
		return (
			<Box sx={{ marginTop: '50vh', width: '100%' }}>
				<LinearProgress />
			</Box>
		);
	}

	return (
		<Layout>
			<div className={classes.base}>
				<div className={classes.title}>Bienvenido al sistema de Reportes</div>
				<div className={classes.subtitle}>Haga click en el menu superior izquierdo para navegar entre sistema</div>
				<div className={classes.imgLogo}>
					{/*
					<Image src={TranredLogo} alt='logo tranred' />
					*/}
				</div>
			</div>
		</Layout>
	);
};

export default Home;
