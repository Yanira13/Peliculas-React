import {makeStyles,fade} from '@material-ui/core';

const ceneteredStyleObj={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}

export default makeStyles((theme)=>( {

    searchButtom:{
        marginLeft:'.5rem',
        color:'white'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
       // display: 'none',
       // display: 'block',
        // [theme.breakpoints.up('sm')]: {
        //   display: 'block',
        // },
        textDecoration:'none',
        color:'white',
        fontSize:25,
        width:5
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
        paddingLeft: 10,
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
      
       
}));