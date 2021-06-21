import React, { useEffect } from 'react'
import { Container, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import LoadingAnimation from '../../components/LoadingAnimation';
import { getOneCountryData, GET_ONE_COUNTRY_DATA } from '../../redux/actions/covidActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Image from 'material-ui-image'
import numberWithSpaces from '../../functions/numberWithSpaces'
import Map from '../../components/Map'
const shortid = require('shortid');

const DataLayout = () => {
    const data = useSelector(state => state.data)
    const dataType = useSelector(state => state.dataType)
    
    if(dataType === GET_ONE_COUNTRY_DATA){
        return (
            <>
            <div className="country-details">
                <Image
                    src={data.countryInfo.flag}
                    style={{ width: '250px', height: '167px', paddingTop: '0', marginRight: '30px' }}
                />
                <Map lat={data.countryInfo.lat} cases={numberWithSpaces(data.cases)} long={data.countryInfo.long} />
            </div>
            
            <List>
                {data && Object.entries(data).map(eachData => {
                    if(eachData[0] !== "countryInfo"){
                        const formatedKeyName = eachData[0].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
                        const value = eachData[1];
                        return (
                            <ListItem key={shortid.generate()}>
                                <ListItemText primary={formatedKeyName} secondary={numberWithSpaces(value)} />
                            </ListItem>
                        )
                    }
                    
                })}
            </List>
            </>
        )
    } else {
        return null
    }
}

function OneCountry() {
    const { name } = useParams();
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.isLoading)
    
    useEffect(() => {
        dispatch(getOneCountryData(name))
    }, [dispatch, name])
    
    return (
        <>
        <Container component={Paper}>
            <Typography variant="h1" style={{ marginBottom: '20px' }}>
                {name}
            </Typography>
            {isLoading ? <LoadingAnimation /> : <DataLayout />}
        </Container>
        </>
    )
}

export default OneCountry
