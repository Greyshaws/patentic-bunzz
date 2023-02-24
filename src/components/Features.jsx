import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const features = [
    {
        title: "Time-Logged Blockchain Patents",
        text: "Patentic allows users to easily create, store, and view patents on the platform. Users can upload their patent documents and store them securely on the blockchain, ensuring that they are tamper-proof and immutable. They can also view and manage their patents from their dashboard, making it easier to keep track of their intellectual property.",
    },
    {
        title: "Message Patent Owners",
        text: "Patentic enables users to explore other patents on the platform, allowing them to discover new inventions and ideas. Users can also message the owners of these patents directly, which can facilitate collaboration and licensing opportunities. This feature can help inventors connect with potential partners and investors, and ultimately monetize their inventions.",
    },
    {
        title: "PAT Token",
        text: "Patentic rewards users with PAT tokens when they create a patent on the platform. These tokens can be used to pay for future patent-related services on the platform, or they can be traded on cryptocurrency exchanges. This incentivizes users to create patents on the platform, while also providing a way to access other patent-related services in the future.",
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