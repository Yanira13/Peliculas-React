import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Card,Grid, Typography } from "@material-ui/core";
import style from "./style";
import sin_img from "../../media/sin_imagen.jpg";
const MovieResult = ({Title, Year, Type, imdbID, Poster,history}) => {

    const classes=style();
    const handleSeeMovieClick=()=>{
        history.push(`/movie/${imdbID}`)
    }

    if(Poster!='N/A'){
        return(
            <Card className={classes.cardContainer}>
                <Grid container>
                    <Grid item>
                        <img src={Poster} alt={Title} className={classes.img}/>
                    </Grid>
                    <Grid item className={classes.gridText}>
                        <Typography>{Title}</Typography>
                        <Typography>{Year}</Typography>
                        <Typography>{Type}</Typography>
                        <Button color="primary" variant="contained" className={classes.buttom} 
                        onClick={handleSeeMovieClick}>Ver más</Button>
                    </Grid>
                </Grid>
            </Card>
        );
    }else{
        return(
            <Card className={classes.cardContainer}>
                <Grid container>
                    <Grid item>
                        <img src={sin_img} alt={Title} className={classes.img}/>
                    </Grid>
                    <Grid item className={classes.gridText}>
                        <Typography>{Title}</Typography>
                        <Typography>{Year}</Typography>
                        <Typography>{Type}</Typography>
                        <Button color="primary" variant="contained" className={classes.buttom} 
                        onClick={handleSeeMovieClick}>Ver más</Button>
                    </Grid>
                </Grid>
            </Card>
        );
    }

    
}

export default withRouter(MovieResult) ;