import { Card, CardContent, Grid, Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';
import Calc from './images/icon-calculator.svg'
import Karma from './images/icon-karma.svg'
import Supervisor from './images/icon-supervisor.svg'
import TeamBuilder from './images/icon-team-builder.svg'

export default function xxx() {

    const colors = [
        ["hsl(180, 62%, 55%)", 4, "2 / 1 / 4 / 3", "Supervisor", "Monitors activity to identify project roadblocks", Supervisor],
        ["hsl(0, 78%, 62%)", 4, "1 / 3 / 3 / 5", "Team Builder", "Scans our talent network to create the optimal team for your project", TeamBuilder],
        ["hsl(34, 97%, 64%)", 4, "3 / 3 / 5 / 5", "Karma", "Regularly eveluates our talent to ensure Quality", Karma],
        ["hsl(212, 86%, 64%)", 4, "2 / 5 / 4 / 7", "Calculator", "uses data from past project to provide better delivery estimates", Calc]
    ]

    const classes = useStyles();
    const useMedia = useMediaQuery('(min-width: 750px)')
    const Muster = useMedia ? classes.grid : classes.flex;
    const Abstand = useMedia ? classes.card : classes.abstand;

    return (
        <div style={{backgroundColor: "#f0f0f0"}}>
            <Typography variant="h3" className={classes.subHeader}>Reliable, efficient delivery</Typography>
            <Typography variant="h2" className={classes.header}>Powered by Technology</Typography>
            <Typography className={classes.paragraph}>Our Artificial Intelligene powered tools use millions of project data points to ensure that your project is successful.</Typography>
                <Grid Container className={Muster}>
                    {colors.map((color) => (
                    <Grid item key={color} style={{gridArea: color[2]}} >
                        <Card className={Abstand} >
                            <CardContent>
                                <p className={classes.color} style={{backgroundColor:color[0]}}></p>
                                <Typography variant="h5" className={classes.cardText} gutterBottom>
                                    {color[3]}
                                </Typography>
                                <Typography className={classes.cardText}>
                                    {color[4]}
                                </Typography>
                                <Grid style={{display: "flex", flexDirection: "row-reverse"}}>
                                    <img item className={classes.image} src={color[5]} alt="Logo"></img>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
        </div>
    )
}
