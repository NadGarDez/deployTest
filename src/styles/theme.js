import { createTheme } from "@mui/material/styles"

const theme = createTheme(
  {
    typography: {
      ContrastTittle: {
        color: 'white',
        fontSize:55,
        fontFamily:'Square Peg'
      },
      ContrastSubtitle: {
        color: 'white',
        fontSize:40,
        fontFamily:'Square peg'
      },
      ContrastContent: {
        color: 'white',
        fontSize:15,
        fontFamily:'Montserrat'
      },
      h1:{
        color: '#ffd740',
        fontWeight:'bold',
        fontSize:100,
        fontFamily:'roboto'
      },
      h1Mobile:{
        color: '#ffd740',
        fontWeight:'bold',
        fontSize:60,
        fontFamily:'roboto'
      },
      ContrastLittle: {
        color: 'white',
        fontSize:12,
        fontFamily:'Montserrat'
      },
      
    },
    palette: {
      type: 'light',
      primary: {
        main: '#ffd740',
      },

      darkPrimary:{
        main:"#df8d1c"
      },
      secondary: {
        main: '#3d2719',
      },
    
     
    }
  }
)

  export default theme;