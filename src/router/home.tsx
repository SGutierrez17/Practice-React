import React from 'react'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'

import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate(); 

    const handleClickAbout = () => {
        navigate('/about-us'); 
    };

return (
    <div>
        <h2>Page of Home</h2>
            <nav>
            <ListItem disablePadding sx={{backgroundColor:'#EEEEEE', borderRadius:'12px'}} onClick={handleClickAbout}>
                <ListItemButton>
                    <HomeIcon/>
                    <ListItemText primary= 'Inicio'/>
                </ListItemButton>
            </ListItem>
            </nav>
    </div>
)
}
