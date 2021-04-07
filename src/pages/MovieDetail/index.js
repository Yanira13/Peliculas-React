import React, {useEffect} from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch,useSelector } from "react-redux";

import { movieResult as mvSelector } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/search";

export default ({match}) => {

    const dispatch=useDispatch();
    const movieResult=useSelector(state=> mvSelector(state))

    useEffect(()=>{
        const movieId = match.params.id;
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) 
            dispatch(searchMovieById({movieId}));  
    });

    if (!movieResult) 
        return <CircularProgress size={50} color="primary"/>;

    return (
        <Container>
           <Typography variant="h3">{movieResult.Title}</Typography>
           <img src={movieResult.Poster} alt={movieResult.Title}/>
           <Typography>Actores: {movieResult.Actors}</Typography>
           <Typography>Director: {movieResult.Director}</Typography>
           <Typography>Pais: {movieResult.Rated}</Typography>
           <Typography>Clasificación: {movieResult.Country}</Typography>
           <Typography>Premios: {movieResult.Awards}</Typography>
           <Typography>Sinopsis: {movieResult.Plot}</Typography>
        </Container>
    )
}