import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Card,Grid, Typography, CardActionArea, CardMedia, CardContent, CardActions } from "@material-ui/core";
import style from "./style";
import sin_img from "../../media/sin_imagen.jpg";
import  Image  from "material-ui-image";

const MovieResult = ({Title, Year, Type, imdbID, Poster,history}) => {

    const classes=style();
    const handleSeeMovieClick=()=>{
        history.push(`/movie/${imdbID}`)
    }

    if(Poster!='N/A'){
        return(
         <Card className={classes.cardContainer}>
               <CardMedia component="img" src={Poster} alt={Title} height="140" className={classes.img} cover="true"/>
               <CardContent className={classes.cardContend}>
                  <Typography className={classes.titulo}  gutterBottom variant="h5" component="h2">
                  {Title}
                  </Typography>
                  <Typography>{Year}</Typography>
                  <Typography>{Type}</Typography>
               </CardContent>
             <CardActions className={classes.box}>
             <Button color="primary"  size="small"
             onClick={handleSeeMovieClick} >Ver más</Button>
             </CardActions>
         </Card>
        );
    }else{
        return(
            <Card className={classes.cardContainer}>
             <CardActionArea>
               <CardMedia component="img" src={sin_img} alt={Title} height="140" className={classes.img}/>
               <CardContent className={classes.cardContend}>
                 <Typography gutterBottom variant="h5" component="h2">
                 {Title}
                 </Typography>
                 <Typography>{Year}</Typography>
                <Typography>{Type}</Typography>
               </CardContent>
             </CardActionArea>
             <CardActions className={classes.box} >
                 <Button color="primary" variant="contained" size="small" 
                onClick={handleSeeMovieClick} className={classes.buttom}>Ver más</Button>
             </CardActions>
           </Card>
        );
    }

    
}

export default withRouter(MovieResult) ;