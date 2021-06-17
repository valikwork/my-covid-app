import React from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

export default function Footer() {
    return (
        <div style={{ width:"100%", backgroundColor: "#3f51b5", padding: "25px 0", marginTop: "30px" }}>
            <Container>
                <Typography variant="h6" style={{ color: '#fff' }}>
                    Done by <a style={{ color: '#fff' }} href="https://github.com/valikwork">valikwork</a>
                </Typography>
            </Container>
        </div>
        
    )
}
