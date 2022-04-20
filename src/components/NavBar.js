import { AppBar, Box, Button, Drawer, List, ListItem,ListItemText, Toolbar, Typography } from '@mui/material';
import  { useState } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { LINKS, TITLE_APP } from '../constans/constants';
const NavBar = ({page})=>{

    const [openDrawer, setOpenDrawer] = useState(false);
    return(
        <>
        <Drawer
            anchor='left'
            open={openDrawer}
            onClose={
                ()=>{
                    setOpenDrawer(!openDrawer)
                }
            }
        >
            <List>
                {
                    LINKS.map(
                        item =>{
                           return  item !== page &&
                            (<ListItem button key={item}>
                                <ListItemText primary={item} />
                              </ListItem>)
                        }
                    )
                }
            </List>
        </Drawer>
        <Box sx={{flexGrow:1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1,  display: {md:'flex',sm:'none', xs:'none',xl:'flex'} }}>
                        <Typography variant="h2">{TITLE_APP}</Typography>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: {md:'flex',sm:'none', xs:'none',xl:'flex'}}} />

                    <Box sx={{flexGrow: 1, display: {md:'flex',sm:'none', xs:'none',xl:'flex'},flexDirection: 'row-reverse'}}>
                        {
                            LINKS.map(
                                (item, index) =>item !== page && (<Box sx={{m:2}} key={index}>
                                            <Button variant="outlined" m={1} href={`/${item}`} color="secondary">{item}</Button>
                                        </Box>)
                            )
                        }
                        
                    </Box>   
                    <Box sx={{flexGrow: 1, display: {md:'none',sm:'flex', xs:'flex',xl:'none'},flexDirection: 'row'}}>
                    <IconButton
                        edge="start"
                        size="large"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={
                            ()=>setOpenDrawer(!openDrawer)
                        }
                    >
                        <MenuIcon />
                    </IconButton>
                    </Box>        

                    <Box sx={{ flexGrow: 1,  display: {md:'none',sm:'flex', xs:'flex',xl:'none'},flexDirection: 'row', justifyContent:'center' }}>
                        <Typography variant="h6">{TITLE_APP}</Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: {md:'none',sm:'flex', xs:'flex',xl:'none'}}} />
                                
                </Toolbar>
            </AppBar>

           
        </Box>
        </>
    )
}


NavBar.propTypes = {
    page: PropTypes.string
}

export {NavBar};