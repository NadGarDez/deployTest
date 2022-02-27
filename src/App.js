import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

/*
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { ColorContext } from './contexts/colorContex';
import themeColors from './styles/colors';

const Lazy =lazy(()=>{
  return new Promise(
    (resolve, reject) =>{
      setTimeout(() => {
       resolve(import('./asyncModule'))
       //reject(new Error());
      }, 5000);
    }
  )
});

const Lazy2 =lazy(()=>{
  return new Promise(
    (resolve, reject) =>{
      setTimeout(() => {
       resolve(import('./routeTwo'))
      
      }, 5000);
    }
  )
});
*/

function App() {
  /*
  const [theme,setTheme] = useState(
    themeColors.dark
  )

  const toggleTheme = (theme)=>theme === 'dark' ? setTheme(themeColors.dark) : setTheme(themeColors.ligth);

  const RouteOne = ()=>{
    return (
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <Lazy toogle={toggleTheme}/>
        </Suspense>
      </ErrorBoundary>
    )
  }

  const RouteTwo = ()=>{
    return(
      <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <Lazy2 toogle={toggleTheme}/>
      </Suspense>
    </ErrorBoundary>
    );
  }
  

  return (
    <ColorContext.Provider value={{theme:theme}}>
      <div style={{height:80, width:'100%', backgroundColor:'red'}}>
          <p>Some header</p>
        </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteOne/>}/>
          <Route path="2" element={<RouteTwo/>}/>
        </Routes>
      </BrowserRouter>
    </ColorContext.Provider>
  );
  */

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Adrian Site
          </Typography>
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          padding: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", padding: 5 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">Este es mi sitio</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
