import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';

import { Sidebar, SidebarContents } from "./Sidebar";
import Navbar from "./Navbar";
// import { getProfile } from "../../redux/profile/ProfileActions";

import '../../styles/pages/PagesContainer.scss';

const PagesContainer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const session = sessionStorage.getItem('isMySessionActive');
        if(!session) {
            navigate('/auth/login');
        }
        else {
            // if(token)
            //     dispatch(getProfile("user/getinfo", {}))
        }
    }, [token]);

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="pagesContainer"
        >
            <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />

            <Grid item className="sidebar" sx={{ display: { xs: 'none', lg: 'block' }, backgroundColor: "var(--dark-blue)" }} xs={2}>
                <SidebarContents />
            </Grid>

            <Grid item xs>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sx={{ width: "100%" }}>
                        <Navbar toggleSidebar={setShowSidebar} />
                    </Grid>

                    <Grid item className="outlet-box">
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default PagesContainer;