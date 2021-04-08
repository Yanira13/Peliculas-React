import React, {useState} from 'react';
import { BrowserRouter as Router, useHistory,Route } from 'react-router-dom';

import Results from '../results';
import MovieDatil from "../MovieDetail";


import {Card, Container,Typography,Grid, TextField, Button,AppBar,Toolbar,IconButton,InputBase} 
from '@material-ui/core'
import {MenuIcon} from "@material-ui/icons/Menu";
import {SearchIcon} from "@material-ui/icons/Search";
import styles from './style'
import { MovieIcon } from "../../icons/index";



export default function Home (){

	const history= useHistory();

	const [searchText,setSearchText] = useState('');
	const classes=styles();

	
	const takeSearchTextChange= event =>{
		setSearchText(event.target.value);
	};
	const cleandText= event =>{
		setSearchText('');
	};
	const searchTextClick= event =>{
		//buscar como funciona bien history
		history.push(`/results?movieName=${searchText}`);
	};
	
	return(
	
		<div className={classes.root}>
		<AppBar position="static" className={classes.appBar}>
		<Toolbar>
			{/* <IconButton
			edge="start"
			className={classes.menuButton}
			color="inherit"
			aria-label="open drawer"
			>
			 <MenuIcon /> 
			</IconButton> */}
			<Typography className={classes.title} variant="h6" noWrap>
			Peliculas
			</Typography>
			<div className={classes.search}>
			{/* <div className={classes.searchIcon}>
				 <SearchIcon /> 
			</div> */}
			<InputBase
				value={searchText}
				placeholder="" 
				onChange={takeSearchTextChange}
				classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
			/>
			<Button  size="medium" className={classes.searchButtom} 
			onClick={searchTextClick}>
				Buscar  
			</Button>
			</div>
			
		</Toolbar>
		</AppBar>
		<Router>
		    <div>
				<Route path="/results" component={Results} />
				<Route path="/movie/:id" component={MovieDatil} />
			</div>
		</Router>
		</div>
	)
	
	
}