import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";

import { Container, CircularProgress, Typography,Grid } from "@material-ui/core";
import styles from "./style"

import { movieResult as mvSelector } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/search";
import sin_img from "../../media/sin_imagen.jpg";
import { Link } from "react-router-dom";

export default ({match})=> {

    const dispatch=useDispatch();
    const movieResult=useSelector(state=> mvSelector(state))
    const classes=styles();

    useEffect(()=>{
        const movieId = match.params.id;
        console.log(match);
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) 
            dispatch(searchMovieById({movieId}));  
    });

    if (!movieResult) 
        return <CircularProgress size={50} color="primary"/>;

    let imagen;
    if(movieResult.Poster!='N/A')
        imagen=movieResult.Poster
    else
        imagen=sin_img

    return (
        <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} className={classes.titulo}>
                <Typography variant="h3" className={classes.tituloTxt}>{movieResult.Title}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.img}>
                <a href={`https://www.youtube.com/results?search_query=${movieResult.Title}+trailer`}>
                <img src={imagen} alt={movieResult.Title} width='300'/>
                </a>
            </Grid>
            <Grid item xs={5} className={classes.info}>
                <Typography className={classes.txt}><strong>Actores:</strong> {movieResult.Actors}</Typography>
                <Typography className={classes.txt}><strong>Director:</strong> {movieResult.Director}</Typography>
                <Typography className={classes.txt}><strong>Pais:</strong> {movieResult.Country}</Typography>
                <Typography className={classes.txt}><strong>Clasificación:</strong> {movieResult.Rated}</Typography>
                <Typography className={classes.txt}><strong>Premios: </strong> {movieResult.Awards}</Typography>
                <Typography className={classes.txt}><strong>Sinopsis:</strong> {movieResult.Plot}</Typography>
            </Grid>
        </Grid>
    )
}