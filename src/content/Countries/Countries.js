import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import LoadingAnimation from '../../components/LoadingAnimation';
import { getAllCountriesData, GET_ALL_COUNTRIES_DATA } from '../../redux/actions/covidActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import numberWithSpaces from '../../functions/numberWithSpaces'
import Search from '../../components/Search';
import Map from '../../components/Map';

const DataLayout = () => {
    const data = useSelector(state => state.covid.data)
    const dataType = useSelector(state => state.covid.dataType)
    const [filteredData, setFilteredData] = useState(Array.isArray(data) ? [...data] : [])

    if(dataType === GET_ALL_COUNTRIES_DATA && Array.isArray(data)){
        data.forEach(each => {
            for (let prop in each) {
                each[prop] = numberWithSpaces(each[prop])
            }
        })

        const searchHandler = (val) => {
            const newData = data.filter(country => country.country.toLowerCase().includes(val.toLowerCase()))
            setFilteredData([...newData]);
        }
        
        return (
            <TableContainer component={Paper}>
                <Map style={{ width: '100%', marginBottom: '30px' }} data={data} />
                <Search searchHandler={searchHandler} />
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align="right">Cases</TableCell>
                        <TableCell align="right">Deaths</TableCell>
                        <TableCell align="right">Recovered</TableCell>
                        <TableCell align="right">Tests</TableCell>
                        <TableCell align="right">Population</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Array.isArray(filteredData) && filteredData.map((row) => {
                        return(
                            <TableRow key={row.country}>
                                <TableCell component="th" scope="row">
                                    <Link style={{ color: '#3f51b5' }} to={`countries/${row.country}`}>{row.country}</Link>
                                </TableCell>
                                <TableCell align="right">{row.cases}</TableCell>
                                <TableCell align="right">{row.deaths}</TableCell>
                                <TableCell align="right">{row.recovered}</TableCell>
                                <TableCell align="right">{row.tests}</TableCell>
                                <TableCell align="right">{row.population}</TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    } else {
        return null
    }
    
}

export default function Countries() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.covid.isLoading)
    useEffect(() => {
        dispatch(getAllCountriesData())
    }, [dispatch])
    
    return (
        <Container>
            {isLoading ? <LoadingAnimation/> : <DataLayout/>}
        </Container>
    )
}
