import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const features = [
    {
        title: "Time-Logged Blockchain Patents",
        text: "Log your intellectual property into the blockchain and we'll make sure to store the date -time as proof of in your address",
    },
    {
        title: "Message Patent Owners",
        text: "Log your intellectual property into the blockchain and we'll make sure to store the date -time as proof of in your address",
    },
    {
        title: "PAT Token",
        text: "Log your intellectual property into the blockchain and we'll make sure to store the date -time as proof of in your address",
    },
]

const Features = () => {
  return (
    <Box>
            <Typography variant="h2" sx={{
                my: 2,
                textAlign: {xs: "left", md: "center"}
            }}>Features</Typography>
            <Grid container spacing={2} >
                {features.map((feature, index) => {
                    return <Grid key={index} item xs={12} md={4} >
                    <Paper variant="outlined" elevation={0} sx={{
                        borderRadius: "8px",
                        p:2,

                        "&:hover" : {
                            bgcolor: "secondary.fade2",
                            borderColor: "secondary.dark"
                        }
                    }}>
                        <Typography variant="h5">{feature.title}</Typography>
                        <Typography variant="body1">{feature.text}</Typography>

                    </Paper>
                </Grid>
                })}
            </Grid>
            </Box>
  )
}

export default Features