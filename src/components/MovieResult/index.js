import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Card,Link, Typography, CardActionArea, CardMedia, CardContent, CardActions } from "@material-ui/core";
import style from "./style";
import sin_img from "../../media/sin_imagen.jpg";
import '../../index.css'

const MovieResult = ({Title, Year, Type, imdbID, Poster,history}) => {

    const classes=style();
    const handleSeeMovieClick=()=>{
        history.push(`/movie/${imdbID}`)
    }
    const handleSeeMovieYearClick=()=>{
        history.push(`/year/${Year}`)
        
    }
    let imagen;
    if(Poster!='N/A')
        imagen=Poster
    else
        imagen=sin_img

        return(
         <Card className={classes.cardContainer} id="cardContainer">
               <CardMedia component="img" src={imagen} alt={Title} height="140" className={classes.img} cover="true"/>
               <CardContent className={classes.cardContend} id="title">
                    <Typography className={classes.titulo}  gutterBottom variant="h5" component="h2">
                        {Title}
                    </Typography>
                    <Link color="primary" className={classes.button} id="title" size="medium" onClick={handleSeeMovieYearClick}>
                        {Year}
                    </Link>
                    <Typography>{Type}</Typography>
               </CardContent>
             <CardActions className={classes.box}>
             <Button color="primary"  size="small" id="title"
             onClick={handleSeeMovieClick} >Ver más</Button>
             </CardActions>
         </Card>
        );  
}

export default withRouter(MovieResult) ;