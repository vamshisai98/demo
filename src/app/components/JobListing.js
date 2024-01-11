import React from 'react'
import {TextField,Grid,Card,CardContent,Typography} from '@mui/material';
import dummy from '../../../dummy.json'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../store/jobSlice';

const JobListing = () => {
    // const dispatch = useDispatch()
    // const jobListings = useSelector(state=>state.job.jobListings)
    const filterText = useSelector((state)=>state.job.filterText)

  return (
    <div>
        <TextField
            variant='outlined'
            fullWidth
            // value={filterText}
            onChange={e=>dispatch(setFilterText(e.target.value))}
        />
        <Grid>
            {dummy.data.map((job)=>(
                <Grid key={job.id} item>
                <Card>
                    {job.title}
                </Card>
                </Grid>

            ))}
        </Grid>
    </div>
  )
}

export default JobListing