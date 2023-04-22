import React, { useEffect, useState } from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { stockList } from "../../Constants";

const StatCard = (obj
  , activeStat, setActiveStat) => {
  const handleCardClick = () => {
    setActiveStat(obj)
  }
  
  return (
    <Card variant="outlined" className="whiteBox daily-stat-card" onClick={handleCardClick} sx={{borderColor: activeStat.id === obj.id ? obj.color : "#fff"}}>
      <Box className="whiteBox icon-box"
        sx={{
          border: "2px solid #fff",
          borderColor: activeStat.id === obj.id ? obj.color : "#fff",
          svg: {
            color: obj.arrow==="up" ? "#1d9d2a" : "#de1619"
          }
        }}
      >
        {obj.arrow==="up" ? <TrendingUpIcon /> : <TrendingDownIcon />}
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography variant="h4" gutterBottom> {obj.name} </Typography>
        <Typography variant="h6" gutterBottom> {obj.value} </Typography>
      </Box>
    </Card>
  );
}

const DailyStats = (props) => {
  const { activeStat, setActiveStat } = props;

  const getYahooApiData = (element) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c8200b680amsh398605588405fd0p1a71d1jsn73738ef68e88',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    };

    fetch(`https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?symbol=${element.name}&region=IN`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
        .catch(err => console.error(err));
  }

  useEffect(() => {
    stockList.forEach(element => {
      getYahooApiData(element);
    });
  }, [])

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="centre"
      className="daily-stats"
    >
      {stockList.map((obj) => (
        <Grid item key={`daily-stat-${obj.id}`} xs={12} sm={6} md={4} lg={3}> {StatCard(obj, activeStat, setActiveStat)} </Grid>
      )
      )}
    </Grid>
  );
}

export default DailyStats;