import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,Route} from 'react-router-dom';

import { CircularProgress,Grid } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import queryString from "query-string";
import style from "./style";
import '../../index.css'

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading,totalResult} from "../../redux/selectors";
import  MovieResult  from "../../components/MovieResult";



export default function Results(){

    const history=useHistory();
    const location=history.location;
    const classes=style();

    const dispatch= useDispatch();
    const movies= useSelector(state=>movieResults(state));
    const totalResults=useSelector(state=>totalResult(state));
    const totalPages=Math.ceil(totalResults/10);

    const [movieSearch,setMovieSearch]=useState('')
    const [page,setPage]=useState(0);
    const [change,setChange]=useState(false)

    const isLoading= useSelector(state => isSearchLoading(state));
    let {movieName} = queryString.parse(location.search);
    if(movieName==undefined)
            movieName='piratas'
    useEffect(()=>{
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
        setChange(true)
    };
    useEffect(()=>{
        if(change==true){
            movieName=movieName+'&page='+page
            dispatch(searchMovie({movieName}))
            setChange(false)
        }
    })

    return(
        <div >
        {movieName==movieSearch &&
            <Pagination count={totalPages} defaultPage={1} color="primary" className={classes.pagination} 
            onChange={handleChange}/>
        }
        <Grid container className={classes.box} >
           {renderMovies()}
        </Grid>
        
        
        </div>
        
    )
}