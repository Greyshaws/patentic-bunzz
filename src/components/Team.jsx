import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const teamates = [
    {
        name: "Pinqode",
        pic: "/assets/x88ak4.jpg",
        role: "Web/Blockchain Dev",
    },
    {
        name: "Greyshaws",
        pic: "/assets/greyshaws.png",
        role: "Blockchain Dev & Law",
    }
]

const Team = () => {
  return (
    <Box>
        <Typography variant="h2" sx={{
            my: 2,
            textAlign: {xs: "left", md: "center"}
        }}>Team</Typography>
        <Grid container spacing={2} >
            {teamates.map((mate, index) => {
                return <Grid item xs={12} md={6} key={index}>
                <Paper elevation={0} sx={{
                    bgcolor: "secondary2.dark",
                    borderRadius: "8px",
                    p:2, 
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",


                }}>

                    <Box sx={{
                        position: "relative",
                        width: {xs: "40px", md: "50px"},
                        height: {xs: "40px", md: "50px"},
                        borderRadius: "50%",
                        bgcolor: "secondary2.fade2",
                        color: "primary.dark",
                        overflow: "hidden",

                        "& img": {
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                        }
                    }}>
                        <img src={mate.pic} alt={"Pinqode"} />
                    </Box>
                    <Typography variant="body1" component="h4" sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        color: "secondary2.contrastText"
                        
                    }}>{mate.name}</Typography>
                    <Typography variant="body2" component="p" sx={{
                        fontWeight: 500,
                        textAlign: "center",
                        color: "secondary2.contrastText"
                    }}>{mate.role}</Typography>
                  
                </Paper>
            </Grid>
            })}
            

            
        </Grid>
    </Box>
  )
}

export default Team