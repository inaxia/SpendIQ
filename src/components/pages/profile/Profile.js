import React, { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import '../../../styles/pages/Profile.scss';

const Profile = () => {

    let user = {};
    user = JSON.parse(localStorage.getItem("userInfo"));
    
    return (
        <div className="profile whiteBox">
            <Typography variant="body" gutterBottom className="title">User Information</Typography>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                className="personalInfo"
                spacing={2}
            >
                <Grid item xs={12} sm={7} md={9} sx={{paddingTop: "0px !important"}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        className="personalInfo"
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" value={user?.name?.split(' ')[0]} disabled />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={user?.name?.split(' ')[1]} disabled />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" type="email" label="Email" variant="outlined" value={user?.email} disabled />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={5} md={3} textAlign="center">
                    <img src={user?.picture} alt="user profile" referrerPolicy="no-referrer" width="150px" className="picture" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;