import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';

import { Container, CircularProgress, Divider,Grid , flexGrow} from "@material-ui/core";
import queryString from "query-string";
import style from "./style";

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import  MovieResult  from "../../components/MovieResult";
let actualMovieName='';

export default function Results(){

    const history=useHistory();
    const location=history.location;
    const classes=style();

    const dispatch= useDispatch();
    const movies= useSelector(state=>movieResults(state));
    const isLoading= useSelector(state => isSearchLoading(state));

    useEffect(()=>{
        let {movieName} = queryString.parse(location.search);
        
        //para solo hacer una petición a la api
       if (movieName!=actualMovieName) {
           //para que salga por defecto las peliculas que tengan pirata en su nombre
        //    if(movieName==undefined)
        //         movieName='pirata'
            actualMovieName=movieName;
            dispatch(searchMovie({movieName}))
            
       }
       
    });

    const renderMovies=()=>{
        if(movies){
            return movies.map((value, index) => <MovieResult key={index} {...value}/>);
        }  
        else if(isLoading)
            return <CircularProgress size={100} />
        if(movies==undefined)
            return <h1>No tenemos esa pelicula</h1>
        return <div/>
    }
console.log(renderMovies());
    return(
        <Grid container className={classes.box} >
           {renderMovies()}
        </Grid>
    )
}