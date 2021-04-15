import { makeStyles} from '@material-ui/core';
import { BorderAll } from '@material-ui/icons';

export default makeStyles({
    cardContainer:{
         marginRight:50,
         marginTop:20,
         padding:6,
         backgroundColor:'#8c9eff',
         display:'flex',
        flexDirection:'column'
    },
    img:{
        width:250,
        margin:5,
        height:300,
    },
    cardContend:{
        padding:10,
        width:150
    },
    box:{
        alignItems:'flex-end'
    },
    titulo:{
        width:245 
    },
    button:{
        padding:0,
        marginBottoms:20,
        color:'black'
    }
})