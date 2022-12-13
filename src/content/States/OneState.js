import { Container, Paper } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStateData, GET_ONE_STATE_DATA } from '../../redux/actions/covidActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LoadingAnimation from '../../components/LoadingAnimation';
import numberWithSpaces from '../../functions/numberWithSpaces'
const shortid = require('shortid');

const DataLayout = () => {
    const data = useSelector(state => state.covid.data)
    const dataType = useSelector(state => state.covid.dataType)
    if(dataType === GET_ONE_STATE_DATA){
        return (
            <List>
                {data && Object.entries(data).map(eachData => {
                    const formatedKeyName = eachData[0].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
                    const value = eachData[1];
                    return (
                        <ListItem key={shortid.generate()}>
                            <ListItemText primary={formatedKeyName} secondary={numberWithSpaces(value)} />
                        </ListItem>
                    )
                })}
            </List>
        )
    } else {
        return null
    }
    
}

function OneState() {
    const { name } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.covid.isLoading)

    useEffect(() => {
        dispatch(getOneStateData(name))
    }, [dispatch, name])

    
    return (
        <Container component={Paper}>
            <Typography variant="h1">
                {name}
            </Typography>
            {isLoading ? <LoadingAnimation/> : <DataLayout /> }
        </Container>
    )
}

export default OneState
