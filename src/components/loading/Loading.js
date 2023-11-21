import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import * as Style from './Style'

export const Loading = ()=>{
    return(
        <Style.Loading>
            <CircularProgress />
        </Style.Loading>
    )
}