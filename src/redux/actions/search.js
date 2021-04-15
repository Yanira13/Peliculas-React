import React from 'react';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_BY_ID_START,SEARCH_MOVIE_BY_YEAR_START } from "../../consts/actionTypes";

export const searchMovie = payload =>({
    type:SEARCH_MOVIE_START,
    payload
});

export const searchMovieById = payload =>({
    type:SEARCH_MOVIE_BY_ID_START,
    payload
});

export const searchMovieByYear = payload =>({
    type:SEARCH_MOVIE_BY_YEAR_START,
    payload
});
