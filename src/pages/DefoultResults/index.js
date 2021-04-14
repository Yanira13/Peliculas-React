import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, CircularProgress, Divider,Grid , flexGrow} from "@material-ui/core";
import queryString from "query-string";
import style from "../Results/style";

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading} from "../../redux/selectors";
import  MovieResult  from "../../components/MovieResult";

let actualMovieName='';

export default function DefaultResults(){

    const classes=style();

    const dispatch= useDispatch();
    const movies= useSelector(state=>movieResults(state));
    
    const isLoading= useSelector(state => isSearchLoading(state));

    useEffect(()=>{
        let movieName = 'piratas';
        dispatch(searchMovie({movieName}))
        //para solo hacer una petición a la api
    //    if (movieName!=actualMovieName) {
    //         actualMovieName=movieName;
    //         dispatch(searchMovie({movieName}))
    //    } 
    });

    const renderMovies=()=>{
        if(movies){
            return movies.map((value, index) => <MovieResult key={index} {...value}/> );
        }  
        else if(isLoading)
            return <CircularProgress size={100} />
    }

    return(
        <Grid container className={classes.box} >
           {renderMovies()}
        </Grid>
        
    )
}