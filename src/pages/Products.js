import { Box, Typography , Toolbar, Paper} from '@mui/material';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { productSelector } from '../store/redux/slices/productSlice';

const Products = ()=>{
    const store = useStore();
    const dispatch = useDispatch()
    useEffect(
        ()=>{
            dispatch({type:"PRODUCTS/FETCH_ALL"});
            const unsuscribe = store.subscribe(
                ()=>{
                    console.log(productSelector(store.getState()))
                }
            )
            return unsuscribe;
        },
        []
    );

    return (
        <>
         <Box sx={{ display:'flex',flexDirection:'column', flexWrap:'wrap', width:'100%'}} >
                <NavBar />
                <Toolbar/>
                <Box sx={{backgroundColor:'#f5f5f5', flexDirection:'row',display:'flex',width:'100%',height:'70vh' }}>
                    <Box p={3} sx={{width:'100%', flexWrap:'wrap', display:'flex', justifyContent:'center'}}>
                        <Paper m={3} p={2} sx={{padding:6,width:'80%',justifyContent:'center',alignItems:'center', display:'flex', flexWrap:'wrap'}}>
                            
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                                    <Typography variant="h4">Here we will print the products</Typography>
                                </Box>
                                <Box mt={2} sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                
                                </Box>

                                
                                
                            </Box>
                            
                        </Paper>
                    </Box>

                
                </Box>
                <Footer/>
            </Box>
       </>
    )
}

export {Products};