import { makeStyles} from '@material-ui/core';

export default makeStyles((theme)=>({
    container:{
       alignSelf:'center',
       width:700,
       marginTop:10,
        backgroundColor:'#8c9eff',
        color:'#dff6f9',
    },
    titulo:{
        display:'flex',
        justifyContent:"center",
        
    },
    img:{
        display:'flex',
        justifyContent:"flex-end",
        marginBottom:20,
          
     },
    info:{
        marginLeft:20
    },
    txt:{
        marginBottom:5
    },
    tituloTxt:{
        fontFamily:'Homer Simpson UI',
        marginLeft:40
    }

}))