import { makeStyles} from '@material-ui/core';

export default makeStyles((theme)=>({
    container:{
       alignSelf:'center',
       width:800,
       marginTop:10,
    },
    containerTitle:{
        height:100,
        alignSelf:'center',
        margin:5
    },
    boton:{
        width:50,
        height:50
    },
    header:{
        display:'flex',
        justifyContent:"space-between",
    },
    titulo:{
        display:'flex',
        justifyContent:'center'
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