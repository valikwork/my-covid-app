import React, {useEffect} from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../redux/actions/covidActions';
import LoadingAnimation from '../components/LoadingAnimation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import Grid from '@material-ui/core/Grid';
import NotesIcon from '@material-ui/icons/Notes';

const DataLayout = () => {
    const data = useSelector(state => state.data)
    return (
        <Grid container spacing={2}>

            <Grid item xs={12} md={6} lg={4}>
                <Typography variant="h5">
                    Cases
                </Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Active" secondary={data.active} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total cases" secondary={data.cases}/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Critical" secondary={data.active} />
                    </ListItem>
                </List>
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
                <Typography variant="h5">
                    Death
                </Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MoodBadIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Death" secondary={data.deaths} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MoodBadIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Deaths Per One Million" secondary={data.deathsPerOneMillion}/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MoodBadIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Today Deaths" secondary={data.todayDeaths} />
                    </ListItem>
                </List>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Typography variant="h5">
                    Recovered
                </Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccessibilityIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Recovered" secondary={data.recovered} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccessibilityIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Recovered Per One Million" secondary={data.recoveredPerOneMillion} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccessibilityIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Today Recovered" secondary={data.todayRecovered} />
                    </ListItem>
                </List>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Typography variant="h5">
                    Tests Done
                </Typography>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <NotesIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Tests" secondary={data.tests} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <NotesIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Tests Per One Million" secondary={data.testsPerOneMillion} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <NotesIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Today Cases" secondary={data.todayCases} />
                    </ListItem>
                </List>
            </Grid>

        </Grid>
    )
}

function Home() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading)
    
    useEffect(() => {
        dispatch(getAllData())
    }, [dispatch])
    
    return (
        <Container>
            <Typography variant="h1" style={{ marginBottom: '30px', textAlign: 'center' }}>
                Current Status 
            </Typography>
            {isLoading ? <LoadingAnimation /> : <DataLayout />}
        </Container>
    )
}

export default Home