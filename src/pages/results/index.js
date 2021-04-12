import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';

import { Container, CircularProgress, Divider,Grid } from "@material-ui/core";
import queryString from "query-string";

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import  MovieResult  from "../../components/MovieResult";
let actualMovieName='';

export default function Results(){

    const history=useHistory();
    const location=history.location;


    const dispatch= useDispatch();
    const movies= useSelector(state=>movieResults(state));
    const isLoading= useSelector(state => isSearchLoading(state));

    useEffect(()=>{
        let {movieName} = queryString.parse(location.search);
        
        //para solo hacer una petición a la api
       if (movieName!=actualMovieName) {
            actualMovieName=movieName;
            dispatch(searchMovie({movieName}))
            
       }
       
    });
 
    const renderMovies=()=>{
        if(movies)
            return movies.map((value, index) => <MovieResult key={index} {...value}/>);
        else if(isLoading)
            return <CircularProgress size={100} color="secondary"/>
        return <div/>
    }

    return(
        <Grid container>
           {renderMovies()}
        </Grid>
    )
}