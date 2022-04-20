
import {  ThemeProvider } from "@mui/material/styles"
import {
    Routes,
    Route,
  } from "react-router-dom";
import { Products } from "../pages/Products";
import { Welcome } from '../pages/Welcome';
import theme from "../styles/theme";

const Router = ()=>{
    return(
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/products" element={<Products/>}/>
                
            </Routes>
        </ThemeProvider>
        
    )
    
}


export {Router}