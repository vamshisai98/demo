import { Container ,Typography, CssBaseline} from '@mui/material'
import React from 'react'
import JobListing from '../components/JobListing'

export  const HomePage = () => {
  return (
    <Container maxWidth="md">
       <CssBaseline/>
       <Typography variant='h4' align='center'>
         Jobs Listings
       </Typography>
     <JobListing/>
    </Container>
  )
}
