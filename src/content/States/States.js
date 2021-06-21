import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import { getAllStatesData, GET_ALL_STATES_DATA } from '../../redux/actions/covidActions';
import LoadingAnimation from '../../components/LoadingAnimation';
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

const DataLayout = () =>{
    const data = useSelector(state => state.data)
    const dataType = useSelector(state => state.dataType)
    const [filteredData, setFilteredData] = useState(data)
    if(dataType === GET_ALL_STATES_DATA){
        data.forEach(each => {
            for (let prop in each) {
                each[prop] = numberWithSpaces(each[prop])
            }
        })

        const searchHandler = (val) => {
            const newData = data.filter(state => state.state.toLowerCase().includes(val.toLowerCase()))
            setFilteredData([...newData]);
        }
        
        return(
            <TableContainer component={Paper}>
                <Search searchHandler={searchHandler} />
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>State</TableCell>
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
                            <TableRow key={row.state}>
                                <TableCell component="th" scope="row">
                                    <Link style={{ color: '#3f51b5' }} to={`states/${row.state}`}>{row.state}</Link>
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

function States() {
    
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading)
    useEffect(() => {
        dispatch(getAllStatesData())
    }, [dispatch])

    return (
        <Container>
            {isLoading ? <LoadingAnimation/> : <DataLayout/>}
        </Container>
    )
}

export default States