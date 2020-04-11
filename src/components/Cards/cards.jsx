import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import Styles from "./cards.css";

const Cards = (props) => {
    console.log(props);

    return (
        <div className={Styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            Real Data
                        </Typography>
                        <Typography color="textSecondary">
                            Date
                        </Typography>
                        <Typography variant="body2">
                            Active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            Real Data
                        </Typography>
                        <Typography color="textSecondary">
                            Date
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Casualites
                        </Typography>
                        <Typography variant="h5">
                            Real Data
                        </Typography>
                        <Typography color="textSecondary">
                            Date
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
            <h1>Cards</h1>
        </div>
    )
}

export default Cards;