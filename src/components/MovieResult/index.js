import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Card,Grid, Typography, CardActionArea, CardMedia, CardContent, CardActions } from "@material-ui/core";
import style from "./style";
import sin_img from "../../media/sin_imagen.jpg";
import  Image  from "material-ui-image";

const MovieResult = ({Title, Year, Type, imdbID, Poster,history,Ratings,Actors}) => {

    const classes=style();
    const handleSeeMovieClick=()=>{
        history.push(`/movie/${imdbID}`)
    }
    // console.log(Ratings);
    // console.log(Actors);
    let imagen;
    if(Poster!='N/A')
        imagen=Poster
    else
        imagen=sin_img

        return(
         <Card className={classes.cardContainer}>
               <CardMedia component="img" src={imagen} alt={Title} height="140" className={classes.img} cover="true"/>
               <CardContent className={classes.cardContend}>
                  <Typography className={classes.titulo}  gutterBottom variant="h5" component="h2">
                  {Title}
                  </Typography>
                  <Typography>{Year}</Typography>
                  <Typography>{Type}</Typography>
                  <Typography>{Ratings}</Typography>
               </CardContent>
             <CardActions className={classes.box}>
             <Button color="primary"  size="small"
             onClick={handleSeeMovieClick} >Ver más</Button>
             </CardActions>
         </Card>
        );  
}

export default withRouter(MovieResult) ;