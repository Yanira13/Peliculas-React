import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,Route} from 'react-router-dom';

import { CircularProgress,Grid } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import queryString from "query-string";
import style from "./style";
import '../../index.css'

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading} from "../../redux/selectors";
import  MovieResult  from "../../components/MovieResult";



export default function Results(){

    const history=useHistory();
    const location=history.location;
    const classes=style();

    const dispatch= useDispatch();
    const movies= useSelector(state=>movieResults(state));
    const [movieSearch,setMovieSearch]=useState('')
    const [page,setPage]=useState(0);

    const isLoading= useSelector(state => isSearchLoading(state));
    let {movieName} = queryString.parse(location.search);
    
    useEffect(()=>{
       
        if(movieName==undefined)
            movieName='piratas'
        //para solo hacer una petición a la api
       if (movieName!=movieSearch) {
            setMovieSearch(movieName)
            dispatch(searchMovie({movieName}))
       } 
    });

    const renderMovies=()=>{
        if(movies){
            return movies.map((value, index) => <MovieResult key={index} {...value}/> );
        }  
        else if(isLoading)
            return <CircularProgress size={100} />
        if(movies==undefined)
            return <h1 id="error">No tenemos esa pelicula</h1>
        return <div/>
    }

    const handleChange = (event, value) => {
        setPage(value);
        dispatch(searchMovie('piratas&page=2'))
    };

    return(
        <div >
        <Grid container className={classes.box} >
           {renderMovies()}
        </Grid>
        <Pagination count={10} color="primary" className={classes.pagination} 
        onChange={handleChange}/>
        </div>
        
    )
}