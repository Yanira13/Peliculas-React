import React, {useEffect, useState} from 'react';
import { useHistory,Link } from 'react-router-dom';


import {Button,AppBar,Toolbar,IconButton,InputBase} 
from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import styles from './style'




export default function Home (){

	const history= useHistory();
	const [searchText,setSearchText] = useState('');
	const classes=styles();
	const val="";
	
	const takeSearchTextChange= event =>{
		setSearchText(event.target.value);
	};

	const searchTextClick= () =>{
		history.push(`/results?movieName=${searchText}`);
		console.log(searchText);
	};
	
	return(
	
	<div className={classes.root}>
		<AppBar position="static" className={classes.appBar}>
		<Toolbar>
			 <IconButton
			edge="start"
			className={classes.menuButton}
			color="inherit"
			aria-label="open drawer"
			>
			 <MenuIcon />  
			</IconButton> 
			<Link to="/" className={classes.title} >
				Peliculas y series
			</Link>
			<div className={classes.search}>
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
				<Button  size="medium" className={classes.searchButtom} 
				onClick={searchTextClick}>
					<SearchIcon />  
				</Button>
			</div>
			
		</Toolbar>
		</AppBar>
		
	</div>
	)
	
	
}