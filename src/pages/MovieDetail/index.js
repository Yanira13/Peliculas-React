import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';

import { Container, CircularProgress, Typography,Grid,Button } from "@material-ui/core";
import styles from "./style"
import '../../index.css'

import { movieResult as mvSelector } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/search";
import sin_img from "../../media/sin_imagen.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'

export default ({match})=> {

    const dispatch=useDispatch();
    const history= useHistory();
    const movieResult=useSelector(state=> mvSelector(state))
    const classes=styles();

    const returnPageMovies=()=>{
        history.push(`/results?movieName=${match.params.name}`);
    }
    useEffect(()=>{
        const movieId = match.params.id;
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
        <Grid container spacing={2} id="box" className={classes.container}>
            <Grid item xs={12}  className={classes.header} id="txt">
                <Grid container direction="row" spacing={2} alignItems="center" className={classes.containerTitle}>
                    <Grid xs={1}>
                        <Button onClick={returnPageMovies} className={classes.boton} >
                            <FontAwesomeIcon icon={faLongArrowAltLeft}  id="flecha" size="3x"/>
                        </Button>
                    </Grid>
                    <Grid xs={8} className={classes.titulo}>
                        <Typography variant="h3" className={classes.tituloTxt}>{movieResult.Title}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} className={classes.img} id="txt">
                <a href={`https://www.youtube.com/results?search_query=${movieResult.Title}+trailer`}>
                <img src={imagen} alt={movieResult.Title} width='300'/>
                </a>
            </Grid>
            <Grid item xs={5} className={classes.info} id="txt">
                {movieResult.Actors != 'N/A' && 
                <Typography className={classes.txt}><strong>Actores:</strong> {movieResult.Actors}</Typography>}
                {movieResult.Director != 'N/A' && 
                <Typography className={classes.txt}><strong>Director:</strong> {movieResult.Director}</Typography>}
                {movieResult.Country != 'N/A' && 
                <Typography className={classes.txt}><strong>Pais:</strong> {movieResult.Country}</Typography>}
                {movieResult.Rated != 'N/A' && 
                <Typography className={classes.txt}><strong>Clasificación:</strong> {movieResult.Rated}</Typography>}
                {movieResult.Genre != 'N/A' && 
                <Typography className={classes.txt}><strong>Genero:</strong> {movieResult.Genre}</Typography>}
                {movieResult.Awards != 'N/A' && 
                <Typography className={classes.txt}><strong>Premios: </strong> {movieResult.Awards}</Typography>}
                {movieResult.Plot != 'N/A' && 
                <Typography className={classes.txt}><strong>Sinopsis:</strong> {movieResult.Plot}</Typography>}
            </Grid>
        </Grid>
    )
}