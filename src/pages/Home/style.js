import {makeStyles,fade} from '@material-ui/core';

const ceneteredStyleObj={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}

export default makeStyles((theme)=>( {

    container:{
        // height:'100vh',
        // ...ceneteredStyleObj,
        // flexDirection:'column'
    },
    cardContainer:{
        ...ceneteredStyleObj,
        flexDirection:'column',
        width:400,
        height:200,
        padding:'2rem'
    },
    title:{
        fontSize:'4rem'
    },
    titleGridContainer:{
        ...ceneteredStyleObj
    },
    textFieldSearch:{
        width:'90%'
    },
    buttomContainer:{
        marginTop:'.5rem'
    },
    searchButtom:{
        marginLeft:'.5rem',
        color:'white'
    },
    icon:{
        fontSize:'4rem'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.50),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.70),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        borderColor:'text.primary',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
      appBar:{
        backgroundColor:'#8c9eff' ,
       }
}));