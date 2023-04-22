import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const GraphCard = (obj) => {
  return (
    <Card variant="outlined" className="whiteBox weekly-stat-card" >
      <Box className="whiteBox chart-box"
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
        }}
      >
        <iframe src={obj.link} style={{width:"100%", height: "100%"}}></iframe>
      </Box>
    </Card>
  );
}

const StatDetails = (props) => {
  const { activeStat } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="centre"
      className="weekly-stats"
    >
      <Grid item key={`statDetails-weekly`} xs={12}>{GraphCard(activeStat)}</Grid>
    </Grid>
  );
}

export default StatDetails;