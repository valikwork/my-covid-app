import { Container, Paper, Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "../../components/LoadingAnimation";
import { getAllVaccineData, GET_ALL_VACCINE_DATA } from "../../redux/actions/covidActions";
import { makeStyles } from '@material-ui/core/styles';
import parse from 'html-react-parser';

const DataLayout = () => {

    const data = useSelector(state => state.covid.data)
    const dataType = useSelector(state => state.covid.dataType)

    if(Object.keys(data).length !== 0 && dataType === GET_ALL_VACCINE_DATA){

        return(
            <Container component={Paper} style={{ padding: '24px' }} >
                <Typography variant="h3">Total Candidates: {data.totalCandidates}</Typography>
                <Typography variant="h6" style={{ marginBottom: "30px" }}>Source: <a target="_blank" href={data.source}>{data.source}</a></Typography>
                <Typography variant="h4">Phases:</Typography>
                {data.phases.length > 0 ? (
                    <List style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {data.phases.map(e => {
                            return (
                                <ListItem key={e.phase} style={{ maxWidth: '150px' }}>
                                    <ListItemText primary={e.phase} secondary={e.candidates} />
                                </ListItem>
                            )
                        })}
                    </List>
                ) : null}
                {data.data.length > 0 ? (
                <Grid container>
                    {data.data.map(e => {
                        return (
                            <Grid item xs={12} style={{ marginBottom: '30px', padding: '15px' }}>
                                <Paper style={{ padding: '15px' }}>
                                    <Typography variant="h6">Candidate: {e.candidate}</Typography>
                                    <Typography variant="h6">Trial Phase: {e.trialPhase}</Typography>
                                    <Typography variant="h6">Mechanism: {e.mechanism}</Typography>
                                    
                                    {e.institutions.length > 0 && (
                                        <>
                                        <Typography variant="h6">Institutions:</Typography>
                                        <List>
                                            {e.institutions.map(e => {
                                                return (
                                                    <ListItem>
                                                        <ListItemText primary={e} />
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                        </>
                                    )}
                                    {e.sponsors.length > 0 && (
                                        <>
                                            <Typography variant="h6">Sponsors:</Typography>
                                            <List>
                                                {e.sponsors.map(e => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemText primary={e} />
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </>
                                    )}
                                    
                                    
                                    <Typography variant="h6">Details:</Typography>
                                    <p>{parse(e.details)}</p>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
                ) : null}
            </Container>
        )
    } else {
        return null
    }
}


export default function Vaccines() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.covid.isLoading)
    
    useEffect(() => {
        dispatch(getAllVaccineData())
        
    }, [dispatch])
    
    return (
        <Container>
            {isLoading ? <LoadingAnimation/> : <DataLayout/>}
        </Container>
    )
}
