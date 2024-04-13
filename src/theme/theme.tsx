import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:'#ff5722'
        },
        secondary:{
            main: '#1976D2'
        }
    },
    components:{
        MuiAppBar:{
            styleOverrides:{
                root:{
                    color:'black',
                    background:'lightgreen',
                    borderRadius:'10px',
                }
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    width:'250px',
                    padding:'8px',
                    margin:'8px'
                }
            }
        },
    }
})

export default theme;