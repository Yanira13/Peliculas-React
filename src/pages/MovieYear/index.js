import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, CircularProgress, Divider,Grid , flexGrow} from "@material-ui/core";
import queryString from "query-string";
import styles from "../Results/style";

import { searchMovieByYear } from "../../redux/actions/search";
import { movieResultYear, isSearchLoading} from "../../redux/selectors";
import  MovieResult  from "../../components/MovieResult";


export default function MovieYear({match}){

    const dispatch=useDispatch();
    const movies=useSelector(state=> console.log(state));
    const [movieSearch,setMovieSearch]=useState('');
    const isLoading= useSelector(state => isSearchLoading(state));

    const classes=styles();

    useEffect(()=>{
        const movieYear = match.params.year;
        console.log(movieYear);
        // if (!movieResult || movieResult && movieResult.imdbID !== movieYear) 
        //     dispatch(searchMovieById({movieYear}));  
        if (movieYear!=movieSearch) {
            setMovieSearch(movieYear)
            dispatch(searchMovieByYear({movieYear}))
        } 
    });
        console.log(movies);
        const renderMovies=()=>{
            if(movies){
                return movies.map((value, index) => <MovieResult key={index} {...value}/> );
            }  
            else if(isLoading)
                return <CircularProgress size={100} />
            if(movies==undefined)
                return <h1>No tenemos esa pelicula</h1>
            return <div/>
        }

    return(
        <Grid container className={classes.box} >
           {renderMovies()}
        </Grid>
        
    )
}