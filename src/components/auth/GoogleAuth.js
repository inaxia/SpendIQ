import React from "react";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import GoogleIcon from '../../assets/images/GoogleIcon.png';

const GoogleAuth = () => {

    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            localStorage.setItem("authCode", tokenResponse.access_token);
            sessionStorage.setItem("isMySessionActive", true);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );

            localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
            navigate('/pages/dashboard');
        },
        onError: errorResponse => console.log(errorResponse),
    });

    return (
        <Button className="authButton" onClick={googleLogin}>
            Sign in with Google &nbsp;
            <img src={GoogleIcon} alt="google logo" width="20px" />
        </Button>
    );
}

export default GoogleAuth;