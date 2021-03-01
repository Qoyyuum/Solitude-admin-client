import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import Container from '@material-ui/core/Container';
import HistoryItems from "./HistoryItems";
import UpcomingItems from "./UpcomingItems";
import CheckInsItems from "./CheckInsItems";
import CheckOutsItems from "./CheckOutsItems";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row">
        <Grid container spacing={2} direction="column" xs={3}>
          <Grid item>
            <HistoryItems />
          </Grid>
          <Grid item>
            <UpcomingItems />
          </Grid>
        </Grid>
        <Grid container spacing={2} xs>
          <Grid item>
            <Container maxWidth="sm"><MapContainer className={classes.paper}/></Container>
          </Grid>
        </Grid>
        <Grid container spacing={2} direction="column" xs={3}>
          <Grid item >
            <CheckInsItems />
          </Grid>
          <Grid item>
            <CheckOutsItems />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
