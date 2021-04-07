import React, {useState} from 'react';
import {Card, Container,Typography,Grid, TextField, Button,AppBar,Toolbar,IconButton,InputBase} 
from '@material-ui/core'
import {MenuIcon} from "@material-ui/icons/Menu";
import {SearchIcon} from "@material-ui/icons/Search";
import styles from './style'
import { MovieIcon } from "../../icons/index";
import results from '../results';


export default ({history}) => {

	const [searchText,setSearchText] = useState('');
	const classes=styles();

	
	const takeSearchTextChange= event =>{
		setSearchText(event.target.value);
	};
	const cleandText= event =>{
		setSearchText('');
	};
	const searchTextClick= event =>{
		history.push(`/results/?movieName=${searchText}`);
	};
	
	return(
		// (<Container className={classes.container}>
			
		// 	{/* <Card className={classes.cardContainer}>
		// 		<Grid container className={classes.titleGridContainer}>
		// 			<Grid>
		// 				<Typography className={classes.title}>Bienvenido</Typography>
		// 			</Grid>
		// 			<Grid>
		// 				<MovieIcon className={classes.icon}/>
		// 			</Grid>
		// 		</Grid>
		// 		<TextField 
		// 			value={searchText}
		// 			placeholder="Buscar..." 
		// 			onChange={takeSearchTextChange}
		// 			className={classes.textFieldSearch}
		// 		/>
		// 		<Grid className={classes.buttomContainer}>
		// 			<Button variant="contained" onClick={cleandText}>Limpiar</Button>
		// 			<Button variant="contained" className={classes.searchButtom} color="primary" size="large" onClick={searchTextClick}>Buscar</Button>
		// 		</Grid>
		// 	</Card> */}
			
		// </Container>)

		<div className={classes.root}>
		<AppBar position="static" className={classes.appBar}>
		<Toolbar>
			<IconButton
			edge="start"
			className={classes.menuButton}
			color="inherit"
			aria-label="open drawer"
			>
			{/* <MenuIcon /> */}
			</IconButton>
			<Typography className={classes.title} variant="h6" noWrap>
			Peliculas
			</Typography>
			<div className={classes.search}>
			<div className={classes.searchIcon}>
				{/* <SearchIcon /> */}
			</div>
			<InputBase
				value={searchText}
				placeholder="Buscar..." 
				onChange={takeSearchTextChange}
				classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
			/>
			<Button variant="contained" className={classes.searchButtom} color="primary" size="large" 
			onClick={searchTextClick}>
				Buscar
			</Button>
			</div>
		</Toolbar>
		</AppBar>
		</div>
	)
	
}