import React, { useContext} from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
import ContractContext from '../context/contract-context'
import Header from '../components/Layout/Header'
import NotConnected from "../components/Errors/NotConnected"
import CreatePatentForm from '../components/Patents/CreatePatentForm'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const CreatePatent = () => {
    // const params = useParams();
    // const navigate = useNavigate();
    const contractCtx = useContext(ContractContext)

    const { connected } = contractCtx


    

    // const backHandler = () => {
    //     navigate(-1);
    // }

  return (
    <>
    <Header />
    <Box component="section" sx={{
      mt: {xs: "4rem"},
      p: 2,
    }} >
        <Typography variant="h1" sx={{
          textAlign: "center",
        }} >Create Patent</Typography>
        {!connected ? <NotConnected /> : <CreatePatentForm />
       }
   </Box>
    
    </>
    
  )
}

export default CreatePatent