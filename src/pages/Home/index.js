import React, {useEffect, useState} from 'react';
import { useHistory,Link } from 'react-router-dom';


import {Button,AppBar,Toolbar,IconButton,InputBase,Menu,MenuItem } 
from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import styles from './style'
import '../../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons'


export default function Home (){

	const history= useHistory();
	const [searchText,setSearchText] = useState('');
	const classes=styles();
	
	//Recoger valor del input
	const takeSearchTextChange= event =>{
		setSearchText(event.target.value);
	};
	//Buscador 
	const searchTextClick= (event) =>{
		let x = event.keyCode
		if(x==13 || x==undefined){
			history.push(`/results?movieName=${searchText}`);
		}
	};

	//Menu
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	function handleClose (event)  {
		setAnchorEl(null);
		
	};
	const options = [
		'None',
		'Atria',
		'Callisto',
		'Dione',]

	//Recoger valor del menu
	const [year,setYear]=useState('')

	function takeSearchYearChange (event) {
		setYear(event.currentTarget.dataset.value)
	};

	//Modo oscuro
	const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
	const [cont,setCont]=useState(0)

	useEffect(() => {
	  document
		.getElementsByTagName("HTML")[0]
		.setAttribute("data-theme", localStorage.getItem("theme"));
	}, [checked]);

	const toggleThemeChange = () => {
	  if (cont ==0) {
		localStorage.setItem("theme", "dark");
		setChecked(true);
		setCont(cont+1)
	  } else {
		localStorage.setItem("theme", "light");
		setChecked(false);
		setCont(cont-1)
	  }
	}

	return(
	
	<div className={classes.root}>
		<AppBar position="static" id="appBar" >
		<Toolbar>
			<IconButton edge="start" className={classes.menuButton} color="inherit"
				aria-label="open drawer"  onClick={handleClick}>
					<MenuIcon /> 
			</IconButton> 
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				// onClick={takeSearchYearChange}
				// data-value={year}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
				style: {
					maxHeight: 48 * 4.5,
					width: '20ch',
				},
				}}
			>
				{options.map((option) => (
				<MenuItem key={option} data-value={option} onClick={takeSearchYearChange} >
					{option}
				</MenuItem>
				))}
      		</Menu>
			<Link to="/results" className={classes.title} >
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
					inputProps={{ 'aria-label': 'search',onKeyDown:function(){searchTextClick(event)} }}
				/>
				<Button  size="medium" className={classes.searchButtom} 
				onClick={searchTextClick}>
					<SearchIcon />  
				</Button>
			</div>
		 	 <Button  id="switch" onClick={toggleThemeChange}>
				 <FontAwesomeIcon icon={faMoon} id="icon"/>
				 <FontAwesomeIcon icon={faSun} id="icon"/>
	  		</Button>
		</Toolbar>
		</AppBar>
	</div>
	)
	
	
}