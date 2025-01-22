import React from 'react'
import {
    Box,
    Link,
    Typography,
    
  } from "@mui/material";
const Footer = () => {
    return ( 
        <Box sx={{p:3, textAlign:'center'}}>
            <Typography>© 2025 All rights reserved by <Link href="https://www.invotra.com">Invotra.com</Link> </Typography>
        </Box>
     );
}
 
export default Footer;