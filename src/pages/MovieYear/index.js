import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, CircularProgress, Divider,Grid , flexGrow} from "@material-ui/core";
import queryString from "query-string";
import style from "../Results/style";

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading} from "../../redux/selectors";
import  MovieResult  from "../../components/MovieResult";

let actualMovieName='';

export default function MovieYear({match}){

    const dispatch=useDispatch();
    const movies=useSelector(state=> movieResults(state))
    const classes=styles();

    useEffect(()=>{
        const movieYear = match.params.year;
        
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) 
            dispatch(searchMovieById({movieId}));  
    });


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