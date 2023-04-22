import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DailyStats from "./DailyStats";
// import StatDetails from "./StatDetails";

import '../../../styles/pages/Dashboard.scss';

const Dashboard = () => { 
    const [activeStat, setActiveStat] = useState({id: 1, name: "SBI", color: "#e23270"},);

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="dashboard"
        >
            <Grid item sx={{ mb: 3 }}>
                <Typography variant="body" gutterBottom className="stat-title">STOCKS</Typography>
                <DailyStats activeStat={activeStat} setActiveStat={setActiveStat} />
            </Grid>

            <Grid item sx={{ width: "100%" }}>
                <Typography variant="body" gutterBottom className="stat-title">{activeStat.name} Trends</Typography>
                {/* <StatDetails activeStat={activeStat} /> */}
            </Grid>
        </Grid>
    );
}

export default Dashboard;